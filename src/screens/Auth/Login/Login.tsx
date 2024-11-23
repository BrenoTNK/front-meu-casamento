import React, { useState } from "react";
import { Image, KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Container, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Input from "@components/Input";
import Button from "@components/Button";

import { useDispatch } from "react-redux";
import { setToken } from "@src/hooks/useRedux/authSlice";
import { useApi } from "@src/hooks/useAPI/useApi";
import { loginService } from "@src/services/userService";

const Login = () => {
  const api = useApi();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data: any) => {
    try {
      const user = {
        email: data.email,
        password: data.password,
      };
      const response = await loginService(api, user);
      setErrorMessage("");

      const token = response.data?.token;

      if (token) {
        dispatch(setToken(token));
        setErrorMessage("");
        console.log("Login bem-sucedido");
      } else {
        setErrorMessage("Erro ao obter token.");
      }
    } catch (err: any) {
      if (err.response?.status === 401) {
        setErrorMessage("Login inválido");
      } else {
        console.error("Erro inesperado:", err);
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
          <Col md={6} className="d-none d-md-block m-0 p-0 vh-100">
            <Image
              source={require("@assets/img/foto-placehoulder.png")}
              style={{ width: "100%" }}
            />
          </Col>
          <Col xs={12} md={6} className="p-4">
            <h2 className="text-center mb-5 fw-bold">
              Seja bem-vindo de volta!
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Row className="justify-content-center mb-2">
                <Input
                  control={control}
                  name="email"
                  className="col-7 p-0"
                  label="Email"
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
              {errorMessage && ( // Exibe mensagem de erro se existir
                <Row className="justify-content-center mb-3">
                  <p className="text-danger text-center">{errorMessage}</p>
                </Row>
              )}
              <Row className="justify-content-center mt-4">
                <Button type="submit" className="col-7" size="lg">
                  Logar
                </Button>
              </Row>
              <Row className="mt-4">
                <p className="text-center">
                  Esqueceu sua senha?{" "}
                  <a
                    href="#"
                    onClick={() => navigation.navigate("ForgotPassword")}
                    className="text-primary text-decoration-none"
                  >
                    Recupere sua conta
                  </a>
                </p>
              </Row>
              <Row className="mt-sm-5">
                <p className="text-center">
                  Ainda não tem conta?{" "}
                  <a
                    href="#"
                    onClick={() => navigation.navigate("Register")}
                    className="text-primary text-decoration-none"
                  >
                    Registre-se
                  </a>
                </p>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default Login;
