import { Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { APIEndpoints } from "../../services/api";
import { userProps } from "../../utils/interfaces";

const { Title } = Typography;

const Users = () => {
  const [users, setUsers] = useState<userProps[]>([]);

  const requestUsers = async () => {
    setUsers(await APIEndpoints.getUsers());
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
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Unidade",
      dataIndex: "unitId",
    },
    {
      title: "Empresa",
      dataIndex: "companyId",
    },
  ];

  return (
    <>
      <Title level={2}>Usuários</Title>
      <Table bordered columns={columns} dataSource={users} />
    </>
  );
};

export default Users;
