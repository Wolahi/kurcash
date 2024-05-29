import { ITestCardProps } from "./interfaces/ITestCardProps.ts";
import { Card, Typography } from "antd";
import { useNavigate } from "react-router";

const TestCard = ({ test }: ITestCardProps) => {
  const navigate = useNavigate();
  return (
    <Card
      title={test.title}
      hoverable
      onClick={() => navigate(`/test/${test.id}`)}
    >
      <Typography.Text>{test.descr}</Typography.Text>
    </Card>
  );
};

export default TestCard;
