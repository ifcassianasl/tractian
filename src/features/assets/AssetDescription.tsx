import React from "react";
import { Descriptions } from "antd";

const { Item } = Descriptions;

interface AssetDescriptionProps {
  metrics: {
    totalCollectsUptime: number;
    totalUptime: number;
    lastUptimeAt: string;
  };
  specifications: {
    maxTemp?: number;
    power?: number;
    rpm?: number;
  };
}

const AssetDescription = ({
  metrics,
  specifications,
}: AssetDescriptionProps) => {
  return (
    <>
      <Descriptions title="Especificações" layout="vertical" size="small">
        <Item>
          Temperatura Máxima: {specifications.maxTemp} ºC
          <br />
          Potência: {specifications.power} kWh
          <br />
          RPM: {specifications.rpm}
        </Item>
      </Descriptions>
      <Descriptions title="Metricas" layout="vertical" size="small">
        <Item>
          Total de Coletas Uptime (Ligada): {metrics.totalCollectsUptime}
          <br />
          Total de Horas de Coletas Uptime (Ligada):{" "}
          {metrics.totalUptime.toFixed(2)}h
          <br />
          Data da Ultima Coleta Uptime (Ligada):{" "}
          {new Date(metrics.lastUptimeAt).toLocaleString()}
        </Item>
      </Descriptions>
    </>
  );
};

export default AssetDescription;
