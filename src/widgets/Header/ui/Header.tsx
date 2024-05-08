import { HeaderContainer, HeaderTitle } from "./Header.styled.ts";
import { Button } from "antd";
import { useNavigate } from "react-router";
import useAuth from "../../../app/module/useAuth.ts";

const Header = () => {
  const navigate = useNavigate();
  const { isAuth, logout } = useAuth();
  return (
    <HeaderContainer>
      <HeaderTitle>Главная</HeaderTitle>
      {!isAuth ? (
        <Button type="default" onClick={() => navigate("/login")}>
          Войти
        </Button>
      ) : (
        <Button type="default" onClick={logout}>
          Выйти
        </Button>
      )}
    </HeaderContainer>
  );
};

export default Header;
