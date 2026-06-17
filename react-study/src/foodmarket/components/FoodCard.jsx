import { Card, Button } from "react-bootstrap";

function FoodCard({ food }) {
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={(import.meta.env.BASE_URL + "/" + food.imgPath).replace(/\/+/g, "/")} />
            <Card.Body>
                <Card.Title>{food.title}</Card.Title>
                <Card.Text>{food.content}</Card.Text>
                <Card.Text>{food.price}</Card.Text>
                <Button variant="primary">상세보기</Button>
            </Card.Body>
        </Card>
    );
}

export default FoodCard;
