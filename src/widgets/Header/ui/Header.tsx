import { HeaderContainer, HeaderTitle } from "./Header.styled.ts";
import { Button } from "antd";
import { useNavigate } from "react-router";
import { useAuthContext } from "../../../app/context/useAuthContext.ts";

const Header = () => {
  const navigate = useNavigate();
  const { isAuth, logout } = useAuthContext();
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
