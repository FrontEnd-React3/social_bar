import React, { useState } from "react";
import {
  FaPhone,
  FaChevronUp,
  FaMapMarkerAlt,
  FaGithub,
  FaMinus,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";
import "../styles/Socialside.css";

function Socialside() {
const [show,setShow]=useState(false)
  return (
    <div>
      <ul className="toolbar cf">
        <li >
          <a href="https://github.com/" target="_blank">
            <FaGithub className="fa fa-github" aria-hidden="true"></FaGithub>
          </a>
        </li>
        <li className="uitschuiverli" onMouseEnter={()=>setShow(!show)}>
          {show?<div className="uitschuiverstyle">B.Lantsoght@gmail.com</div>:null}
          <a  target="_blank">
            <FaEnvelope
              className="fa
                                    fa-envelope"
              aria-hidden="true"
            ></FaEnvelope>
          </a>
        </li>

        <li>
          <a href="https://web.whatsapp.com/" target="_blank">
            <FaMapMarkerAlt
              className="fa
                                    fa-map-marker"
              aria-hidden="true"
            >
              <div id="map">s</div>
            </FaMapMarkerAlt>
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/benedikt-lantsoght-02481319/"
            target="_blank"
          >
            <FaLinkedin
              className="fa
                                    fa-linkedin"
              aria-hidden="true"
            ></FaLinkedin>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Socialside;
