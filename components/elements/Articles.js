import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Articles = ({blog}) => {
    console.log('blog', blog);
  return (
    <article className="entry blog-overlay p-2">
    <figure className="entry-media">
      <Link href={`/blogs/${blog?.attributes?.slug}`}>
        <Image
          src={blog?.attributes?.image?.data?.attributes?.url}
          alt={blog?.attributes?.title}
          width={335}
          height={200}
        />
      </Link>
    </figure>
    {/* End .entry-media */}
    <div className="entry-body">
      <div className="entry-meta font-size-normal">
        <span>{new Date(blog?.attributes?.updatedAt).toLocaleDateString()}</span>
      </div>
      {/* End .entry-meta font-size-normal */}
      <h3 className="entry-title my-4 mt-0">
        <Link href={`/blogs/${blog?.attributes?.slug}`}>{blog?.attributes?.title}</Link>
      </h3>
      {/* End .entry-title */}

    </div>
    {/* End .entry-body */}
  </article>
  )
}

export default Articles