import React from 'react';
import { Image, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Input from '@components/Input';
import Button from '@components/Button';

const Register = () => {

  const navigation = useNavigation(); 
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <KeyboardAvoidingView style={{ width: '100%', height: '100%', display: 'flex' }} behavior='position' enabled>
      <Container fluid>
        <Row className="align-items-center vh-100">
          <Col xs={ 12 } md={ 6 } className="p-4">
            <h2  className='text-center mb-5 fw-bold'>Registre-se</h2>
            <form onSubmit={ handleSubmit(onSubmit) }>
              <Row className='justify-content-center mb-2'>
                <Input
                  control={ control }
                  name="email"
                  className='col-7 p-0'
                  label="Email"
                  placeholder="Digite seu email"
                  rules={{ required: 'Email é obrigatório' }}
                />
              </Row>
              <Row className='justify-content-center mb-2'>
                <Input
                  control={ control }
                  name="username"
                  className='col-7 p-0'
                  label="Usuário"
                  placeholder="Digite seu usuário"
                  rules={{ required: 'Usuário é obrigatório' }}
                />
              </Row>
              <Row className='justify-content-center mb-2'>
                <Input
                  control={ control }
                  name="password"
                  className='col-7 p-0'
                  label="Senha"
                  type="password"
                  placeholder="Digite sua senha"
                  rules={{ required: 'Senha é obrigatória' }}
                />
              </Row>
              <Row className='justify-content-center mb-2'>
                <Input
                  control={ control }
                  name="confirmPassword"
                  className='col-7 p-0'
                  label="Confirmar Senha"
                  type="password"
                  placeholder="Confirme sua senha"
                  rules={{ required: 'Confirmar senha é obrigatório' }}
                />
              </Row>
              <Row className="justify-content-center mt-4">
                <Button className='col-7' size='lg'>Registrar</Button>
              </Row>
              <Row className="mt-4">
                <p className="text-center">
                  Já tem conta? <a href="#" onClick={ () => navigation.navigate('Login') } className='text-primary text-decoration-none'>Logue aqui</a>
                </p>
              </Row>
            </form>
          </Col>
          <Col md={ 6 } className="d-none d-md-block m-0 p-0 vh-100">
            <Image
              source={ require('@assets/img/foto-placehoulder.png') }
              style={{ width: '100%' }}
            />
          </Col>
        </Row>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default Register;
