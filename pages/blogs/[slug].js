import { fetchDataFromApi } from "@/utils/api";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
const SingleBlog = ({ blog, relatedBlogs, slug ,blogCats}) => {
  console.log("related Blogs", relatedBlogs);
  const bl = blog?.data?.[0]?.attributes;
  return (
    <main className="main px-5">

      <nav aria-label="breadcrumb" className="breadcrumb-nav mb-3">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link href="/blogs">Blogs</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
             {bl?.title}
            </li>
          </ol>
        </div>
        {/* End .container */}
      </nav>
      {/* End .breadcrumb-nav */}
      <div className="page-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <article className="entry single-entry">
                <figure className=" d-flex justify-content-center">
                  <Image
                    src={bl?.image?.data?.attributes?.url}
                    alt={bl?.title}
                    width={400}
                    height={200}
                  />
                </figure>
                {/* End .entry-media */}
                <div className="entry-body">
                  <div className="entry-meta">
                    <span className="entry-author">
                      by <span>{bl?.author}</span>
                    </span>
                    <span className="meta-separator">|</span>
                    <a href="#">
                      {new Date(bl?.updatedAt).toLocaleDateString()}
                    </a>
                  </div>
                  {/* End .entry-meta */}
                  <h2 className="entry-title">{bl?.title}</h2>
                  {/* End .entry-title */}
                  <div className="entry-cats">
                    in   {bl?.blog_cats?.data.map((cat)=>(
              <Link key={cat?.id} href={`/blogs/category/${cat?.attributes?.slug}`} style={{color:'black'}}> | {cat?.attributes?.title} </Link>
            ))}
                  </div>
                  {/* End .entry-cats */}
                  <div className="entry-content editor-content">
                    <p>
                      <ReactMarkdown>{bl?.content}</ReactMarkdown>
                    </p>
                  </div>
                </div>
                {/* End .entry-body */}
              </article>
            </div>
            {/* End .col-lg-9 */}
            <aside className="col-lg-3">
              <div className="sidebar">
                {/* <div className="widget widget-search">
                  <h3 className="widget-title">Search</h3>
             
                  <form action="#">
                    <label htmlFor="ws" className="sr-only">
                      Search in blog
                    </label>
                    <input
                      type="search"
                      className="form-control"
                      name="ws"
                      id="ws"
                      placeholder="Search in blog"
                      required=""
                    />
                    <button type="submit" className="btn">
                      <i className="icon-search" />
                      <span className="sr-only">Search</span>
                    </button>
                  </form>
                </div> */}
                {/* End .widget */}
                <div className="widget widget-cats">
                  <h3 className="widget-title">Categories</h3>
                  {/* End .widget-title */}
                  <ul>
                  {blogCats?.data?.map((cat)=>(
                      <li key={cat?.id}>
                      <a href={`/blogs/category/${cat?.attributes?.slug}`}>
                        {cat?.attributes?.title}<span>{cat?.attributes?.blogs?.data?.length}</span>
                      </a>
                    </li>
                  ))}
   
                  </ul>
                </div>
                {/* End .widget */}
                <div className="widget">
                  <h3 className="widget-title">Popular Posts</h3>
                  {/* End .widget-title */}
                  <ul className="posts-list">
                   {relatedBlogs?.data?.map((rb)=>(
                     <li key={rb?.id}>
                     <figure>
                       <Link href={`/blogs/${rb?.attributes?.slug}`}>
                         <Image
                           src={rb?.attributes?.image?.data?.attributes?.url}
                           alt="post"
                           width={100}
                           height={100}
                         />
                       </Link>
                     </figure>
                     <div>
                       <span>{new Date(rb?.attributes?.updatedAt).toLocaleDateString()}</span>
                       <h4>
                         <Link href={`/blogs/${rb?.attributes?.slug}`}>{rb?.attributes?.title}</Link>
                       </h4>
                     </div>
                   </li>
                   ))}
      
                  </ul>
                  {/* End .posts-list */}
                </div>
                {/* End .widget */}
              </div>
              {/* End .sidebar sidebar-shop */}
            </aside>
            {/* End .col-lg-3 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </div>
      {/* End .page-content */}
    </main>
  );
};

export default SingleBlog;

export async function getStaticPaths() {
  const blogs = await fetchDataFromApi("/api/blogs?populate=*");
  const paths = blogs?.data?.map((p) => ({
    params: {
      slug: p.attributes.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps({ params: { slug } }) {
  const blog = await fetchDataFromApi(
    `/api/blogs?populate=*&[filters][slug][$eq]=${slug}`
  );
  const blogCats=  await fetchDataFromApi(
    `/api/blog-cats?populate=*`
  );
  const relatedBlogs = await fetchDataFromApi(
    `/api/blogs?populate=*&[filters][slug][$ne]=${slug}&pagination[page]=1&pagination[pageSize]=5`
  );

  return {
    props: {
      blog,
      relatedBlogs,
      slug,
      blogCats
    },
  };
}
