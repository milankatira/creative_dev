import React from 'react'

const Main = () => {
  return (
    <div>
      <div
        id="home"
        className="intro route bg-image"
        style={{ backgroundImage: `url("img/intro-bg.jpg")` }}
      >
        <div className="overlay-itro"></div>
        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">I am Morgan Freeman</h1>
              <p className="intro-subtitle">
                <span className="text-slider-items">
                  CEO DevFolio,Web Developer,Web Designer,Frontend
                  Developer,Graphic Designer
                </span>
                <strong className="text-slider"></strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main