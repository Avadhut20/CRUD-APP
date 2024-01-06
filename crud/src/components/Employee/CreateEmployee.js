import React, { useState } from 'react';
import supabase from '../../Supabase';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';

export const CreateEmployee = () => {
  const [newEmployee, setNewEmployee] = useState('');
  const [projectId, setProjectId] = useState(null);
  const [isProjectIdPresent, setIsProjectIdPresent] = useState(null);

  async function addEmployee() {
    try {
      // Check if projectId is present
      if (!isProjectIdPresent || !newEmployee || !projectId) {
        console.log('Project ID or Employee name is invalid.');
        return;
      }

      // Add a new record to the Employee table
      await supabase.from('Employee').upsert([
        {
          name: newEmployee,
          project_id: projectId,
        },
      ]);

      // Clear input values
      setNewEmployee('');
      setProjectId(null);

      console.log('Employee added successfully!');
    } catch (error) {
      console.error('Error adding employee:', error.message);
    }
  }

  async function checkProjectId() {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('id')
        .eq('id', projectId);

      if (error) {
        console.error('Error checking project ID:', error.message);
        return;
      }

      const isPresent = data.length > 0;
      setIsProjectIdPresent(isPresent);

      if (!isPresent) {
        console.log('Project ID is not present.');
        return;
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  }

  return (
    <Container>
      <h2>Create Employee</h2>
      <Form>
        <Form.Group controlId="employeeName">
          <Form.Label>Employee Name</Form.Label>
          <Form.Control
            type="text"
            value={newEmployee}
            onChange={(e) => setNewEmployee(e.target.value)}
            placeholder="Enter Employee Name"
          />
        </Form.Group>

        <Form.Group controlId="projectId">
          <Form.Label>Project ID</Form.Label>
          <Form.Control
            type="text"
            value={projectId}
            onChange={(e) => setProjectId(e.target.value)}
            placeholder="Enter Project ID"
          />
        </Form.Group>

        <Button variant="primary" className='mt-4' onClick={checkProjectId}>
          Check Project ID
        </Button>

        {isProjectIdPresent !== null && (
          <div>
            {isProjectIdPresent ? (
              'Project ID is present in the parent table.'
            ) : (
              'Project ID is not present in the parent table. Cannot add employee without a valid project.'
            )}
            <Button variant="success" onClick={addEmployee}>
              Add Employee
            </Button>
          </div>
        )}
      </Form>
    </Container>
  );
};
