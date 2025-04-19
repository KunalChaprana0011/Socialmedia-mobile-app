import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const generatedUploadUrl = mutation(async (ctx) => {
  const identity = await ctx.auth.getUserIdentity();
  if (!identity) throw new Error("Unauthorized!!");

  return await ctx.storage.generateUploadUrl();
});

export const createPost = mutation({
  args: {
    storageId: v.id("_storage"),
    caption: v.optional(v.string()),
  },

  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Unauthorized!!");

    const currentUser = await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", identity.subject))
      .first();

    if (!currentUser) throw new Error("User not found!!");

    //this gives an image url
    const imageUrl = await ctx.storage.getUrl(args.storageId);
    if (!imageUrl) throw new Error("Image not found!!");

    //creating post

    const postId  = await ctx.db.insert("posts", {
      userId: currentUser._id,
      imageUrl,
      storageId: args.storageId,
      caption: args.caption,
      likes: 0,
      comments: 0,
    });

    //incrementing user post by 1
    await ctx.db.patch(currentUser._id, {
      posts: currentUser.posts + 1,
    });


    return postId;
  },
});
