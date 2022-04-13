import { Modal } from "antd";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React, { Dispatch, SetStateAction } from "react";

interface ChartModalProps {
  visibleChart: boolean;
  setVisibleChart: Dispatch<SetStateAction<boolean>>;
  countedStatus: {
    inAlert: number;
    inOperation: number;
    inDowntime: number;
  };
}

const ChartModal = ({
  visibleChart,
  setVisibleChart,
  countedStatus,
}: ChartModalProps) => {
  const chartOptions = {
    title: {
      text: "Status",
    },
    chart: {
      type: "column",
    },
    credits: {
      enabled: false,
    },
    yAxis: {
      min: 0,
      title: {
        text: "Quantidade",
      },
    },
    series: Object.entries(countedStatus).map((status) => ({
      name: status[0],
      data: [status[1]],
    })),
  };

  return (
    <Modal
      footer={[]}
      visible={visibleChart}
      onCancel={() => setVisibleChart(false)}
    >
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </Modal>
  );
};

export default ChartModal;
