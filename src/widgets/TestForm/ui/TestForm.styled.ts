import styled from "styled-components";
import { Radio } from "antd";

export const TestFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 24px;
`;

export const TestFormWrapper = styled.form`
  display: grid;
  grid-template-columns: auto 400px;
  min-height: 400px;
  gap: 8px;
`;

export const RadioGroupWrapper = styled(Radio.Group)`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const TestWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
