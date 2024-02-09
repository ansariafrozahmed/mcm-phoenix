"use client";
import React, { useEffect, useState } from "react";
import LatestBlogs from "./LatestBlogs";
import { useSearchParams } from "next/navigation";
import ShareButton from "../ShareButton";
import { domain } from "@/app/page";

const BlogPage = () => {
  const params = useSearchParams();
  const blogid = params.get("id");
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);
  // console.log(blogid, "fetchBlogData");

  useEffect(() => {
    // setLoading(true);
    const fetchGalleryData = async () => {
      const response = await fetch(
        `https://demo-web.live/mcm/wp-json/wp/v2/posts/${blogid}`
      );
      const result = await response.json();
      // console.log(result, "rtytuvbhijnokml");
      setBlogData(result);
      setLoading(false);
    };
    fetchGalleryData();
  }, []);

  return (
    <div className="bg-[#f4f4f4] py-4 lg:py-10 px-4 lg:px-24 lg:flex gap-5 w-full">
      <div className="lg:w-[73%] p-2 lg:p-3 bg-white mb-5 rounded-lg">
        {/* <BreadCrumb
          label1={"Blogs"}
          url={"/blogs"}
        /> */}
        <div className="p-2 lg:p-3 space-y-3">
          <h1 className="text-[1.3rem] lg:text-[2rem] pb-3  font-semibold leading-tight">
            {blogData?.title?.rendered}
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, */}
            praesentium
            {/* Blog Title */}
          </h1>
          {/* <h2>{`${domain}${blogData?.slug}?id=${blogData?.id}`}</h2> */}
          <span className="text-black tracking-wider text-sm">
            Published by{" "}
            <span className="text-aqua">
              {/* {blogData?.author || "NA"} */}
              Admin
            </span>{" "}
            on{" "}
            <span className="text-aqua">
              {new Date(blogData?.date).toLocaleDateString()}
            </span>
          </span>
          {/* <div>
            <ShareButton
              url={`${domain}${blogData?.slug}?id=${blogData?.id}`}
            />
          </div> */}
          <div
            className="space-y-3 blogdescription"
            dangerouslySetInnerHTML={{ __html: blogData?.content?.rendered }}
          ></div>
          {/* <div>
            <ShareButton
              url={`${domain}${blogData?.slug}?id=${blogData?.id}`}
            />
          </div> */}
        </div>
      </div>
      <div className="h-[100%] lg:w-[27%] p-3 lg:p-5 bg-white sticky top-10 rounded-lg font-title">
        <LatestBlogs />
      </div>
    </div>
  );
};

export default BlogPage;
