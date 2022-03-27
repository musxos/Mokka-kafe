import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import React from "react";

function Footer() {
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <hr />
      <p
        style={{
          textAlign: "center",
          marginTop: "10px",
          color: "white",
        }}
      >
        Developed by{" "}
        <a
          style={{
            textDecoration: "none",
            color: "white",
            fontSize: "20px",
          }}
          href="https://www.linkedin.com/in/omersut/"
          target="blank"
        >
          /omerSut
        </a>
        <br />
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "-14px",
        }}
      >
        <a href="https://www.github.com/omersut/" target="blank">
          <BsGithub size={"33"} style={{ color: "white" }} />
        </a>
        <a
          className="ms-2"
          href="https://www.linkedin.com/in/omersut/"
          target="blank"
        >
          <AiFillLinkedin size={"40"} style={{ color: "white" }} />
        </a>
      </div>
      <br></br>
    </div>
  );
}

export default Footer;
