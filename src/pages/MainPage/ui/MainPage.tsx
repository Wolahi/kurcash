import Header from "../../../widgets/Header/ui/Header.tsx";
import { Content, MainPageContainer, TestWrapper } from "./MainPage.styled.ts";
import { testCards } from "../../../shared/mock/testCards.ts";
import TestCard from "../../../entities/TestCard/ui/TestCard.tsx";

export const MainPage = () => {
  return (
    <MainPageContainer>
      <Header />
      <Content>
        <TestWrapper>
          {testCards.map((test) => (
            <TestCard key={test.id} test={test} />
          ))}
        </TestWrapper>
      </Content>
    </MainPageContainer>
  );
};

export default MainPage;
