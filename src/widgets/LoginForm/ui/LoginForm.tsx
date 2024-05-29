import { LoginFormContainer, LoginFormWrapper } from "./LoginForm.styled.ts";
import { Button, Input, Typography } from "antd";
import { useNavigate } from "react-router";
import { Controller, useForm } from "react-hook-form";
import { $api } from "../../../app/api/api.ts";
import useAuth from "../../../app/module/useAuth.ts";

const LoginForm = () => {
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm();
  const { login } = useAuth();

  const onSubmit = async (data: any) => {
    const req = await $api.post("/auth/login", data);
    login(req.data.tokenOutput.access);
    navigate("/");
  };

  return (
    <LoginFormContainer>
      <Typography.Title level={3}>Войти в аккаунт</Typography.Title>
      <LoginFormWrapper onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name={"username"}
          render={({ field: { value, onChange } }) => (
            <Input value={value} onChange={onChange} placeholder={"Почта"} />
          )}
        />
        <Controller
          control={control}
          name={"password"}
          render={({ field }) => (
            <Input {...field} placeholder={"Пароль"} type={"password"} />
          )}
        />
        <Button htmlType="submit" type="primary">
          Войти
        </Button>
        <Button type="default" onClick={() => navigate("/reg")}>
          Зарегистрироваться
        </Button>
      </LoginFormWrapper>
    </LoginFormContainer>
  );
};

export default LoginForm;
