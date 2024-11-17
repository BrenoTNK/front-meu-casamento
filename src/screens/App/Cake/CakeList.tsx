import ProductItem from "@src/components/ProductItem";
import { Container, Row } from "react-bootstrap";
import { KeyboardAvoidingView } from "react-native";


const CakeList = () => {
  return (
    <KeyboardAvoidingView style={{ width: '100%', height: '100%', display: 'flex' }} behavior='position' enabled>
      <Container fluid className="overflow-auto">
        <Row className="justify-content-center m-4">
          Pesquisa
        </Row>
        <Row className="mt-3">
          <h3 className="fw-bold">Bolos</h3>
        </Row>
        <Row className="justify-content-center">
          <ProductItem
            index={ 100 }
            item={{ favorite: false, value: 10.50, uni: 'Uni', sale: { value: 30 } }}
            label="Bolo"
            route="Cake"
          />
        </Row>
      </Container>
    </KeyboardAvoidingView>
  );
};

export { CakeList };