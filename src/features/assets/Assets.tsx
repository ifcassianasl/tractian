import React, { useState, useEffect } from "react";
import { Row } from "antd";
import { APIEndpoints } from "../../services/api";

import { assetsProps } from "../../utils/interfaces";

import AssetCard from "./AssetCard";

import "./Assets.css";

const Assets = () => {
  const [assets, setAssets] = useState<assetsProps[]>([]);

  const requestAssets = async () => {
    setAssets(await APIEndpoints.getAssets());
  };

  useEffect(() => {
    requestAssets();
  }, []);

  return (
    <Row gutter={[8, 12]} wrap justify="space-between">
      {assets.map((asset: assetsProps) => (
        <AssetCard key={asset.id} asset={asset} />
      ))}
    </Row>
  );
};

export default Assets;
