import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { Container, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Input from '@components/Input';
import useAuth from '@src/hooks/useAuth';


const Profile = () => {

  const { user } = useAuth(); 

  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: user?.username,
      email: user?.email,
      person1: user?.person1,
      person2: user?.person2,
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <KeyboardAvoidingView style={{ width: '100%', height: '100%', display: 'flex' }} behavior='position' enabled>
      <Container fluid className='col-12'>
        <Row className='mb-5 p-3' style={{ backgroundColor: '#868e96' }}>
          IMG
          <h4 className='text-center text-black fw-bold'>{ user?.username }</h4>
        </Row>
        <Row className='justify-content-center'>
          <Input
            control={ control }
            name="person1"
            className='col-7 mb-2'
            label="Nome do noivo(a)?"
            placeholder="Digite o nome do noivo(a)"
            rules={{ required: 'Noivo(a) é obrigatório!' }}
          />
          <Input
            control={ control }
            name="person2"
            className='col-7 mb-2'
            label="Nome do noivo(a)?"
            placeholder="Digite o nome do noivo(a)"
            rules={{ required: 'Noivo(a) é obrigatório!' }}
          />
          <Input
            control={ control }
            name="email"
            className='col-7 mb-2'
            label="Email"
            placeholder="Digite seu email"
            rules={{ required: 'Email é obrigatório' }}
          />
        </Row>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default Profile;
