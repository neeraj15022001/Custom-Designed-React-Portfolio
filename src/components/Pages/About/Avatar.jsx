import React from "react";
import { Image } from "react-bootstrap";

function Avatar({ image }) {
  return (
    <div className="d-flex align-items-center justify-content-center h-100">
      <div
        className="rounded-circle bg-themeYellow p-3"
        style={{ height: "20rem", width: "20rem" }}
      >
        <Image src={image} alt="Hope" className="rounded-circle" fluid />
      </div>
    </div>
  );
}

export default Avatar;
