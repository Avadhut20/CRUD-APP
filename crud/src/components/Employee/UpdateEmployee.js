import React, { useState } from 'react';
import supabase from '../../Supabase';
import { Container, Form, Button } from 'react-bootstrap';

  const UpdateEmployee = () => {
  const [EmployeeId, setEmployeeId] = useState('');
  const [newEmployeeName, setNewEmployeeName] = useState('');

  const handleUpdate = async () => {
    try {
      const data = await supabase
        .from('Employee')
        .upsert(
          [
            {
              id: EmployeeId,
              name: newEmployeeName,
            },
          ],
          { onConflict: ['id'] }
        );
      console.log(data);
      setEmployeeId('');
      setNewEmployeeName('');
    } catch (error) {
      console.error('Error updating project:', error.message);
    }
  };

  return (
    <Container className='mt-4'>
      <h2>Update Project</h2>
      <Form>
        <Form.Group controlId="EmployeeId">
          <Form.Label>Project ID</Form.Label>
          <Form.Control
            type="text"
            value={EmployeeId}
            placeholder="Enter Employee ID"
            onChange={(e) => setEmployeeId(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="newEmployeeName">
          <Form.Label>New Employee Name</Form.Label>
          <Form.Control
            type="text"
            value={newEmployeeName}
            placeholder="Enter New Employee Name"
            onChange={(e) => setNewEmployeeName(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" className='mt-4' onClick={handleUpdate}>
          Update
        </Button>
      </Form>
    </Container>
  );
};
export default UpdateEmployee;
