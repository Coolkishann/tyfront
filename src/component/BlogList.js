
import React, { useState } from "react";
import { Link,NavLink } from "react-router-dom";

const BlogList = ({ allBlogs, setAllBlogs, setSelectedBlog }) => {
  const [filterSubject, setFilterSubject] = useState("");

  const filteredBlogs = filterSubject
    ? allBlogs.filter((blog) => blog.subject === filterSubject)
    : allBlogs;

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
          <option value="">Select Subject: All</option>
              <option value="DS">DS</option>
              <option value="CCWS">CCWS</option>
              <option value="DMDW">DMDW</option>
              <option value="WSN">WSN</option>
        </select>
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredBlogs.map((blog) => (
          <div className="bg-white relative p-6 rounded-md shadow-md">
              <Link key={blog._id} to={`/blogs/${blog._id}`}>
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
                  className="bg-green-500 text-white px-4 py-2 mt-2  z-10 inline-block rounded"
                >
                  Download File
                </a>
              )}
              {/* <Link
                to={`/blogs/${blog._id}/edit`}
                className="bg-blue-500 top-2 right-2 text-white px-4 py-2 absolute mt-1 rounded"
              >
                Edit
              </Link> */}
            </div>
        ))}
      </div>
    </>
  );
};

export default BlogList;
