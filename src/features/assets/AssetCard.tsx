import { Col, Card } from "antd";
import React from "react";

import { assetsProps } from "../../utils/interfaces";
import AssetCover from "./AssetCover";
import AssetDescription from "./AssetDescription";

interface AssetCardProps {
  asset: assetsProps;
  onClick: () => void;
}

const AssetCard = ({ asset, onClick }: AssetCardProps) => {
  const { status, name, image, specifications, metrics } = asset;

  return (
    <Col span={24} lg={24} xl={12} xxl={8}>
      <Card
        cover={
          <AssetCover
            status={status}
            name={name}
            image={image}
            preview={false}
          />
        }
        hoverable
        onClick={onClick}
      >
        <AssetDescription metrics={metrics} specifications={specifications} />
      </Card>
    </Col>
  );
};

export default AssetCard;
