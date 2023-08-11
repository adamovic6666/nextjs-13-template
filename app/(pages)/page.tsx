"use client";
import { PAGES } from "../_constants/index";
import useFetch from "../_hooks/useFetch";
import { Blog } from "../_types";

const HomePage = () => {
  const data = useFetch("/blogs/get-blogs");
  return (
    <>
      <h1>{PAGES.index.title}</h1>
      <div>
        {data?.blogs?.map((blog: Blog, i: number) => {
          return <p key={i}>{blog.title}</p>;
        })}
      </div>
    </>
  );
};

export default HomePage;
