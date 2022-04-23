import ArrowCircleRightSharpIcon from "@mui/icons-material/ArrowCircleRightSharp";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { Link } from "react-router-dom";
import styles from "../Profile.module.scss";
import SideBar from "./SideBar";

const columns = [
  { field: "id", headerName: "ID", width: 70 },

  { field: "title", headerName: "Title", width: 130 },

  { field: "position", headerName: "Job Position", width: 130 },
  {
    field: "description",
    headerName: "Job Description",
    type: "number",
    width: 90,
  },
  {
    field: "number",
    headerName: "Number",
    type: "number",
    width: 90,
  },
  //   {
  //     field: "number",
  //     headerName: "Number of Vacancies",
  //     description: "This column has a value getter and is not sortable.",
  //     sortable: false,
  //     width: 160,
  //     valueGetter: (params) =>
  //       `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  //   },
  {
    field: "viewApplicant",
    headerName: "View Listing",
    renderCell: (params) => (
      <Link to="/company/internship-listings/1" style={{ color: "#663399" }}>
        <ArrowCircleRightSharpIcon />
      </Link>
    ),
  },
];

const rows = [
  {
    id: 1,
    title: "Analyst/Intern (Emerging Markets Analyst Program)",
    position:
      "The Emerging Markets (EM) Analyst Program begins in July with a 3-week training program in Dubai. Formal training begins...",
    description:
      "Track market developments across the region and share geopolitical, economic and banking industry trends that may affect the business with...",
    number: 2,
  },
  {
    id: 2,
    title: "Project management intern",
    position:
      "Administration support to Operations Department. Tasks related to the project management.",
    description:
      "Work experience is not required. Knowledge and skills required: Higher education preferably with major in finance, accounting or economics.",
    number: 2,
  },
  {
    id: 3,
    title: "Стажер BI-аналитик / Разработчик Power BI / Data Engineer",
    position:
      "Track market developments across the region and share geopolitical, economic and banking industry trends that may affect the business with...",
    description:
      "The Emerging Markets (EM) Analyst Program begins in July with a 3-week training program in Dubai. Formal training begins...",
    number: 1,
  },
  {
    id: 4,
    title: "Стажер в отдел по закупкам",
    position:
      "Сортировка и распределение документов. Помощь в работе с поставщиками.",
    description:
      "Знание английского языка на уровне intermediate желательно. Уверенное пользование MS Office. Внимательность и аккуратность к деталям и скорость исполнения задач.",
    number: 3,
  },
  {
    id: 5,
    title: "Стажер в Департамент повышения операционной эффективности",
    position:
      "Повышения операционной эффективности. Роботизация процессов компании. Активное участие во внедрении и развитии IT инноваций. Участие в разработке роботов.",
    description:
      "Образование: Техническое образование. Знания и навыки: Аналитическое мышление. Знание .NET Framework будет преимуществом, но не принципиальным. Иметь большое желание заниматься...",
    number: 3,
  },
];

const InternshipListings = () => {
  return (
    <>
      <SideBar />
      <div
        style={{ height: 400, width: "81%", marginLeft: "220px" }}
        className={styles.company_table}
      >
        <h3 style={{ padding: "1rem" }}>All Internship Listings</h3>
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
};

export default InternshipListings;
