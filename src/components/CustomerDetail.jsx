import React from 'react';
import { useParams } from 'react-router-dom';
import customerList from '../data.json';
import { httpService } from '../http-service';

const CustomerDetail = (props) => {
  const { id } = useParams();
  const [currentCustomer, setCurrentCustomer] = React.useState({});

  React.useEffect(() => {
    httpService
      .get(`customers/${id}`)
      .then((r) => {
        setCurrentCustomer((_) => r.data);
      })
      .catch((e) => {
        console.log('error', e.message);
      });
  }, []);

  return (
    <>
      <h4>Customer Detail: {id}</h4>
      <table className='table table-bordered'>
        <tbody>
          <tr>
            <th>Id</th>
            <td>{currentCustomer.customerId}</td>
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
