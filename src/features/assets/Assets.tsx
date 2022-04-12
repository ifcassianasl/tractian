import React, { useState, useEffect } from "react";
import { Row } from "antd";
import { APIEndpoints } from "../../services/api";

import { assetsProps } from "../../utils/interfaces";

import AssetCard from "./AssetCard";
import AssetModel from "./AssetModel";

import "./Assets.css";

const Assets = () => {
  const [assets, setAssets] = useState<assetsProps[]>([]);
  const [visible, setVisible] = useState(false);
  const [activeAsset, setActiveAsset] = useState<assetsProps>();

  const requestAssets = async () => {
    setAssets(await APIEndpoints.getAssets());
  };

  useEffect(() => {
    requestAssets();
  }, []);

  const handleAssetCardCLick = (
    asset: React.SetStateAction<assetsProps | undefined>
  ) => {
    setVisible(true);
    setActiveAsset(asset);
  };

  return (
    <Row gutter={[8, 12]} wrap justify="space-between">
      {assets.map((asset: assetsProps) => (
        <AssetCard
          key={asset.id}
          asset={asset}
          onClick={() => handleAssetCardCLick(asset)}
        />
      ))}
      {activeAsset && (
        <AssetModel
          activeAsset={activeAsset}
          visible={visible}
          setVisible={setVisible}
        />
      )}
    </Row>
  );
};

export default Assets;
