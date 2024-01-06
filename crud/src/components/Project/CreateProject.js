import React, { useState } from 'react';
import supabase from '../../Supabase';
import { Container, Form, Button } from 'react-bootstrap';

const CreateProject = () => {
  const [projectName, setProjectName] = useState('');

  const handleAddProject = async () => {
    if (projectName.trim() === '') return;

    try {
      const { data, error } = await supabase.from('projects').upsert([
        { name: projectName },
      ]);

      if (error) {
        console.error('Error adding project:', error);
      } else {
        console.log('Project added successfully:', data);
        setProjectName('');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <Container>
      <h2>Add Project</h2>
      <Form>
        <Form.Group controlId="projectName">
          <Form.Label>Project Name</Form.Label>
          <Form.Control
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            placeholder="Enter Project Name"
          />
        </Form.Group>

        <Button variant="primary" className='mt-4' onClick={handleAddProject}>
          Add Project
        </Button>
      </Form>
    </Container>
  );
};

export default CreateProject;
