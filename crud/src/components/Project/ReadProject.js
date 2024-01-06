import React, { useEffect, useState } from 'react';
import supabase from '../../Supabase';
import { Container, Table } from 'react-bootstrap';

 const ReadProject = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await supabase.from('projects').select('*').order('id');
        setProjects(data || []);
      } catch (error) {
        console.log('Error while fetching projects', error.message);
      }
    };

    fetchProjects();
  }, []);

  return (
    <Container>
      <h2>Projects</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id}>
              <td>{project.id}</td>
              <td>{project.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};
export default ReadProject;
