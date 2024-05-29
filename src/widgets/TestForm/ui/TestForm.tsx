import { useNavigate, useParams } from "react-router";
import {
  RadioGroupWrapper,
  TestFormContainer,
  TestFormWrapper,
  TestWrapper,
} from "./TestForm.styled.ts";
import { Button, Radio, Spin, Steps, Typography } from "antd";
import { useEffect, useMemo, useState } from "react";
import { ITest } from "../../../shared/config/interfaces/ITest.ts";
import { $api } from "../../../app/api/api.ts";

const TestForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [test, setTest] = useState<ITest>();
  const [isLoading, setIsLoading] = useState(false);
  const steps = useMemo(
    () =>
      test?.questions.map((el) => ({
        title: el.question,
      })),
    [test],
  );
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const nextStep = () => {
    if (steps?.length && currentStep !== steps?.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      onSubmit();
    }
  };

  const handleChangeStep = (val: number) => {
    const temp = answers;
    if (temp[currentStep]) {
      temp[currentStep] = val;
      setAnswers(temp);
    } else {
      setAnswers((prev) => [...prev, val]);
    }
  };

  const onSubmit = () => {
    const data = {
      anketaID: id,
      answers: answers,
    };
    navigate("/test-result", { state: data });
  };

  useEffect(() => {
    if (id) {
      (async () => {
        setIsLoading(true);
        const req = await $api.get(`anketa/${id}`);
        setTest(req.data.value);
        setIsLoading(false);
      })();
    }
  }, [id]);

  return (
    <TestFormContainer>
      {isLoading && !test ? (
        <TestFormWrapper>
          <Spin />
        </TestFormWrapper>
      ) : (
        <TestFormWrapper>
          <Steps current={currentStep} items={steps} direction="vertical" />
          <TestWrapper>
            <RadioGroupWrapper
              onChange={(val) => handleChangeStep(val.target.value)}
            >
              <Typography>{test?.questions[currentStep].question}</Typography>
              {test?.questions[currentStep].answers.map((el) => (
                <Radio value={el.id}>
                  <Typography>{el.answer}</Typography>
                </Radio>
              ))}
            </RadioGroupWrapper>
            <Button onClick={nextStep}>
              {steps?.length && currentStep === steps?.length - 1
                ? "Завершить"
                : "Следующий"}
            </Button>
          </TestWrapper>
        </TestFormWrapper>
      )}
    </TestFormContainer>
  );
};

export default TestForm;
