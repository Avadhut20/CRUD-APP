import React, { useState, useEffect } from 'react';
import supabase from '../../Supabase';
import { Container, Table } from 'react-bootstrap';

export const ReadEmployee = () => {
  const [employees, setEmployee] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase.from('Employee').select('*');

        if (error) {
          console.error('Error fetching data:', error);
        } else {
          console.log('Fetched data:', data);
          setEmployee(data || []);
        }
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    fetchData();
  }, []); // Pass an empty dependency array to useEffect to run the effect only once on mount

  return (
    <Container className='mt-5'>
      <h2>Employee</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Project Id</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(employees) &&
            employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.project_id}</td>

              </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  );
};
