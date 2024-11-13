import React, { useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { Container, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Input from '@components/Input';
import Button from '@components/Button';
import RadioButton from '@components/RadioButtons';
import SelectButtons from '@components/SelectButtons';
import Ranger from '@components/Ranger';
import { useNavigation } from '@react-navigation/native';
import useAuth from '@src/hooks/useAuth';


const FirstForm = () => {

  const { addFirstForm } = useAuth();
  const navigation = useNavigation();

  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      person1: '',
      person2: '',
      numberGuests: 0,
      party: 'N',
      religious: 'N',
      honeyMoon: 'N',
      season: '',
      religion: '',
      city: '',
      style: '',
      time: '',
      local: '',
      budget: 5000,
    },
  });

  const watchIsReligious = watch('religious');
  const watchHoneyMoon = watch('honeyMoon');

  const [page, setPage] = useState(0);
  const nextPage = () => setPage((prevPage) => prevPage + 1);
  const previousPage = () => setPage((prevPage) => prevPage - 1);

  const onSubmit = (data: any) => {
    console.log(data);
    if (page === 3) {
      addFirstForm(data.person1, data.person2);
      navigation.navigate('Home');
    } else {
      nextPage();
    }
  }

  const renderPage = () => {
    switch (page) {
      case 0:
        return (
          <Col className='align-content-center'>
            <Input
              control={ control }
              name="person1"
              label="Nome do noivo(a)?"
              className='mb-2'
              placeholder="Digite o nome do noivo(a)"
              rules={{ required: 'Noivo(a) é obrigatório!' }}
            />

            <Input
              control={ control }
              name="person2"
              label="Nome do noivo(a)?"
              className='mb-2'
              placeholder="Digite o nome do noivo(a)"
              rules={{ required: 'Noivo(a) é obrigatório!' }}
            />
          </Col>
        );
      case 1:
        return (
          <Col className='align-content-center'>
            <RadioButton
              control={ control }
              name='party'
              label='Festa?'
              className='mb-2'
              variant='outline-primary'
              itens={[
                { id: 'yesParty', value: 'Y', label: 'Sim' },
                { id: 'noParty', value: 'N', label: 'Não' },
              ]}
            />
            
            <Input
              control={ control }
              name="numberGuests"
              type="number"
              label="Quantos convidados?"
              className='mb-2'
              placeholder="Digite o número de convidados"
              rules={{ required: 'Quantidade de convidados é obrigatório' }}
            />

            <Input
              control={ control }
              name="city"
              label="Qual será a cidade?"
              className='mb-2'
              placeholder="Digite a cidade do casamento"
              rules={{ required: 'Cidade é obrigatória' }}
            />

            <Ranger
              control={ control }
              name="budget"
              type="range"
              className='mb-2'
              label="Qual é o orçamento planejado para o casamento?"
              min={ 5000 }
              max={ 50000 }
              step={ 500 }
              rules={{ required: 'Quantidade de convidados é obrigatório' }}
            />
          </Col>
        );
      case 2:
        return (
          <Col className='align-content-center'>
            <RadioButton
              control={ control }
              name='religious'
              label='Religioso?'
              variant='outline-primary'
              className='mb-2'
              itens={[
                { id: 'yesReligious', value: 'Y', label: 'Sim' },
                { id: 'noReligious', value: 'N', label: 'Não' },
              ]}
            />

            { watchIsReligious === 'Y' && (<SelectButtons
              control={ control }
              name='religion'
              label='Qual religião?'
              className='mb-2'
              rules={{ required: 'Religião é obrigatória', minLength: 1 }}
              itens={[
                { value: "", label: "" },
                { value: "CRISTA", label: "Cristã" },
                { value: "JUDAICA", label: "Judaica" },
                { value: "HINDU", label: "Hindu" },
                { value: "OUTRA", label: "Outra" },
              ]}
            />) }
          </Col>
        );
      case 3:
        return (
          <Col>
            <SelectButtons
              control={ control }
              name='season'
              label='Em que época do ano vocês se casarão?'
              className='mb-2'
              rules={{ required: 'Época do ano é obrigatório', minLength: 1 }}
              itens={[
                { value: "", label: "" },
                { value: "SUMMER", label: "Verão" },
                { value: "FALL", label: "Outono" },
                { value: "WINTER", label: "Inverno" },
                { value: "SPRING", label: "Privamera" },
              ]}
            />

            <SelectButtons
              control={ control }
              name='style'
              label='Como você imagina o estilo do seu casamento?'
              className='mb-2'
              rules={{ required: 'Estilo é obrigatório', minLength: 1 }}
              itens={[
                { value: "", label: "" },
                { value: "FORMAL", label: "Formal" },
                { value: "SEMIFORMAL", label: "Semi-formal" },
                { value: "CASUAL", label: "Casual" },
              ]}
            />

            <SelectButtons
              control={ control }
              name='time'
              label='Em qual período do dia será a cerimônia?'
              className='mb-2'
              rules={{ required: 'Período do dia é obrigatório', minLength: 1 }}
              itens={[
                { value: "", label: "" },
                { value: "MORNING", label: "Manhã" },
                { value: "AFTERNOON", label: "Tarde" },
                { value: "NIGHT", label: "Noite" },
              ]}
            />

            <SelectButtons
              control={ control }
              name='local'
              label='Qual o tipo de local você deseja para o casamento?'
              className='mb-2'
              rules={{ required: 'Local do casamento é obrigatório', minLength: 1 }}
              itens={[
                { value: "", label: "" },
                { value: "BEACH", label: "Praia" },
                { value: "CAMP", label: "Campo" },
                { value: "CHURCH", label: "Igreja" },
                { value: "SALOON", label: "Salão de festas" },
              ]}
            />
          </Col>
        );
      case 4:
        return (
          <Col>
            <RadioButton
              control={ control }
              name='honeyMoon'
              label='Lua de mel?'
              className='mb-2'
              variant='outline-primary'
              itens={[
                { id: 'yesHoneyMoon', value: 'Y', label: 'Sim' },
                { id: 'noHoneyMoon', value: 'N', label: 'Não' },
              ]}
            />

            { watchHoneyMoon === 'Y' && (<Input
              control={ control }
              name="localHoneyMoon"
              label="Qual o destino?"
              className='mb-2'
              placeholder="Digite a cidade da lua de mel"
              rules={{ required: 'Local da lua de mel é obrigatória' }}
            />) }
          </Col>
        );
      default:
        return null;
    }
  };

  return (
    <KeyboardAvoidingView style={{ width: '100%', height: '100%', display: 'flex' }} behavior='position' enabled>
      <Container fluid className='overflow-auto'>
        <Col className="p-5">
          <h2 className='text-center mb-5 fw-bold'>Precisamos de alguns dados sobre o casamento</h2>
          <form onSubmit={ handleSubmit(onSubmit) }>
            { renderPage() }
            <Row className="justify-content-between mt-5">
              <Button onPress={ previousPage } disabled={ page === 0 } className='col-3' variant='secondary' size='lg'>Anterior</Button>
              <Button type='submit' className='col-3' variant='secondary' size='lg'>{ page < 4 ? 'Próximo' : 'Finalizar' }</Button>
            </Row>
          </form>
        </Col>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default FirstForm;
