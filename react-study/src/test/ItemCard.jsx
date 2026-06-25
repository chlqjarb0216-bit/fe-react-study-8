import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import img from "../foodmarket/img/food1.jpg";

function ItemCard({ item }) {
    let navigate = useNavigate();
    return (
        <Card style={{ width: "18rem", display: "flex", flexDirection: "row" }}>
            <Card.Img variant="string" src={img} style={{ width: "50%" }} />
            <Card.Body style={{ width: "50%" }}>
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
