const blogService = require("../services/blog.service");
const projectConstant = require("../utils/project.constant");

exports.createBlog = async (req, res) => {
  try {
    const blog = await blogService.createBlog(req.body);
    res.status(201).json({ data: blog, status: projectConstant.SUCCESS });
  } catch (err) {
    res
      .status(500)
      .json({ error: err.message, status: projectConstant.FAILURE });
  }
};

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await blogService.getAllBlogs();
    res.json({ data: blogs, status: projectConstant.SUCCESS });
  } catch (err) {
    res
      .status(500)
      .json({ error: err.message, status: projectConstant.FAILURE });
  }
};

exports.getBlogById = async (req, res) => {
  try {
    const blog = await blogService.getBlogById(req.params.id);
    res.json({ data: blog, status: projectConstant.SUCCESS });
  } catch (err) {
    res
      .status(500)
      .json({ error: err.message, status: projectConstant.FAILURE });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const blog = await blogService.updateBlog(req.params.id, req.body);
    res.json({ data: blog, status: projectConstant.SUCCESS });
  } catch (err) {
    res
      .status(500)
      .json({ error: err.message, status: projectConstant.FAILURE });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    const blog = await blogService.deleteBlog(req.params.id);
    res.json({ data: blog, status: projectConstant.SUCCESS });
  } catch (err) {
    res
      .status(500)
      .json({ error: err.message, status: projectConstant.FAILURE });
  }
};
