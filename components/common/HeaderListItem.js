import React, { useState, useEffect } from "react";
import styles from "../layout/Header.module.css";
import {
  AlignLeftOutlined,
  ApartmentOutlined,
  ProjectOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";

function HeaderListItem({ flexDirection }) {
  const content = (
    <div>
      <ul>
        <li>item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
      </ul>
    </div>
  );

  return (
    <div
      className={
        flexDirection === "column"
          ? styles.navigation_col
          : styles.navigation_row
      }
    >
      <ul
        className={styles.navigation_list}
        style={{ paddingInlineStart: "0" }}
        type='none'
      >
        <li>
          {flexDirection === "column" ? <ApartmentOutlined /> : null}
          <a href='/learning'>Home</a>
        </li>
        <li>
          {flexDirection === "column" ? <ProjectOutlined /> : null}
          <a href='/projects'>Github</a>
        </li>
        <li>
          {flexDirection === "column" ? <AlignLeftOutlined /> : null}
          <a href='/courses'>Contribute</a>
        </li>

        <li>
          {flexDirection === "column" ? <DollarCircleOutlined /> : null}
          <a href='/pricing'>About</a>
        </li>
      </ul>
    </div>
  );
}

export default HeaderListItem;
