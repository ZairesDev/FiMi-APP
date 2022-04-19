import React from 'react';
//* bring in useState when ready
// import { useQuery } from '@apollo/client';
// import { EMPLOYEE } from '../utils/queries';
import Button from '@mui/material/Button';
// import { DataGrid } from '@mui/x-data-grid';

// import Auth from '../utils/auth';
// import { ADD_EMPLOYEE } from '../utils/mutations';
// import { EMPLOYEES, QUERY_ME } from '../utils/queries';
// import DataTable from '../components/Employee-Table';

const Home = () => {
  // const [employeeCount, setEmployeeCount] = useState(0);
  // const { loading, employeeData } = useQuery(EMPLOYEES);
  // const { loading, data } = useQuery(EMPLOYEE, {
  //   variables: { data: employeeId },
  // });

  // const employee = data?.employee || [];

  // // // const [rows, setRows] = useState(5);

  // // const handleOnClick = async () => {
  // //   try {
  // //     await addEmployee({
  // //       variables: { id: user._id },
  // //     });
  // //   } catch (error) {
  // //     console.error(error);
  // //   }
  // // };

  // // //* No mutation for this action, so will just delete the row.
  // // const removeRow = () => setNbRows((x) => Math.max(0, x - 1));

  // // const { data } =

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div style={{ width: '100%' }}>
      <Button variant='outlined'>Remove Employee</Button>
      <Button variant='outlined'>Add Employee</Button>
      {/* <DataGrid>
        <DataTable />
      </DataGrid> */}
    </div>
  );
};

export default Home;
