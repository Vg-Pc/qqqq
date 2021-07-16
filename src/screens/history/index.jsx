import { Empty } from "antd";
import React from "react";

function History() {
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
      <Empty>History không có dữ liệu</Empty>
    </div>
  );
}

export default History;
