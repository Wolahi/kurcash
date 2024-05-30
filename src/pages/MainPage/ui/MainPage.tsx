import Header from "../../../widgets/Header/ui/Header.tsx";
import { Content, MainPageContainer, TestWrapper } from "./MainPage.styled.ts";
import TestCard from "../../../entities/TestCard/ui/TestCard.tsx";
import { useEffect, useState } from "react";
import { ITestCard } from "../../../shared/config/interfaces/ITestCard.ts";
import { Spin } from "antd";
import { $api } from "../../../app/api/api.ts";

export const MainPage = () => {
  const [data, setData] = useState<ITestCard[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const data = await $api.get("/anketa/all");
      setData(data.data.value);
      setIsLoading(false);
    })();
  }, []);

  return (
    <MainPageContainer>
      <Header />
      <Content>
        {isLoading && !data ? (
          <Spin />
        ) : (
          <TestWrapper>
            {data.map((test) => (
              <TestCard key={test.id} test={test} />
            ))}
          </TestWrapper>
        )}
      </Content>
    </MainPageContainer>
  );
};

export default MainPage;
