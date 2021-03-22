import React from "react";
import { Col, Row, Divider } from "antd";
import styles from "./Footer.module.css";
import {
  LocationIcon,
  MailIcon,
  MobileIcon,
  WhatsAppIcon,
  LinkedInIcon,
  FaceBookIcon,
  TwitterIcon,
  InstagramIcon,
} from "../../assets/icons/icons";

/**
 * @author
 * @function Footer
 **/

const getYear = new Date().getFullYear(); //dynamic Year

const Footer = () => {
  return (
    <div>
      <Divider plain />
      <Row
        style={{
          marginLeft: "10vh",
          marginRight: "10vh",
          marginTop: "10vh",
          marginBottom: "5vh",
        }}
      >
        <Col
          style={{ textAlign: "center" }}
          xl={6}
          lg={6}
          md={24}
          sm={24}
          xs={24}
        >
          <div className={styles.social}>
            {/* <img width={80} src='/Weather_Teller-blue.png' /> */}
            <strong>
              <h1>Weather-Teller</h1>
            </strong>
            <div
              style={{ padding: "1vw 1vw", fontSize: "1rem", color: "gray" }}
            >
              Ask me about any location, I will give the weather details
              instantly. You true Weather-Teller Friend
            </div>
            <div
              style={{
                textAlign: "center",
              }}
            >
              <a href='www'>
                <FaceBookIcon
                  className='styles.footer_branding'
                  style={{ margin: "1vw" }}
                />
              </a>
              <a href='www'>
                <LinkedInIcon
                  className='styles.footer_branding'
                  style={{ margin: "1vw" }}
                />
              </a>
              <a href='www'>
                <TwitterIcon
                  className='styles.footer_branding'
                  style={{ margin: "1vw", color: "green" }}
                />
              </a>
              <a href='www'>
                <InstagramIcon
                  className='styles.footer_branding'
                  style={{ margin: "1vw" }}
                />
              </a>
            </div>
          </div>
        </Col>

        <Col xl={6} lg={6} md={24} sm={24} xs={24}>
          <div className={styles.foot_fonts}>
            <ul style={{ listStyle: "none" }}>
              <h2 className={styles.footer_heading}>IMPORTAN LINKS</h2>
              <li>
                <a>Learning Paths</a>
              </li>
              <li>
                <a>Blogs</a>
              </li>
              <li>
                <a>MCQS</a>
              </li>
              <li>
                <a>Enterprise Solutions</a>
              </li>
            </ul>
          </div>
        </Col>
        <Col xl={6} lg={6} md={24} sm={24} xs={24}>
          <div className={styles.foot_fonts}>
            <ul style={{ listStyle: "none" }}>
              <h2 className={styles.footer_heading}>WEBSITE</h2>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Privacy Policy</a>
              </li>
              <li>
                <a>Contact Us</a>
              </li>
            </ul>
          </div>
        </Col>
        <Col
          style={{ textAlign: "center" }}
          xl={6}
          lg={6}
          md={24}
          sm={24}
          xs={24}
        >
          <div className={styles.foot_fonts}>
            <ul style={{ listStyle: "none" }}>
              <h2 className={styles.footer_heading}>GET IN TOUCH</h2>
              <li>
                <LocationIcon />

                <a>
                  4th Mile <br></br>Darjeeling, West Bengal, India, 734221
                </a>
              </li>
              <li>
                <MailIcon />
                {"  "}
                <a href='mailto:codinghumanshelp@gmail.com'>
                  codinghumanshelp@gmail.com
                </a>
              </li>
              <li>
                <MobileIcon /> <a>+91-734221</a>
              </li>
              <li>
                <WhatsAppIcon /> {"  "}
                <a>Join our Whatsapp group</a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
      <Divider plain />
      <div
        style={{
          textAlign: "center",
          paddingLeft: "2vw",
          paddingRight: "2vw",
          paddingBottom: "2vh",
          fontSize: "1rem",
          color: "gray",
        }}
      >
        Copyright © Weather-Teller | {getYear} All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
