import { Badge, Typography } from "antd";
import React from "react";

import assetsStatus from "../../utils/assetsStatus";

const { Ribbon } = Badge;
const { Title } = Typography;

interface AssetCoverProps {
  status: "inAlert" | "inOperation" | "inDowntime";
  name: string;
  image: string;
}

const AssetCover = ({ status, name, image }: AssetCoverProps) => {
  const { name: statusName, color } = assetsStatus[status];

  return (
    <>
      <Ribbon text={statusName} color={color}>
        <img alt={name} src={image} />
      </Ribbon>
      <Title level={4} className="card-title">
        {name}
      </Title>
    </>
  );
};

export default AssetCover;
