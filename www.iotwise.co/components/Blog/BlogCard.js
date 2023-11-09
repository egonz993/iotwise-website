import React from 'react'
import Link from "next/link";

export const BlogCard = ({ id, date, author, title, resume, url }) => {

    return (
        <Link href={`${url}`} className='text-dark'>
            <div className="col-12">
                <div className="single-news">

                    <div className="news-content-wrap">
                        <p>
                            <span className='h5'><strong><i className="bx bx-user" /> {author}</strong></span>
                            <br /><i className="h6 bx bx-calendar" /> {date}
                        </p>

                        <div> 
                            <h3 className='link-primary'>{title}</h3>
                            <span>{resume}</span><br />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
