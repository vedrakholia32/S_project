import React from "react";
import Post from "./Post";

export default function Posts() {
  return (
    <div className="items-center">
      {[1, 2, 3, 4].map((item, index) => (
        <Post key={index} />
      ))}
    </div>
  );
}
