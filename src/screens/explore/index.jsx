import { Row } from "antd";
import React from "react";
import "./explore.css";

const listBlock = () => {
  let list = [];
  for (let i = 0; i < 20; i++) {
    list.push({
      title: `Tên video nhân văn #${i + 1}`,
      video: `Video nhân văn ${i + 1}`,
      author: `Tác giả ${i + 1}`,
      infor: `100${i + 1} views`,
      date: `${i + 1} months ago`,
      detail: `Chị ong nâu nâu nâu nâu. Chị bay đi đâu đi đâu? Bác gà trống mới gáy, ông mặt trời mới dậy Mà trên những cành hoa em đã thấy chị bay.`,
      id: i + 1,
    });
  }
  return list;
};

function Explore() {
  return (
    <div className="list_explore">
      {listBlock().map((item, index) => {
        return (
          <Row className="block_explore" key={index}>
            <div className="label_explore">{item.video}</div>
            <div style={{ width: "60%" }}>
              <div style={{ fontWeight: 500, fontSize: 20, paddingTop: 5 }}>
                {item.title}
              </div>
              <div style={{ fontWeight: 500, paddingBottom: 5 }}>
                {item.author} . {item.infor} . {item.date}
              </div>
              <div className="detail_explore">{item.detail}</div>
            </div>
          </Row>
        );
      })}
    </div>
  );
}

export default Explore;
