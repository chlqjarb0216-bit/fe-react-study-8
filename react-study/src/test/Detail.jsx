import { useEffect, useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";
// import "./Detail.css";

function Detail({ item }) {
    // -------------------------------------------------------------------

    return (
        <Container>
            <Row>
                <Col md={12}>
                    <img style={{ width: "100%" }} />
                </Col>
                <Col md={12}>
                    <h4 style={{ paddingTop: "30px" }}>제목</h4>
                    <p>카테고리</p>
                    <p>10000</p>
                    <p>상세설명</p>
                    <Button variant="success">즉시거래</Button>
                    <Button variant="primary">대화신청</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Detail;
