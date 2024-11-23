import { KeyboardAvoidingView } from "react-native";
import { Container, Row } from "react-bootstrap";
import ProductItem from "@src/components/ProductItem";
import NewProductCard from "@src/components/newProductCard/newproductCard";
import flower1 from "@assets/img/flower1.jpg";

const FlowerList = () => {
  const handleProductPress = (id: number) => {
    console.log(`Produto ${id} clicado!`);
  };

  const handleToggleFavorite = (id: number) => {
    console.log(`Favorito do produto ${id} alterado!`);
  };
  return (
    <KeyboardAvoidingView
      style={{ width: "100%", height: "100%", display: "flex" }}
      behavior="position"
      enabled
    >
      <Container fluid className="overflow-auto">
        <Row className="justify-content-center m-4">Pesquisa</Row>
        <Row className="mt-3">
          <h3 className="fw-bold">Flores</h3>
        </Row>
        <Row className="justify-content-center">
          <NewProductCard
            product={{
              id: 1,
              name: "Produto 1",
              price: 100.0,
              sale: 30,
              image: "https://via.placeholder.com/150",
              favorite: false,
            }}
            onPress={() => handleProductPress(1)} // Certifique-se de que esta função está definida corretamente
            onToggleFavorite={(id) => handleToggleFavorite(id)}
          />
          <ProductItem
            index={2}
            item={{ favorite: false, value: 10, uni: "Uni" }}
            label="Flor 2"
            route="Flower"
          />
        </Row>
      </Container>
    </KeyboardAvoidingView>
  );
};

export { FlowerList };
