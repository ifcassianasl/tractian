import { DownOutlined } from "@ant-design/icons";
import { Menu, Dropdown } from "antd";
import React, { useEffect, useState } from "react";

import { APIEndpoints } from "../../services/api";

import { companyProps } from "../../utils/interfaces";

const CompDropdown = () => {
  const [companies, setCompanies] = useState<companyProps[]>([]);

  const requestCompanies = async () => {
    setCompanies(await APIEndpoints.getCompanies());
  };

  useEffect(() => {
    requestCompanies();
  }, []);

  const companiesLit = (
    <Menu>
      {companies.map(({ id, name }) => (
        <Menu.Item key={id}>
          <span>{name}</span>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Dropdown overlay={companiesLit} trigger={["click"]}>
      <button
        type="button"
        className="ant-dropdown-link"
        onClick={(e) => e.preventDefault()}
      >
        {companies && companies[0]?.name}
        <DownOutlined />
      </button>
    </Dropdown>
  );
};

export default CompDropdown;
