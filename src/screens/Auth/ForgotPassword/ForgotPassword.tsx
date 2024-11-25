import React, { useState } from "react";
import { Image, KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Container, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Input from "@components/Input";
import Button from "@components/Button";
import { useApi } from "@src/hooks/useAPI/useApi"; // Hook para instância de API

const ForgotPassword = () => {
  const api = useApi(); // Obter a instância configurada do Axios
  const navigation = useNavigation();
  const { control, handleSubmit } = useForm({ defaultValues: { email: "" } });
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data: any) => {
    try {
      // await updateUserService(api, { email: data.email });
      setErrorMessage(""); // Limpa a mensagem de erro
      alert("Instruções de recuperação enviadas para o seu email."); // Feedback ao usuário
      navigation.navigate("Login"); // Redireciona para o Login
    } catch (error: any) {
      if (error.response?.status === 404) {
        setErrorMessage("Email não encontrado.");
      } else {
        console.error("Erro inesperado:", error);
        setErrorMessage("Erro inesperado. Tente novamente.");
      }
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ width: "100%", height: "100%", display: "flex" }}
      behavior="position"
      enabled
    >
      <Container fluid>
        <Row className="align-items-center vh-100">
          <Col xs={12} md={6} className="p-4">
            <h2 className="text-center mb-5 fw-bold">Recupere sua senha</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Row className="justify-content-center mb-2">
                <Input
                  control={control}
                  name="email"
                  label="Email"
                  placeholder="Digite seu email"
                  className="col-7 p-0"
                  rules={{ required: "Email é obrigatório" }}
                />
              </Row>
              {errorMessage && (
                <Row className="justify-content-center mb-3">
                  <p className="text-danger text-center">{errorMessage}</p>
                </Row>
              )}
              <Row className="justify-content-center mt-4">
                <Button type="submit" className="col-7" size="lg">
                  Recuperar
                </Button>
              </Row>
              <Row className="justify-content-center mt-4">
                <Button
                  onPress={() => navigation.navigate("Login")}
                  className="col-4"
                  size="lg"
                  variant="outline-primary"
                >
                  Voltar ao login
                </Button>
              </Row>
            </form>
          </Col>
          <Col md={6} className="d-none d-md-block vh-100 m-0 p-0">
            <Image
              source={require("@assets/img/foto-placehoulder.png")}
              style={{ width: "100%" }}
            />
          </Col>
        </Row>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default ForgotPassword;
