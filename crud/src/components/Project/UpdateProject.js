import React, { useState } from 'react';
import supabase from '../../Supabase';
import { Container, Form, Button } from 'react-bootstrap';

  const UpdateProject = () => {
  const [projectId, setProjectId] = useState('');
  const [newprojectName, setNewProjectName] = useState('');

  const handleUpdate = async () => {
    try {
      const data = await supabase
        .from('projects')
        .upsert(
          [
            {
              id: projectId,
              name: newprojectName,
            },
          ],
          { onConflict: ['id'] }
        );
      console.log(data);
      setProjectId('');
      setNewProjectName('');
    } catch (error) {
      console.error('Error updating project:', error.message);
    }
  };

  return (
    <Container>
      <h2>Update Project</h2>
      <Form>
        <Form.Group controlId="projectId">
          <Form.Label>Project ID</Form.Label>
          <Form.Control
            type="text"
            value={projectId}
            placeholder="Enter Project ID"
            onChange={(e) => setProjectId(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="newprojectName">
          <Form.Label>New Project Name</Form.Label>
          <Form.Control
            type="text"
            value={newprojectName}
            placeholder="Enter New Project Name"
            onChange={(e) => setNewProjectName(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" className='mt-4' onClick={handleUpdate}>
          Update
        </Button>
      </Form>
    </Container>
  );
};
export default UpdateProject;
