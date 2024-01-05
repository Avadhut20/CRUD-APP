import React, { useState } from 'react'
import supabase from '../../Supabase';

export const UpdateProject = () => {
    const [projectId, setProjectId]=useState('')
    const [newprojectName, setNewProjectName]=useState('')
    
        const handleUpdate= async()=>{
            const data= await supabase.
            from("projects")
            .upsert
            (
                [
                    {

                        id:projectId,
                        name:newprojectName
                    }

                ],
                { onConflict: ['id'] } 
            )
            console.log(data)
            setProjectId('');
            setNewProjectName('');
        }

  return (
    <div>
        <h2>Update</h2>
        <input type="text" placeholder="Enter id "value={projectId} onChange={(e)=>setProjectId(e.target.value)}/>
        <input type="text" placeholder="Enter name "value={newprojectName} onChange={(e)=>setNewProjectName(e.target.value)}/>
        <button onClick={handleUpdate}> Update</button>
    </div>
  )
}
