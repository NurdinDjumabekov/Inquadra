import React from "react";

import "./style.scss";

const SkeletonsSalePage = () => {
  const listBlock = Array.from({ length: 9 }, (_, index) => index);

  return (
    <div className="skeletonParent">
      <div className="container">
        <div className="skeletonParent__inner">
          {/* <div className="menuSkeleton">
            <div>
              <p></p>
              <div className="menuSkeleton__center"></div>
            </div>
            <div className="menuSkeleton__right">
              <span></span>
              <span></span>
            </div>
          </div> */}
          <div className="mainInfo">
            <div className="mainInfo__types">
              <div className="filtered">
                <div></div>
                <div></div>
              </div>
              <section></section>
              <div></div>
              <div></div>
              <p></p>
              <section></section>
              <section></section>
              <div></div>
              <p></p>
              <div></div>
              <span></span>
              <span></span>
            </div>
            <div className="mainInfo__block">
              <main>
                <p></p>
              </main>
              <div className="cardsList">
                {listBlock?.map((i, index) => (
                  <div key={index}></div>
                ))}
              </div>
            </div>
          </div>
          <div className="skeletonFooter"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonsSalePage;
