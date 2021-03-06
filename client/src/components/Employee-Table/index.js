import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

// import { EMPLOYEES } from '../../utils/queries';
// import { ADD_EMPLOYEE } from '../../utils/mutations';

const columns = [
  { field: 'id', headerName: 'QA-Supervisor ID', width: 70 },
  { field: 'first name', headerName: 'First Name', width: 130, editable: true },
  { field: 'last name', headerName: 'Last Name', width: 130, editable: true },
  {
    field: 'employee number',
    headerName: 'Employee Number',
    type: 'number',
    width: 120,
    editable: true,
  },
  { field: 'site', headerName: 'Site', width: 150, editable: true },
  { field: 'role', headerName: 'Role', width: 150, editable: true },
  { field: 'language', headerName: 'Language', width: 150, editable: true },
  { field: 'group', headerName: 'Group', width: 150, editable: true },
  { field: 'supervisor', headerName: 'Supervisor', width: 250, editable: true },
  { field: 'qa', headerName: 'QA Agent', width: 150, editable: true },
];

const DataTable = () => {
  // const [addEmployee, { error }] = useMutation(ADD_EMPLOYEE);

  // const { loading, data } = useQuery(EMPLOYEES, {
  //   variables: { data: employeeId },
  // });

  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default DataTable;
