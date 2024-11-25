import React, { useState } from "react";
import { Image, KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Container, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Input from "@components/Input";
import Button from "@components/Button";

import { useApi } from "@src/hooks/useAPI/useApi";
import { registerService } from "@src/services/userService";

const Register = () => {
  const api = useApi();
  const navigation = useNavigation();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data: any) => {
    const user = {
      name: data.username,
      email: data.email,
      password: data.password,
    };

    try {
      await registerService(api, user);
      setErrorMessage("");
      return navigation.navigate("Login");
    } catch (error: any) {
      if (error.response?.status === 400) {
        setErrorMessage("Dados inválidos");
      } else {
        console.error("Erro inesperado:", error);
        setErrorMessage("Ocorreu um erro inesperado. Tente novamente.");
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
            <h2 className="text-center mb-5 fw-bold">Registre-se</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Row className="justify-content-center mb-2">
                <Input
                  control={control}
                  name="email"
                  className="col-7 p-0"
                  label="Email"
                  placeholder="Digite seu email"
                  rules={{ required: "Email é obrigatório" }}
                />
              </Row>
              <Row className="justify-content-center mb-2">
                <Input
                  control={control}
                  name="username"
                  className="col-7 p-0"
                  label="Usuário"
                  placeholder="Digite seu usuário"
                  rules={{ required: "Usuário é obrigatório" }}
                />
              </Row>
              <Row className="justify-content-center mb-2">
                <Input
                  control={control}
                  name="password"
                  className="col-7 p-0"
                  label="Senha"
                  type="password"
                  placeholder="Digite sua senha"
                  rules={{ required: "Senha é obrigatória" }}
                />
              </Row>
              <Row className="justify-content-center mb-2">
                <Input
                  control={control}
                  name="confirmPassword"
                  className="col-7 p-0"
                  label="Confirmar Senha"
                  type="password"
                  placeholder="Confirme sua senha"
                  rules={{ required: "Confirmar senha é obrigatório" }}
                />
              </Row>
              {errorMessage && ( // Exibe a mensagem de erro caso exista
                <Row className="justify-content-center mb-3">
                  <p className="text-danger text-center">{errorMessage}</p>
                </Row>
              )}
              <Row className="justify-content-center mt-4">
                <Button className="col-7" size="lg" type="submit">
                  Registrar
                </Button>
              </Row>
              <Row className="mt-4">
                <p className="text-center">
                  Já tem conta?{" "}
                  <a
                    href="#"
                    onClick={() => navigation.navigate("Login")}
                    className="text-primary text-decoration-none"
                  >
                    Logue aqui
                  </a>
                </p>
              </Row>
            </form>
          </Col>
          <Col md={6} className="d-none d-md-block m-0 p-0 vh-100">
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

export default Register;
