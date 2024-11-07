import { KeyboardAvoidingView } from "react-native";
import { Container, Row } from 'react-bootstrap';
import ProductItem from "@src/components/ProductItem";


const PartyList = () => {
  return (
    <KeyboardAvoidingView style={{ width: '100%', height: '100%', display: 'flex' }} behavior='position' enabled>
      <Container fluid className="overflow-auto">
        <Row className="justify-content-center m-4">
          Pesquisa
        </Row>
        <Row className="mt-3">
          <h3 className="fw-bold">Festas</h3>
        </Row>
        <Row className="justify-content-center">
          <ProductItem
            index={ 100 }
            item={{ favorite: false }}
            label="Festa"
            route="Party"
          />
        </Row>
      </Container>
    </KeyboardAvoidingView>
  );
};

export { PartyList };