import React from 'react';
import customerList from '../data.json';
import { useHistory } from 'react-router-dom';

const CustomerList = (props) => {
  const [customers, setCustomers] = React.useState([]);
  const history = useHistory();

  React.useEffect(() => {
    setCustomers((_) => customerList);
  }, []);

  const handleNavigation = (id) => {
    history.push(`/customer-detail/${id}`);
  };

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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.firstName}</td>
              <td>{c.lastName}</td>
              <td>{c.email}</td>
              <td>
                <button
                  className='btn btn-primary btn-sm'
                  onClick={() => handleNavigation(c.id)}
                >
                  Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CustomerList;
