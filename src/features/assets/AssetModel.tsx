import { Modal, Row, Col } from "antd";
import React, { Dispatch, SetStateAction } from "react";
import { assetsProps } from "../../utils/interfaces";
import AssetCover from "./AssetCover";
import AssetDescription from "./AssetDescription";

interface AssetModelProps {
  activeAsset: assetsProps;
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

const AssetModel = ({ activeAsset, visible, setVisible }: AssetModelProps) => {
  return (
    <Modal
      title={activeAsset.name}
      centered
      visible={visible}
      onCancel={() => setVisible(false)}
      footer={[]}
      width={1000}
    >
      <Row gutter={[20, 12]}>
        <Col span={24} lg={24} xl={12} className="asset-model-image">
          <AssetCover
            status={activeAsset.status}
            name={activeAsset.name}
            image={activeAsset.image}
            preview
          />
        </Col>
        <Col span={24} lg={24} xl={12}>
          <AssetDescription
            healthscore={activeAsset.healthscore}
            metrics={activeAsset.metrics}
            specifications={activeAsset.specifications}
          />
        </Col>
      </Row>
    </Modal>
  );
};

export default AssetModel;
