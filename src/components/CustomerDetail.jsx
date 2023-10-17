import React from 'react';
import { useParams } from 'react-router-dom';
import customerList from '../data.json';

const CustomerDetail = (props) => {
  const { id } = useParams();
  const [currentCustomer, setCurrentCustomer] = React.useState({});

  React.useEffect(() => {
    setCurrentCustomer((_) => customerList.find((c) => c.id === +id));
  }, []);

  return (
    <>
      <h4>Customer Detail: {id}</h4>
      <table className='table table-bordered'>
        <tbody>
          <tr>
            <th>Id</th>
            <td>{currentCustomer.id}</td>
          </tr>
          <tr>
            <th>First Name</th>
            <td>{currentCustomer.firstName}</td>
          </tr>
          <tr>
            <th>Last Name</th>
            <td>{currentCustomer.lastName}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{currentCustomer.email}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default CustomerDetail;
