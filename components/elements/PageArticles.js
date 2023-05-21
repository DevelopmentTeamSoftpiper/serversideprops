import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PageArticles = ({blog}) => {
  console.log('pageArticles',blog);
  return (
    <article className="entry entry-list">
    <div className="row align-items-center">
      <div className="col-md-5">
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
      </div>
      {/* End .col-md-5 */}
      <div className="col-md-7">
        <div className="entry-body">
          <div className="entry-meta">
            <span className="entry-author">
              by <span>{blog?.attributes?.author}</span>
            </span>
            <span className="meta-separator">|</span>
            <span>{new Date(blog?.attributes?.updatedAt).toLocaleDateString()}</span>
          
          </div>

          <h2 className="entry-title">
            <Link href={`/blogs/${blog?.attributes?.slug}`}>{blog?.attributes?.title}</Link>
          </h2>
          {/* End .entry-title */}
          <div className="entry-cats">
            in 
            {blog?.attributes?.blog_cats?.data.map((cat)=>(
              <Link key={cat?.id} href={`/blogs/category/${cat?.attributes?.slug}`} style={{color:'black'}}> | {cat?.attributes?.title} </Link>
            ))}
            
          </div>
          {/* End .entry-cats */}
          <div className="entry-content">
            <p>
            {blog?.attributes?.content.substring(0,150)}
            </p>
            <Link href={`/blogs/${blog?.attributes?.slug}`} className="read-more">
              Continue Reading
            </Link>
          </div>
          {/* End .entry-content */}
        </div>
        {/* End .entry-body */}
      </div>
      {/* End .col-md-7 */}
    </div>
    {/* End .row */}
  </article>
  )
}

export default PageArticles