import React from 'react';
import Headers from '../Headers';
import Dashboard from '../Dashboard';
import Tasklist from '../Tasklist/Tasklist';

const EmployeeDashboard = ({data}) => {
  return (
    <>
      <Headers data={data} />   
      <Dashboard data={data} />
      <Tasklist data={data} />
    </>
  );
}

export default EmployeeDashboard;
