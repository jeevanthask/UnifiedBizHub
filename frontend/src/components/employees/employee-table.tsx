import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

interface Employee {
  employee_id: number;
  first_name: string;
  last_name: string;
  job_title: string;
  salary: number;
  reports_to: number;
  office_id: number;
}

function EmployeeTable() {
  const [employees, setEmployees] = useState<Employee[]>([]);

  const onChange: TableProps<Employee>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const columns: TableColumnsType<Employee> = [
    {
      title: "First Name",
      dataIndex: "first_name",
      width: "25%",
      filters: [
        {
          text: "M",
          value: "M",
        },
      ],
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) =>
        record.first_name.startsWith(value as string),
    },
    {
      title: "Last Name",
      dataIndex: "last_name",
      width: "25%",
    },
    {
      title: "Job Title",
      dataIndex: "job_title",
      width: "25%",
    },
    {
      title: "Salary",
      dataIndex: "salary",
      width: "25%",
    },
  ];

  useEffect(() => {
    axios
      .get("http://localhost:3000/employees")
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const data: Employee[] = [...employees];

  console.log("data......");
  console.log(data);

  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <h2>Employee Table</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <Table columns={columns} dataSource={data} onChange={onChange} />
        </div>
      </div>
    </div>
  );
}

export default EmployeeTable;
