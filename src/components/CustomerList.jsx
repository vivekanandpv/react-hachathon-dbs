import React from 'react';
import customerList from '../data.json';

const CustomerList = (props) => {
  const [customers, setCustomers] = React.useState([]);

  React.useEffect(() => {
    setCustomers((_) => customerList);
  }, []);

  return (
    <>
      <h4>Customers</h4>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.firstName}</td>
              <td>{c.lastName}</td>
              <td>{c.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CustomerList;
