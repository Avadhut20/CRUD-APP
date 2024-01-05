import React, { useState } from 'react'
import supabase from '../../Supabase';

export const DeleteProject = () => {
    const [projectId, setProjectId]=useState('')
    
        const handleDelete= async()=>{
            const data= await supabase.from("projects").delete().eq('id',projectId)
            console.log(data)
            setProjectId('')
        }

  return (
    <div>
        <h2>DeleteProject</h2>
        <input type="text" value={projectId} placeholder='project id' onChange={(e)=>setProjectId(e.target.value)}/>
        <button onClick={handleDelete}> Delete</button>
    </div>
  )
}
