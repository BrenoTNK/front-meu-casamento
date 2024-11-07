import React from 'react';
import { Image, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Input from '@components/Input';
import Button from '@components/Button';

const ForgotPassword = () => {

  const navigation = useNavigation(); 
  const { control, handleSubmit } = useForm({ defaultValues: { email: '' } });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <KeyboardAvoidingView style={{ width: '100%', height: '100%', display: 'flex' }} behavior='position' enabled>
      <Container fluid>
        <Row className="align-items-center vh-100">
          <Col xs={ 12 } md={ 6 } className="p-4">
            <h2 className='text-center mb-5 fw-bold'>Recupere sua senha</h2>
            <form onSubmit={ handleSubmit(onSubmit) }>
              <Row className='justify-content-center mb-2'>
                <Input
                  control={ control }
                  name="email"
                  label="Email"
                  placeholder="Digite seu email"
                  className='col-7 p-0'
                  rules={{ required: 'Email é obrigatório' }}
                />
              </Row>
              <Row className='justify-content-center mt-4'>
                <Button type='submit' className='col-7' size='lg'>Recuperar</Button>
              </Row>
              <Row className="justify-content-center mt-4">
                <Button onPress={ () => navigation.navigate('Login') } className='col-4' size='lg' variant='outline-primary'>Voltar ao login</Button>
              </Row>
            </form>
          </Col>
          <Col md={ 6 } className="d-none d-md-block vh-100 m-0 p-0">
            <Image source={ require('@assets/img/foto-placehoulder.png') } style={{ width: '100%' }} />
          </Col>
        </Row>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default ForgotPassword;
