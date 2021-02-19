import { Button, Divider } from "antd";
import React, { Fragment } from "react";

/**
 * @author Badal Sherpa
 * @function Error
 **/

const Error = (props) => {
  return (
    <Fragment>
      <div className='c'>
        <div className='_404'>404</div>
        <Divider />
        <div className='_1'>
          Oops! the location <strong>{props.location} </strong> that you entered
        </div>
        <div className='_2'>WAS NOT FOUND OR DOES NOT EXIST</div>

        <Button
          style={{ backgroundColor: "lightgreen", margin: "2vh 2vw" }}
          href='/'
        >
          Chech the weather again
        </Button>
      </div>

      <style jsx>{`
        .c {
          text-align: center;
        }
        ._404 {
          font-size: 5rem;
        }
        ._1 {
          font-size: 2rem;
          color: orange;
        }
        ._2 {
          font-size: 1rem;
          color: red;
        }
      `}</style>
    </Fragment>
  );
};

export default Error;
