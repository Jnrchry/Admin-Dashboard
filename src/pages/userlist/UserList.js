import React from "react";
import "./userlist.scss";
import { DataGrid } from "@mui/x-data-grid";
import Model from "../../assets/img/model-1.jpg";

const UserList = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: true,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
    },
  ];

  const rows = [
    {
      id: 1,
      userName: "Jon Snow",
      avatar: { Model },
      email: "Jonsnow@gmail.com",
      status: "active",
      transaction: $120,
    },

    {
      id: 2,
      userName: "Jon Snow",
      avatar: { Model },
      email: "Jonsnow@gmail.com",
      status: "active",
      transaction: $120,
    },

    {
      id: 3,
      userName: "Jon Snow",
      avatar: { Model },
      email: "Jonsnow@gmail.com",
      status: "active",
      transaction: $120,
    },

    {
      id: 4,
      userName: "Jon Snow",
      avatar: { Model },
      email: "Jonsnow@gmail.com",
      status: "active",
      transaction: $120,
    },

    {
      id: 5,
      userName: "Jon Snow",
      avatar: { Model },
      email: "Jonsnow@gmail.com",
      status: "active",
      transaction: $120,
    },

    {
      id: 6,
      userName: "Jon Snow",
      avatar: { Model },
      email: "Jonsnow@gmail.com",
      status: "active",
      transaction: $120,
    },
  ];

  return (
    <div className="userlist">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </div>
  );
};

export default UserList;
