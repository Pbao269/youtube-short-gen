import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    // Define tables and their fields here
    users:defineTable({
        name: v.string(),
        email: v.string(),
        pictureURL: v.string(),
        credits: v.number(),
    })
});