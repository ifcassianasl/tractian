import React from "react";
import { Descriptions, Typography } from "antd";

const { Item } = Descriptions;
const { Title } = Typography;

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
  healthscore: number;
}

const AssetDescription = ({
  metrics,
  specifications,
  healthscore,
}: AssetDescriptionProps) => {
  const { maxTemp, power, rpm } = specifications;
  const { totalCollectsUptime, totalUptime, lastUptimeAt } = metrics;

  const formatDate = (date: string) => new Date(date).toLocaleString();

  return (
    <>
      <Title level={5}>Saúde: {healthscore}%</Title>
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
          Total de Coletas Uptime (Ligada): {totalCollectsUptime}
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
