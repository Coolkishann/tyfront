
import React, { useState } from "react";
import { Link,NavLink } from "react-router-dom";
const BlogList = ({ allBlogs, setAllBlogs, setSelectedBlog }) => {
  // Default filter set to "DS" instead of ""
  const [filterSubject, setFilterSubject] = useState("DS");

  const filteredBlogs = filterSubject
    ? allBlogs.filter((blog) => blog.subject === filterSubject)
    : [];

  return (
    <>
      <NavLink to="/">
        <button className="bg-blue-500 ml-8 text-white px-4 py-2 rounded">
          Back
        </button>
      </NavLink>
      <div className="mt-8">
        <select
          value={filterSubject}
          onChange={(e) => setFilterSubject(e.target.value)}
          className="p-2 border border-gray-300 rounded mb-4"
        >
          <option value="DS">DS</option>
          <option value="CCWS">CCWS</option>
          <option value="DMDW">DMDW</option>
          <option value="WSN">WSN</option>
        </select>
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredBlogs.map((blog) => (
          <div key={blog._id} className="bg-white relative p-6 rounded-md shadow-md">
            <Link to={`/blogs/${blog._id}`}>
              <p>
                <strong>Subject:</strong> {blog.subject} <br />
                <strong>AIM:</strong> {blog.blogHead} <br />
                <strong>CODE:</strong>{" "}
                {blog.blogData.length > 35
                  ? blog.blogData.substring(0, 35) + "......"
                  : blog.blogData}
              </p>
            </Link>

            {blog.file && (
              <a
                href={`${process.env.REACT_APP_API}/${blog.file}`}
                download
                className="bg-green-500 text-white px-4 py-2 mt-2 z-10 inline-block rounded"
              >
                Download File
              </a>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
export default BlogList;