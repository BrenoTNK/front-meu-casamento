import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { RootState } from "@src/hooks/useRedux/store";

const Home = () => {
  const user = useSelector((state: RootState) => state.user);
  const navigation = useNavigation();

  return (
    <Container fluid>
      <Row className="mt-5 mb-5">
        <h3 className="text-center fw-bold">{user.marriage.city}</h3>
      </Row>
      <Row className="justify-content-center">
        <Col
          key={1}
          xs={4}
          sm={4}
          md={4}
          lg={2}
          className="d-flex justify-content-center mb-4"
        >
          <Card
            className="text-center"
            onClick={() => navigation.navigate("FlowerList")}
            style={{
              width: "120px",
              height: "120px",
              backgroundColor: "white",
              cursor: "pointer",
              borderRadius: 12,
            }}
          >
            <Card.Body>
              <MaterialCommunityIcons
                name="flower-tulip"
                size={48}
                color="#373a3c"
              />
              <Card.Text className="fw-bold mt-3">Flores</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col
          key={2}
          xs={4}
          sm={4}
          md={4}
          lg={2}
          className="d-flex justify-content-center mb-4"
        >
          <Card
            className="text-center"
            onClick={() => navigation.navigate("CakeList")}
            style={{
              width: "120px",
              height: "120px",
              backgroundColor: "white",
              cursor: "pointer",
              borderRadius: 12,
            }}
          >
            <Card.Body>
              <MaterialCommunityIcons
                name="cake-layered"
                size={48}
                color="#373a3c"
              />
              <Card.Text className="fw-bold mt-3">Bolo</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col
          key={3}
          xs={4}
          sm={4}
          md={4}
          lg={2}
          className="d-flex justify-content-center mb-4"
        >
          <Card
            className="text-center"
            onClick={() => navigation.navigate("ClouthList")}
            style={{
              width: "120px",
              height: "120px",
              backgroundColor: "white",
              cursor: "pointer",
              borderRadius: 12,
            }}
          >
            <Card.Body>
              <FontAwesome5 name="user-tie" size={48} color="#373a3c" />
              <Card.Text className="fw-bold mt-3">Roupas</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col
          key={4}
          xs={4}
          sm={4}
          md={4}
          lg={2}
          className="d-flex justify-content-center mb-4"
        >
          <Card
            className="text-center"
            onClick={() => navigation.navigate("BuffetList")}
            style={{
              width: "120px",
              height: "120px",
              backgroundColor: "white",
              cursor: "pointer",
              borderRadius: 12,
            }}
          >
            <Card.Body>
              <Entypo name="drink" size={48} color="#373a3c" />
              <Card.Text className="fw-bold mt-3">Buffet</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col
          key={5}
          xs={4}
          sm={4}
          md={4}
          lg={2}
          className="d-flex justify-content-center mb-4"
        >
          <Card
            className="text-center"
            onClick={() => navigation.navigate("PartyList")}
            style={{
              width: "120px",
              height: "120px",
              backgroundColor: "white",
              cursor: "pointer",
              borderRadius: 12,
            }}
          >
            <Card.Body>
              <MaterialCommunityIcons
                name="party-popper"
                size={48}
                color="#373a3c"
              />
              <Card.Text className="fw-bold mt-3">Festa</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col
          key={6}
          xs={4}
          sm={4}
          md={4}
          lg={2}
          className="d-flex justify-content-center mb-4"
        >
          <Card
            className="text-center"
            onClick={() => navigation.navigate("GiftList")}
            style={{
              width: "120px",
              height: "120px",
              backgroundColor: "white",
              cursor: "pointer",
              borderRadius: 12,
            }}
          >
            <Card.Body>
              <Ionicons name="gift" size={48} color="#373a3c" />
              <Card.Text className="fw-bold mt-3">Presentes</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
