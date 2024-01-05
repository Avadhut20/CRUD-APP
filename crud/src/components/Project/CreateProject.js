// ProjectForm.js
import React, { useState } from 'react';
import supabase from '../../Supabase';

const CreateProject = () => {
  const [projectName, setProjectName] = useState('');

  const handleAddProject = async () => {
    if (projectName.trim() === '') return;

    const { data, error } = await supabase.from('projects').upsert([
      { name: projectName },
    ]);

    if (error) {
      console.error('Error adding project:', error);
    } else {
      console.log('Project added successfully:', data);
      setProjectName('');
    }
  };

  return (
    <div>
      <h2>Add Project</h2>
      <input
        type="text"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
        placeholder="Project Name"
      />
      <button onClick={handleAddProject}>Add Project</button>
    </div>
  );
};

export default CreateProject;
