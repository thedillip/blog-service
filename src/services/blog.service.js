const BlogModel = require("../models/blog.model");

exports.createBlog = async (blog) => {
  return await BlogModel.create(blog);
};

exports.getAllBlogs = async () => {
  return await BlogModel.find();
};

exports.getBlogById = async (blogId) => {
  return await BlogModel.findById(blogId);
};

exports.updateBlog = async (blogId, blog) => {
  return await BlogModel.findByIdAndUpdate(blogId, blog);
};

exports.deleteBlog = async (blogId) => {
  return await BlogModel.findByIdAndDelete(blogId);
};
