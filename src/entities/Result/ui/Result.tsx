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
      const req = await $api.post("/anketa/result", state);
      setResult(req.data.value as IResult);
    })();
  }, [state]);

  return (
    <ResultContainer>
      <Typography.Title level={3}>Результат</Typography.Title>
      {result ? (
        <ResultWrapper>
          <Typography.Title>{result?.title}</Typography.Title>
          <Typography>{result?.description}</Typography>{" "}
        </ResultWrapper>
      ) : (
        <Spin />
      )}
    </ResultContainer>
  );
};

export default Result;
