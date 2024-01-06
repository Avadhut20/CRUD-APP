import React, { useState } from 'react';
import supabase from '../../Supabase';
import { Container, Form, Button } from 'react-bootstrap';

 const DeleteEmployee = () => {
  const [EmployeeId, setEmployeeId] = useState('');

  const handleDelete = async () => {
    try {
      const { data, error } = await supabase
        .from('Employee')
        .delete()
        .eq('id', EmployeeId);

      if (error) {
        console.error('Error deleting project:', error.message);
      } else {
        console.log('Project deleted successfully:', data);
        setEmployeeId('');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <Container>
      <h2>Delete Employee</h2>
      <Form>
        <Form.Group controlId="EmployeeId">
          <Form.Label>Employee ID</Form.Label>
          <Form.Control
            type="text"
            value={EmployeeId}
            placeholder="Enter Employee ID"
            onChange={(e) => setEmployeeId(e.target.value)}
          />
        </Form.Group>

        <Button variant="danger" className='mt-4' onClick={handleDelete}>
          Delete
        </Button>
      </Form>
    </Container>
  );
};
export default DeleteEmployee;