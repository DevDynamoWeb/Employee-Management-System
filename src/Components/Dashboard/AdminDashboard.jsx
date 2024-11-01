import React from "react";
import Headers from "../Headers";
import Alltask from "../Alltask";
import Form from "../Form";
import AuthProvider from "../../Context/AuthProvider";
import CountEmployee from "./CountEmployeeData";

const AdminDashboard = ({ data }) => {
  return (
    <>
      <AuthProvider>
        <Headers data={data} />
        <Form />
        <CountEmployee />
        <Alltask />
      </AuthProvider>
    </>
  );
};

export default AdminDashboard;
