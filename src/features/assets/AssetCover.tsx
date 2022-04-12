import { Badge, Typography, Image } from "antd";
import React from "react";

import assetsStatus from "../../utils/assetsStatus";

const { Ribbon } = Badge;
const { Title } = Typography;

interface AssetCoverProps {
  status: "inAlert" | "inOperation" | "inDowntime";
  name: string;
  image: string;
  preview: boolean;
}

const AssetCover = ({
  status,
  name,
  image,
  preview = true,
}: AssetCoverProps) => {
  const { name: statusName, color } = assetsStatus[status];

  return (
    <>
      <Ribbon text={statusName} color={color}>
        <Image alt={name} src={image} width="100%" preview={preview} />
      </Ribbon>
      <Title level={4} className="card-title">
        {name}
      </Title>
    </>
  );
};

export default AssetCover;
