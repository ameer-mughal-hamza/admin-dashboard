import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import "./Users.scss";
import { userRows } from "../../data";
import DataTable from "@components/DataTable/DataTable";
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "@components/Modal/Modal";
import { IFormInterface } from "@interfaces/IFormInterface";

const Users = () => {
  // Form
  const form: IFormInterface[] = [
    {
      fieldType: "text",
      margin: "dense",
      id: "name",
      label: "First name",
      type: "text",
      fullWidth: false,
      variant: "standard",
    },
    {
      fieldType: "text",
      margin: "dense",
      id: "name",
      label: "Last name",
      type: "text",
      fullWidth: false,
      variant: "standard",
    },
    {
      fieldType: "text",
      margin: "dense",
      id: "name",
      label: "Email",
      type: "email",
      fullWidth: false,
      variant: "standard",
    },
    {
      fieldType: "text",
      margin: "dense",
      id: "name",
      label: "Phone",
      type: "phone",
      fullWidth: false,
      variant: "standard",
    },
    {
      fieldType: "text",
      margin: "dense",
      id: "name",
      label: "Created At",
      type: "createdAt",
      fullWidth: false,
      variant: "standard",
    },
    {
      fieldType: "switch",
      label: "Verified",
      id: "verified",
    },
  ];

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "avatar",
      headerName: "Avatar",
      width: 150,
      headerAlign: "center",
      sortable: false,
      renderCell: (param: GridRenderCellParams) => {
        return <img src={param.row.img || "/noavatar.png"} alt="" />;
      },
      align: "center",
    },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "fullName",
      headerName: "Full Name",
      type: "string",
      width: 110,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        return `${params.row.firstName} ${params.row.lastName}`;
      },
      sortable: false,
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 150,
      sortable: false,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "verified",
      headerName: "Verified",
      type: "number",
      width: 110,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        return params.row.verified ? "✅" : "❌";
      },
      sortable: false,
    },
    {
      field: "action",
      headerName: "Action",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      align: "center",
      headerAlign: "center",
      renderCell: () => {
        return (
          <>
            <Link to="">
              <img src="/view.svg" alt="" className="icon" />
            </Link>
            <Link to="">
              <img src="/delete.svg" alt="" className="icon" />
            </Link>
          </>
        );
      },
    },
  ];
  const rows = userRows;

  const [open, setIsOpen] = useState<boolean>(false);

  const handleClose = () => {
    setIsOpen(!open);
  };

  return (
    <div className="users">
      <Modal open={open} handleClose={handleClose} form={form} />
      <div className="heading">
        <h1>Users</h1>
        <button onClick={() => setIsOpen(!open)}>Add User</button>
      </div>
      <div className="data-grid">
        <DataTable columns={columns} rows={rows} />
      </div>
    </div>
  );
};

export default Users;
