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
  const { maxTemp, power, rpm } = specifications;
  const { totalCollectsUptime, totalUptime, lastUptimeAt } = metrics;

  const formatDate = (date: string) => new Date(date).toLocaleString();

  return (
    <>
      <Descriptions title="Especificações" layout="vertical" size="small">
        <Item>
          Temperatura Máxima: {maxTemp} ºC
          <br />
          Potência: {power} kWh
          <br />
          RPM: {rpm}
        </Item>
      </Descriptions>
      <Descriptions title="Metricas" layout="vertical" size="small">
        <Item>
          {totalCollectsUptime &&
            `Total de Coletas Uptime (Ligada): ${totalCollectsUptime}`}
          <br />
          Total de Horas de Coletas Uptime (Ligada): {totalUptime.toFixed(2)}h
          <br />
          Data da Ultima Coleta Uptime (Ligada): {formatDate(lastUptimeAt)}
        </Item>
      </Descriptions>
    </>
  );
};

export default AssetDescription;
