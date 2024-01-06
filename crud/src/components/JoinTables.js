import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import supabase from '../Supabase';

export const JoinTables = () => {
    const [combinedData, setCombinedData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: projectsData, error: projectsError } = await supabase
                    .from('projects')
                    .select('*')
                    ;

                if (projectsError) {
                    console.error('Error fetching projects data:', projectsError);
                    return;
                }
                console.log(projectsData)

                const combinedDataWithEmployees = [];

                for (const project of projectsData) {
                    const { data: employeesData, error: employeesError } = await supabase
                        .from('Employee')
                        .select('id, name,project_id')
                        .eq('project_id', project.id);  // Adjust the join condition here

                    if (employeesError) {
                        console.error('Error fetching employees data:', employeesError);
                        combinedDataWithEmployees.push({ ...project, Employee: [] });
                        console.log(employeesError)
                    } else {
                        combinedDataWithEmployees.push({ ...project, Employee: employeesData });
                        console.log(employeesData)
                    }
                }

                setCombinedData(combinedDataWithEmployees);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Combined Data</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Project ID</th>
                        <th>Project Name</th>
                        <th>Employee ID</th>
                        <th>Employee Name</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(combinedData) &&
                        combinedData.map((row) => (
                            <tr key={row.id}>
                                <td>{row.id}</td>
                                <td>{row.name}</td>
                                <td>
                                    {Array.isArray(row.Employee) ? (
                                        row.Employee.map((employee) => employee.id).join(', ')
                                    ) : (
                                        'N/A'
                                    )}
                                </td>
                                <td>
                                    {Array.isArray(row.Employee) ? (
                                        row.Employee.map((employee) => employee.name).join(', ')
                                    ) : (
                                        'N/A'
                                    )}
                                </td>
                            </tr>
                        ))}

                </tbody>
            </Table>
        </div>
    );
};
