import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Container, Col, Row } from "react-bootstrap";
import AntDesign from '@expo/vector-icons/AntDesign';
import { formatNumberBR } from "@utils/global";
import Button from "@components/Button";


const Flower = () => {

  const route = useRoute();
  const navigation = useNavigation();
  const flower = route.params?.item;

  const [isFavorite, setIsFavorite] = useState(flower.favorite);
  const [quantity, setquantity] = useState(1);

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);

    flower.favorite = !flower.favorite;
  };

  const handleComprar = () => {
    try {
      console.log('Item comprado', quantity);
      navigation.goBack();
    } catch (err) {
      console.log('Erro para realizar compra!');
    }
  };

  const calcularTotal = () => {
    if (flower.sale?.value) {
      const value = (flower.value * (100 - flower.sale.value)) / 100;

      return value * quantity;
    }
    return flower.value * quantity;
  };

  return (
    <Container fluid className="overflow-auto">
      <Row>
        <Col className="p-4 d-flex justify-content-center" xs={ 12 } sm={ 12 } md={ 12 } lg={ 6 } xl={ 6 } xxl={ 6 }>
          <Row className='w-100' style={{ height: '280px', backgroundColor: 'blue', borderRadius: 12 }} xs={ 12 } sm={ 12 } md={ 12 } lg={ 12 } xl={ 12 } xxl={ 12 }>
            <div className="position-relative" style={{ display: 'flex' }}>
              <AntDesign
                style={{ cursor: 'pointer', position: 'absolute', top: 16, right: 16 }}
                name={ isFavorite ? "star" : "staro" }
                color={ isFavorite ? "#f0ad4e" : "#161718" }
                size={ 38 }
                onPress={ handleToggleFavorite }
              />
            </div>
          </Row>
        </Col>
        <Col className="p-4" xs={ 12 } sm={ 12 } md={ 12 } lg={ 6 } xl={ 6 } xxl={ 6 }>
          <h3 className="fw-bold">Floricultura</h3>
          <h4 className="fw-bold">Descrição</h4>
          <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta voluptates voluptatibus nostrum accusamus, quasi magnam eum incidunt molestias ducimus id molestiae nulla ex. Consectetur harum soluta blanditiis explicabo neque dolorem!</p>
          <h4 className="fw-bold d-flex justify-content-between">
            <span><AntDesign name="star" size={ 32 } color="#f0ad4e" />4,5</span>
            <span>
              <span className={ flower.sale?.value ? "text-danger text-decoration-line-through" : '' }>
                R${ formatNumberBR(flower.value) }
              </span>
              { flower.sale?.value ? ` R$${ formatNumberBR((flower.value * (100 - flower.sale.value)) / 100) }` : '' }
              /{ flower.uni }
            </span>
          </h4>
        </Col>
      </Row>
      <hr />
      <Row className="p-2">
        <Col className="d-flex justify-content-between mr-2 ml-2" xs={ 12 } sm={ 12 } md={ 12 } lg={ 12 } xl={ 12 } xxl={ 12 }>
          <h4 className="fw-bold">Quantidade</h4>
          <div className="d-flex">
            <AntDesign
              name="minuscircle"
              size={ 32 }
              style={{ color: quantity > 1 ? '#161718' : '#868e96', marginRight: 16 }}
              onPress={ () => {
                if (quantity > 1) {
                  setquantity(quantity - 1);
                }
              }}
            />
            <h4 className="fw-bold mb-1">{ quantity }</h4>
            <AntDesign
              name="pluscircle"
              size={ 32 }
              style={{ color: '#161718', marginLeft: 16 }}
              onPress={ () => setquantity(quantity + 1) }
            />
          </div>
        </Col>
        <Col className="mt-4 d-flex justify-content-between" xs={ 12 } sm={ 12 } md={ 12 } lg={ 12 } xl={ 12 } xxl={ 12 }>
          <h4 className="fw-bold">Total</h4>
          <h4 className="fw-bold">R${ formatNumberBR(calcularTotal()) }</h4>
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        <Button className='col-6 fw-bold' size='lg' variant="secondary" onPress={ handleComprar }>Comprar</Button>
      </Row>
    </Container>
  );
};

export { Flower };