import { useNavigate, useParams } from "react-router";
import {
  RadioGroupWrapper,
  TestFormContainer,
  TestFormWrapper,
  TestWrapper,
} from "./TestForm.styled.ts";
import { Button, Radio, Steps, Typography } from "antd";
import { tests } from "../../../shared/mock/tests.ts";
import { useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";

const TestForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const test = useMemo(() => tests.find((test) => test.id === id), [id]);
  const steps = useMemo(
    () =>
      test?.questions.map((el) => ({
        title: el.title,
      })),
    [test],
  );
  const [currentStep, setCurrentStep] = useState(0);
  const { control, getValues } = useForm();

  const nextStep = () => {
    if (steps?.length && currentStep !== steps?.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      onSubmit(getValues());
    }
  };

  const onSubmit = (data: any) => {
    navigate("/test-result", { state: data });
  };

  return (
    <TestFormContainer>
      {test && (
        <TestFormWrapper>
          <Steps current={currentStep} items={steps} direction="vertical" />
          <Controller
            name={test.questions[currentStep].nameVal}
            control={control}
            render={({ field: { value, onChange } }) => (
              <TestWrapper>
                <RadioGroupWrapper value={value} onChange={onChange}>
                  <Typography>{test.questions[currentStep].label}</Typography>
                  {test.questions[currentStep].variants.map((el) => (
                    <Radio value={el.value}>
                      <Typography>{el.label}</Typography>
                    </Radio>
                  ))}
                </RadioGroupWrapper>
                <Button onClick={nextStep}>
                  {steps?.length && currentStep === steps?.length - 1
                    ? "Завершить"
                    : "Следующий"}
                </Button>
              </TestWrapper>
            )}
          />
        </TestFormWrapper>
      )}
    </TestFormContainer>
  );
};

export default TestForm;
