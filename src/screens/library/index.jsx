import { Empty } from "antd";
import React from "react";

function Library() {
  return (
    <div
      style={{
        width: "83%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Empty>Library không có dữ liệu</Empty>
    </div>
  );
}

export default Library;
