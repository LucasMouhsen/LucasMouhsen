import { Col, Container, Row } from "react-bootstrap";
import { useGiphy } from "../../hooks/useGiphy";

export default function NotFound() {
  const gif  = useGiphy()
  console.log(gif);
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center">404</h1>
          <h1 className="text-center">Page not found</h1>
          <video src={gif} autoPlay></video>
        </Col>
      </Row>
    </Container>
  );
}