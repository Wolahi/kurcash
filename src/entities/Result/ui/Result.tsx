import { Spin, Typography } from "antd";
import { ResultContainer, ResultWrapper } from "./Result.styled.ts";
import { useLocation } from "react-router";
import { TLocationResult } from "./interfaces/TLocationResult.ts";
import { useEffect, useState } from "react";
import { IResult } from "../../../pages/TestResult/ui/interfaces/IResult.ts";
import { $api } from "../../../app/api/api.ts";

const Result = () => {
  const location = useLocation();
  const { state } = location as TLocationResult;
  const [result, setResult] = useState<IResult | null>();

  useEffect(() => {
    (async () => {
      const req = await $api.post("/api/v1/disease/1", {
        data: {
          ...state,
        },
      });
      setResult(req.data as IResult);
    })();
  }, [state]);

  return (
    <ResultContainer>
      <Typography.Title level={3}>Результат</Typography.Title>
      {result ? (
        <ResultWrapper>
          <Typography.Title level={2}>{result?.result}</Typography.Title>
          <Typography>{result?.recommendation}</Typography>{" "}
        </ResultWrapper>
      ) : (
        <Spin />
      )}
    </ResultContainer>
  );
};

export default Result;
