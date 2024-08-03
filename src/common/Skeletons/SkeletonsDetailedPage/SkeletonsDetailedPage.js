import React from 'react';
import './style.scss';

const SkeletonsDetailedPage = () => {
  const listRound = Array.from({ length: 20 }, (_, index) => index);
  const listBlock = Array.from({ length: 3 }, (_, index) => index);
  const listCards = Array.from({ length: 4 }, (_, index) => index);

  return (
    <div className="skeletonDetailed">
      <div className="container">
        <div className="skeletonDetailed__inner">
          <div className="skeletonSort">
            <div></div>
            <div></div>
            <div></div>
            <main></main>
          </div>

          <div className="mainDetailedSkeleton">
            <div className="adaptivedlider"></div>
            <section>
              <div>
                <i></i>
                <i></i>
                <i></i>
              </div>
              <main></main>
            </section>

            <header>
              <main></main>
              <main></main>
              <main></main>
              <p></p>
              <div>
                {listBlock.map((_, index) => (
                  <b key={index}></b>
                ))}
              </div>
              <span></span>

              <footer></footer>
            </header>
          </div>

          <header></header>

          <div className="cardsList moreList">
            {listCards?.map((i, index) => (
              <div key={index}>
                <i></i>
                <b></b>
                <span></span>
              </div>
            ))}
          </div>

          <footer></footer>
        </div>
      </div>
    </div>
  );
};

export default SkeletonsDetailedPage;
