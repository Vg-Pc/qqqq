import { Row } from "antd";
import React from "react";
import "./home.css";

const listBlock = () => {
  let list = [];
  for (let i = 0; i < 20; i++) {
    list.push({
      title: `Tên video #${i + 1}`,
      video: `Video nhân văn ${i + 1}`,
      author: `Tác giả ${i + 1}`,
      infor: `100${i + 1} views`,
      date: `${i + 1} months ago`,
      id: i + 1,
    });
  }
  return list;
};

function Home() {
  return (
    <div className="list_home">
      {listBlock().map((item, index) => {
        return (
          <div className="block_home" key={index}>
            <div className="label_home">{item.video}</div>
            <div style={{ fontWeight: "bold", fontSize: 15, paddingTop: 5 }}>
              <div className="avt_home">{item.id}</div>
              {item.title}
            </div>
            <div>{item.author}</div>
            <div>
              {item.infor} . {item.date}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
