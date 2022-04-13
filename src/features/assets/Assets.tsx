import React, { useState, useEffect } from "react";
import { Row, Button, Col, Input } from "antd";
import { LineChartOutlined } from "@ant-design/icons";
import { APIEndpoints } from "../../services/api";

import { assetsProps } from "../../utils/interfaces";

import AssetCard from "./AssetCard";
import AssetModal from "./AssetModal";

import "./Assets.css";
import ChartModal from "./ChartModal";

const Assets = () => {
  const [assets, setAssets] = useState<assetsProps[]>([]);
  const [visibleAssets, setVisibleAssets] = useState<assetsProps[]>([]);
  const [visible, setVisible] = useState(false);
  const [visibleChart, setVisibleChart] = useState(false);
  const [activeAsset, setActiveAsset] = useState<assetsProps>();
  const [filterAssets, setFilterAssets] = useState("");

  const requestAssets = async () => {
    setAssets(await APIEndpoints.getAssets());
    setVisibleAssets(assets);
  };

  const countAssetsState = () =>
    assets.reduce(
      (acc, asset) => {
        acc[asset.status] += 1;
        return acc;
      },
      {
        inAlert: 0,
        inOperation: 0,
        inDowntime: 0,
      }
    );

  useEffect(() => {
    requestAssets();
  }, []);

  const handleAssetCardCLick = (
    asset: React.SetStateAction<assetsProps | undefined>
  ) => {
    setVisible(true);
    setActiveAsset(asset);
  };

  useEffect(() => {
    setVisibleAssets(
      assets.filter((asset) =>
        asset.name.toLowerCase().includes(filterAssets.toLowerCase())
      )
    );
  }, [filterAssets, assets]);

  return (
    <>
      <Row justify="space-between" align="middle" gutter={[10, 0]}>
        <Col span={20}>
          <Input
            placeholder="Pesquisa"
            value={filterAssets}
            onChange={(e) => setFilterAssets(e.target.value)}
          />
        </Col>
        <Col span={3}>
          <Button
            icon={<LineChartOutlined style={{ fontSize: 24 }} />}
            style={{ marginBottom: 10, float: "right" }}
            size="large"
            onClick={() => setVisibleChart(true)}
          />
        </Col>
      </Row>
      <Row gutter={[8, 12]} wrap justify="space-between">
        {visibleAssets.map((asset: assetsProps) => (
          <AssetCard
            key={asset.id}
            asset={asset}
            onClick={() => handleAssetCardCLick(asset)}
          />
        ))}
        {activeAsset && (
          <AssetModal
            activeAsset={activeAsset}
            visible={visible}
            setVisible={setVisible}
          />
        )}
      </Row>
      <ChartModal
        visibleChart={visibleChart}
        setVisibleChart={setVisibleChart}
        countedStatus={countAssetsState()}
      />
    </>
  );
};

export default Assets;
