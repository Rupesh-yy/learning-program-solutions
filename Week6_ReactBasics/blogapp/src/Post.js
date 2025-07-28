import React from "react";

const Post = ({ title, body }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "1rem",
        marginBottom: "1.5rem",
        backgroundColor: "#f8f8f8",
      }}
    >
      <h3 style={{ marginBottom: "0.5rem" }}>{title}</h3>
      <p>{body}</p>
    </div>
  );
};

export default Post;
