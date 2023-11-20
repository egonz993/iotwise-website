import React from "react";
import Link from "next/link";

const PageBanner = ({
  pageTitle,
  pageSubtitle
}) => {
  return (
    <>
      <div className="page-title-area item-bg1">
        <div className="container">
          <div className="page-title-content">
            <h2>{pageTitle}</h2>
            <h6>{pageSubtitle}</h6>
            </div>
        </div>
      </div>
    </>
  );
};

export default PageBanner;
