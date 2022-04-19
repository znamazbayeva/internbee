import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import styles from "../Profile/Profile.module.scss";
import SideBar from "../Profile/Company/SideBar";
import { margin } from "@mui/system";
import ArrowCircleRightSharpIcon from "@mui/icons-material/ArrowCircleRightSharp";
import { Link } from "react-router-dom";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "image",
    headerName: "Image",
    renderCell: (params) => <img src={params.value} />,
  },

  { field: "firstName", headerName: "First name", width: 130 },

  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "viewApplicant",
    headerName: "View",
    renderCell: (params) => (
      <Link to="/company/applicants/1" style={{ color: "#663399" }}>
        <ArrowCircleRightSharpIcon />
      </Link>
    ),
  },
];

const rows = [
  {
    id: 1,
    username: "",
    firstName: "Bota",
    lastName: "Mukanova",
    age: 35,
    image: "https://picsum.photos/200",
  },
  {
    id: 2,
    firstName: "Amina",
    lastName: "Shaikym",
    age: 42,
    image: "https://picsum.photos/200",
  },
  {
    id: 3,
    firstName: "Zhuldyz",
    lastName: "Samatqyzy",
    age: 45,
    image: "https://picsum.photos/200",
  },
  {
    id: 4,
    firstName: "Ayazhan",
    lastName: "Yerikkyzy",
    age: 16,
    image: "https://picsum.photos/200",
  },
  {
    id: 5,
    firstName: "Dana",
    lastName: "Zhumabayeva",
    age: null,
    image: "https://picsum.photos/200",
  },
  {
    id: 6,
    firstName: "Daniyar",
    lastName: null,
    age: 150,
    image: "https://picsum.photos/200",
  },
  {
    id: 7,
    firstName: "Zangar",
    lastName: "Sungat",
    age: 44,
    image: "https://picsum.photos/200",
  },
  {
    id: 8,
    firstName: "Zhanibek",
    lastName: "Amanbek",
    age: 36,
    image: "https://picsum.photos/200",
  },
  {
    id: 9,
    firstName: "Askhat",
    lastName: "Bazarbayev",
    age: 65,
    image: "https://picsum.photos/200",
  },
];

export default function AllApplicants() {
  return (
    <>
      <SideBar />
      <div
        style={{ height: 400, width: "81%", marginLeft: "220px" }}
        className={styles.company_table}
      >
        <h3 style={{ padding: "1rem" }}>All Applicants</h3>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[7]}
          checkboxSelection
        />
      </div>
    </>
  );
}
