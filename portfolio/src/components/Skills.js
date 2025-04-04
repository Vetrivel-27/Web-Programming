import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiReact, DiPython, DiJava } from "react-icons/di";
import DotBackground from "./DotBackground";

function Skills() {
  return (
    <div style={{postion:'relative', marginTop:'60px'}}>
    <DotBackground/>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', paddingTop: '20px' }}>
      <h3 style={{color: 'Highlight'}}>Programming Languages I've Studied and Worked with</h3>
      <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
        <Col xs={6} md={4} className="techicons">
          <CgCPlusPlus />
        </Col>
        <Col xs={6} md={4} className="techicons">
          <DiJavascript1 />
        </Col>
      </Row>
      <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
        <Col xs={12} className="techicons">
          <DiReact />
        </Col>
      </Row>
      <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
        <Col xs={6} md={4} className="techicons">
          <DiPython />
        </Col>
        <Col xs={6} md={4} className="techicons">
          <DiJava />
        </Col>
      </Row>
    </div>
    </div>
  );
}

export default Skills;
