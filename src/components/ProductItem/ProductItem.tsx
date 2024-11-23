import React, { useState } from "react";
import { Col, Card, Row } from "react-bootstrap";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import flower1 from "@assets/img/flower1.jpg";

interface FooterProps {
  index: number;
  item: any;
  label: string;
  route: string;
  img: string;
}

const ProductItem: React.FC<FooterProps> = ({
  index,
  item,
  route,
  label,
  img,
}) => {
  const [isFavorite, setIsFavorite] = useState(item.favorite);
  const navigation = useNavigation();

  const handleProduct = () => {
    navigation.navigate(route, { title: label, item });
  };

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);

    item.favorite = !item.favorite;
  };

  return (
    <Col
      key={index}
      xs={6}
      sm={4}
      md={3}
      lg={3}
      xl={2}
      xxl={2}
      className="flex-column p-2"
    >
      <Card
        style={{ height: "160px", borderRadius: 12, cursor: "pointer" }}
        className="position-relative"
        onClick={handleProduct}
      >
        <Card.Img src={flower1} alt="Card image" />
        <Card.ImgOverlay className="align-content-between">
          <AntDesign
            style={{
              cursor: "pointer",
              position: "absolute",
              top: 10,
              right: 10,
            }}
            name={isFavorite ? "star" : "staro"}
            color={isFavorite ? "#f0ad4e" : "#161718"}
            size={32}
            onPress={handleToggleFavorite}
          />
          <Card.Text
            style={{ bottom: 10, right: 10 }}
            className="position-absolute fw-bold"
          >
            {label}
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
      {item?.sale && (
        <Row
          style={{
            height: "42px",
            color: "#f8f9fa",
            backgroundColor: "#161718",
          }}
          className="m-1"
        >
          <h3 className="text-center fw-bold">{item.sale.value}% OFF</h3>
        </Row>
      )}
    </Col>
  );
};

export default ProductItem;
