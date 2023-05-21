import Image from 'next/image';
import React from 'react'

const Articles = ({blog}) => {
    console.log('blog', blog);
  return (
    <article className="entry blog-overlay p-2">
    <figure className="entry-media">
      <a href="single.html">
        <Image
          src={blog?.attributes?.image?.data?.attributes?.url}
          alt={blog?.attributes?.title}
          width={335}
          height={200}
        />
      </a>
    </figure>
    {/* End .entry-media */}
    <div className="entry-body">
      <div className="entry-meta font-size-normal">
        <a href="#">{new Date(blog?.attributes?.updatedAt).toLocaleDateString()}</a>
      </div>
      {/* End .entry-meta font-size-normal */}
      <h3 className="entry-title my-4 mt-0">
        <a href="single.html">{blog?.attributes?.title}</a>
      </h3>
      {/* End .entry-title */}

    </div>
    {/* End .entry-body */}
  </article>
  )
}

export default Articles