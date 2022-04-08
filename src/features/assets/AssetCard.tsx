import { Col, Card, Descriptions } from "antd";
import React from "react";

import { assetsProps } from "../../utils/interfaces";
import AssetCover from "./AssetCover";
import AssetDescription from "./AssetDescription";

interface AssetCardProps {
  asset: assetsProps;
}

const AssetCard = ({ asset }: AssetCardProps) => {
  return (
    <Col span={24} lg={24} xl={12} xxl={8}>
      <Card
        cover={
          <AssetCover
            status={asset.status}
            name={asset.name}
            image={asset.image}
          />
        }
        hoverable
      >
        <AssetDescription
          metrics={asset.metrics}
          specifications={asset.specifications}
        />
      </Card>
    </Col>
  );
};

export default AssetCard;
