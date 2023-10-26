import React from 'react';
import customerList from '../data.json';
import { useHistory } from 'react-router-dom';
import { httpService } from '../http-service';

const CustomerList = (props) => {
  const [customers, setCustomers] = React.useState([]);
  const history = useHistory();

  React.useEffect(() => {
    httpService.get('customers').then((r) => {
      setCustomers((_) => r.data);
    });
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
            <tr key={c.customerId}>
              <td>{c.customerId}</td>
              <td>{c.firstName}</td>
              <td>{c.lastName}</td>
              <td>{c.email}</td>
              <td>
                <button
                  className='btn btn-primary btn-sm'
                  onClick={() => handleNavigation(c.customerId)}
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
