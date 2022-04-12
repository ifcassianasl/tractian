import { Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { APIEndpoints } from "../../services/api";
import { unitProps } from "../../utils/interfaces";

const { Title } = Typography;

const Units = () => {
  const [units, setUnits] = useState<unitProps[]>([]);

  const requestUsers = async () => {
    setUnits(await APIEndpoints.getUnits());
  };

  useEffect(() => {
    requestUsers();
  }, []);

  const columns = [
    {
      title: "Nome",
      dataIndex: "name",
    },

    {
      title: "Empresa",
      dataIndex: "companyId",
    },
  ];

  return (
    <>
      <Title level={2}>Unidades</Title>
      <Table bordered columns={columns} dataSource={units} />
    </>
  );
};

export default Units;
