import { Container, Row, Col } from "react-bootstrap";
import FoodCard from "../components/FoodCard";

function Home({ foods }) {
    return (
        <div>
            <div className="main-bg"></div>
            <Container>
                <Row>
                    {foods.map((food) => {
                        return (
                            <Col md={4} sm={2} key={food.id}>
                                <FoodCard food={food} />
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </div>
    );
}

export default Home;
