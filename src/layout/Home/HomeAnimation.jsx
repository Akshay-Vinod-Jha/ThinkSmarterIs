// import React from "react";
import "./HomeAnimation.scss";
const HomeAnimation = () => {
  return (
    <div className="container">
      {Array(400)
        .fill()
        .map((val, ind) => {
          return <div key={`trigger${ind}`} className="trigger" />;
        })}
      <div className="camera o-x">
        <div className="camera o-y">
          <div className="camera o-z">
            <div className="vr">
              {Array(20)
                .fill()
                .map((val, ind) => {
                  return (
                    <div className="vr_layer" key={`vr_layer${ind}`}>
                      <div className="vr_layer_item"></div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAnimation;
