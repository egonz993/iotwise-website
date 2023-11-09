import React from "react";
import Link from "next/link";

const PageBanner = ({
  pageTitle,
  homePageUrl,
  homePageText,
  activePageText,
}) => {
  return (
    <>
      <div className="page-title-area item-bg1">
        <div className="container">
          <div className="page-title-content">
            <h2>{pageTitle}</h2>
            <ul>
              <li>
                <Link href={homePageUrl}>{homePageText}</Link>
              </li>
              <li>{activePageText}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageBanner;
