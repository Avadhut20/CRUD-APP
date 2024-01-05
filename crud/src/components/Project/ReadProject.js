import React, { useEffect, useState } from 'react';
import supabase from '../../Supabase';

export const ReadProject = () => {
  const [projects, setProjects] = useState([]);  // Initialize state with an empty array

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await supabase.from('projects').select('*').order('id');
      
        
        setProjects(data);  // Ensure data is an array, or set an empty array if data is falsy
      } catch (error) {
        console.log('Error while fetching projects', error.message);
      }
    };

    fetchProjects();
  }, []);  // Empty dependency array to run the effect only once

  return (
    <div>
      <h2>Projects</h2>
      <ul>

        {projects.map(project => (
          <li key={project.id}>{project.id}:{project.name}</li>
        ))}
      </ul>
      
    </div>
  );
};
