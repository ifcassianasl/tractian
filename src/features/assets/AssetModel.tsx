import { Modal, Row, Col } from "antd";
import React, { Dispatch, SetStateAction } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMore from "highcharts/highcharts-more.js";
import solidGauge from "highcharts/modules/solid-gauge.js";

import { assetsProps } from "../../utils/interfaces";
import AssetCover from "./AssetCover";
import AssetDescription from "./AssetDescription";

highchartsMore(Highcharts);
solidGauge(Highcharts);

interface AssetModelProps {
  activeAsset: assetsProps;
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

const AssetModel = ({ activeAsset, visible, setVisible }: AssetModelProps) => {
  const options = {
    title: {
      text: "Health",
      margin: -35,
    },
    chart: {
      type: "solidgauge",
    },

    pane: {
      center: ["50%", "85%"],
      size: "140%",
      startAngle: -90,
      endAngle: 90,
      background: {
        innerRadius: "60%",
        outerRadius: "100%",
        shape: "arc",
      },
    },

    // the value axis
    yAxis: {
      stops: [
        [0.1, "#DF5353"], // green
        [0.5, "#DDDF0D"], // yellow
        [0.9, "#55BF3B"], // red
      ],
      lineWidth: 0,
      tickAmount: 2,
      minorTickInterval: null,
      min: 0,
      max: 100,
      labels: {
        y: 20,
        align: "center",
      },
    },

    plotOptions: {
      solidgauge: {
        dataLabels: {
          borderWidth: 0,
        },
      },
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: "Health",
        data: [activeAsset.healthscore],
        dataLabels: {
          format: `<div style="text-align:center">
                	<span style="font-size:25px">{y}</span>
                	<span style="font-size:16px;opacity:0.4"> %</span>
                </div>`,
        },
        tooltip: {
          valueSuffix: "%",
        },
      },
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
        },
      ],
    },
  };

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
          <HighchartsReact
            constructorType="chart"
            highcharts={Highcharts}
            options={options}
          />
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
