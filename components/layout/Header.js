import React, { useState } from "react";
import HeaderListItem from "../common/HeaderListItem";
import styles from "./Header.module.css";
import { Drawer } from "antd";
import { CloseOutlined } from "@ant-design/icons";

import { BarIcon } from "../../assets/icons/icons";

const Header = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(!visible);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <div className={styles.header_nav}>
        <div className={styles.humburger__bar} onClick={showDrawer}>
          {visible ? <CloseOutlined /> : <BarIcon />}
        </div>
        {/* Drawer */}
        <Drawer
          placement='left'
          closable={false}
          onClose={onClose}
          visible={visible}
          key='left'
          className={styles.custom_drawer}
          style={{ zIndex: "5000", padding: "0" }}
        >
          <HeaderListItem flexDirection='column' />
        </Drawer>
        {/*  */}
        <div className={styles.logo_image__wrapper}>
          {/* <img src='../../techlious-blue.png' alt='Logo' /> */}
          <div className={styles.logo_text}>
            <span className={styles.main_text}>Weather-Teller</span>
          </div>
        </div>
        <HeaderListItem flexDirection='row' />
      </div>
    </>
  );
};

export default Header;
