// import "./Items.css";

import { Container, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";

import ItemCard from "./ItemCard";

const iList = [...Array(10)].map((item, index) => {
    return { title: "제목", category: "카테고리", pricce: "10000", detail: "상세설명", id: index };
});
// console.log(iList);

function Items() {
    return (
        <Container>
            <Row md={2} sm={2}>
                {iList.map((item) => {
                    return (
                        <Col md={12} sm={2} key={item.id}>
                            <ItemCard item={item} />
                        </Col>
                    );
                })}
            </Row>
            <br />
            <Button variant="success">물품 등록</Button>
        </Container>
    );
}

export default Items;
