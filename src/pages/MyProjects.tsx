import React from "react";
import { BackToHome } from "../components/BackToHome";

import "./pages.module.css";


export function MyProjects() {
  return (
    <>
      <a
      key={0}
      href={'/'}
      target="_blank"
      rel="noopener noreferrer"
      className="last-talk-item"
    >
      <div className="last-talk-image">
        {/* <ImageItem
          quality={75}
          name={'ko'}
          path="images"
          alt={'km'}
        /> */}
      </div>
      <div className="last-talk-content">
        <span> MIN READ</span>
      </div>
    </a>
      <BackToHome />
    </>
  )
};
