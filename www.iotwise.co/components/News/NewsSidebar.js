import React from "react";
import Link from "next/link";

const NewsSidebar = () => {
  return (
    <>
      <div className="widget-area" id="secondary">
        <div className="widget widget_search">
          <h3 className="widget-title">Search Now</h3>

          <div className="post-wrap">
            <form className="search-form">
              <label>
                <input
                  type="search"
                  className="search-field"
                  placeholder="Search..."
                />
              </label>

              <button type="submit">
                <i className="bx bx-search"></i>
              </button>
            </form>
          </div>
        </div>

        <div className="widget widget-posts-thumb">
          <h3 className="widget-title">Popular Posts</h3>

          <div className="post-wrap">
            <article className="item">
              <Link href="/news-details" className="thumb">
                <span className="fullimage cover bg1" role="img"></span>
              </Link>

              <div className="info">
                <time>February 20, 2020</time>
                <h4 className="title usmall">
                  <Link href="/news-details">
                    Making Peace With The Feast Or Famine Of Freelancing
                  </Link>
                </h4>
              </div>

              <div className="clear"></div>
            </article>

            <article className="item">
              <Link href="/news-details" className="thumb">
                <span className="fullimage cover bg2" role="img"></span>
              </Link>

              <div className="info">
                <time>February 21, 2020</time>
                <h4 className="title usmall">
                  <Link href="/news-details">
                    I Used The Web For A Day On A 50 MB Budget
                  </Link>
                </h4>
              </div>

              <div className="clear"></div>
            </article>

            <article className="item">
              <Link href="/news-details" className="thumb">
                <span className="fullimage cover bg3" role="img"></span>
              </Link>

              <div className="info">
                <time>February 22, 2020</time>
                <h4 className="title usmall">
                  <Link href="/news-details">
                    How To Create A Responsive Popup Gallery?
                  </Link>
                </h4>
              </div>

              <div className="clear"></div>
            </article>

            <article className="item">
              <Link href="/news-details" className="thumb">
                <span className="fullimage cover bg4" role="img"></span>
              </Link>

              <div className="info">
                <time>February 23, 2020</time>
                <h4 className="title usmall">
                  <Link href="/news-details">
                    Web development the best work in the future for the world
                  </Link>
                </h4>
              </div>

              <div className="clear"></div>
            </article>
          </div>
        </div>

        <div className="widget widget_categories">
          <h3 className="widget-title">Categories</h3>

          <div className="post-wrap">
            <ul>
              <li>
                <Link href="#">
                  Business <span>(10)</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  Privacy <span>(20)</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  Technology <span>(10)</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  Tips <span>(12)</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  Uncategorized <span>(16)</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="widget widget_tag_cloud">
          <h3 className="widget-title">Tags</h3>

          <div className="post-wrap">
            <div className="tagcloud">
              <Link href="#">IT Solution (3)</Link>
              <Link href="#">Uncategorized (3)</Link>
              <Link href="#">Tips (2)</Link>
              <Link href="#">AI Solution (2)</Link>
              <Link href="#">Technology (1)</Link>
              <Link href="#">Privacy (1)</Link>
              <Link href="#">Business (1)</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsSidebar;
