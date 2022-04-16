// import React, { useState, useEffect } from 'react';
// import { useQuery } from '@apollo/client';
// import { EMPLOYEES, QUERY_ME } from '../utils/queries';
// import Button from '@mui/material/Button';
// import { DataGrid } from '@mui/x-data-grid';
// import Auth from '../utils/auth';

// const columns = [
//   { field: 'id', headerName: 'QA-Supervisor ID', width: 150 },
//   { field: 'first name', headerName: 'First Name', width: 130 },
//   { field: 'last name', headerName: 'Last Name', width: 130 },
//   { field: 'employee number', headerName: 'Employee Number', width: 150 },
//   { field: 'site', headerName: 'Site', width: 150 },
//   { field: 'role', headerName: 'Role', width: 150 },
//   { field: 'language', headerName: 'Language', width: 150 },
//   { field: 'group', headerName: 'Group', width: 150 },
//   { field: 'supervisor', headerName: 'Supervisor', width: 250 },
//   { field: 'qa', headerName: 'QA Agent', width: 150 },
// ];

// const MainDataTable = () => {
//   const { loading, employeeData } = useQuery(EMPLOYEES);
//   const { data: QaData } = useQuery(QUERY_ME);
//   const [addEmploye, ]

//   const isLoggedIn = Auth.isLoggedIn();

//   const [rows, setRows] = useState(5);

//   const handleOnClick = async () => {
//     try {
//       await addEmployee({
//         variables: { id: user._id },
//       });
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   //* No mutation for this action, so will just delete the row.
//   const removeRow = () => setNbRows((x) => Math.max(0, x - 1));

//   // const { data } =

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div style={{ width: '100%' }}>
//       <Button variant='outlined' onClick={removeRow}>
//         Remove Employee
//       </Button>
//       <Button variant='outlined' onClick={handleOnClick}>
//         Add Employee
//       </Button>
//       <DataGrid autoHeight {...data} rows={data.rows.slice(0, rows)} columns={columns} />
//     </div>
//   );
// };

// export default MainDataTable;
