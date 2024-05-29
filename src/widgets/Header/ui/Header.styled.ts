import styled from "styled-components";
import { Typography } from "antd";

export const HeaderContainer = styled.header`
  position: fixed;
  width: calc(100% - 24px);
  padding: 12px;
  height: 73px;
  display: flex;
  align-items: center;
  background-color:#1677ff ;
  justify-content: space-between;
`;

export const HeaderTitle = styled(Typography.Title)`
  margin: 0 !important;
  color: white !important;
`;
