import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "../slices/authSlice";
import profileSlice from "../slices/profileSlice";
import blogSlice from "../slices/blogSlice";
import commentSlice from "../slices/commentSlice";
import likeSlice from "../slices/likeSlice";
import blogInfoSlice from "../slices/blogInfoSlice";
import allBlogSlice from "../slices/allBlogSlice";
import authorSlice from "../slices/authorSlice";
import allAuthorSlice from "../slices/allAuthorSlice";
const rootReducer = combineReducers({
    auth: authSlice,
    profile: profileSlice,
    blog: blogSlice,
    comment: commentSlice,
    like: likeSlice,
    blogInfo: blogInfoSlice,
    allBlog: allBlogSlice,
    author: authorSlice,
    allAuthor:allAuthorSlice,

})

export default rootReducer;
