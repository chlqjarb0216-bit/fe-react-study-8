import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router";

function ItemCard({ item }) {
    let navigate = useNavigate();
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.category}</Card.Text>
                <Card.Text>{item.price}</Card.Text>
                <Button
                    variant="primary"
                    onClick={() => {
                        navigate("/detail/" + item.id);
                    }}>
                    상세보기
                </Button>
            </Card.Body>
        </Card>
    );
}

export default ItemCard;
