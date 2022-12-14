import React from "react";
import "./button.css"

const Button = ({ title, targetWebsite }) => {
  return (
    <div className="button" onClick={() => openTargetWebsite(targetWebsite)} onKeyDown={() => openTargetWebsite(targetWebsite)} role='presentation'>
      <div className="center">
        <button className="btn">
          <svg viewBox="0 0 160 60" className="border">
            <polyline
              points="159,1 159,59 1,59 1,1 159,1"
              strokeWidth="3"
              className="bg-line"
            />
            <polyline
              points="159,1 159,59 1,59 1,1 159,1"
              strokeWidth="3"
              className="hl-line"
            />
          </svg>
          <span>{title}</span>
        </button>
      </div>
    </div>
  );
};

export default Button;

function openTargetWebsite(targetWebsite) {
   return targetWebsite ? window.open(targetWebsite, "_blank") : null
}