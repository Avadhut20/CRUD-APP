import React, { useState } from 'react';
import supabase from '../../Supabase';
import { Container, Form, Button } from 'react-bootstrap';

 const DeleteProject = () => {
  const [projectId, setProjectId] = useState('');

  const handleDelete = async () => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .delete()
        .eq('id', projectId);

      if (error) {
        console.error('Error deleting project:', error.message);
      } else {
        console.log('Project deleted successfully:', data);
        setProjectId('');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <Container>
      <h2>Delete Project</h2>
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

        <Button variant="danger" className='mt-4' onClick={handleDelete}>
          Delete
        </Button>
      </Form>
    </Container>
  );
};
export default DeleteProject