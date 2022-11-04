import React, { Fragment, useEffect, useState } from 'react'
import EditTodo from './EditTodo';

function ListTodos() {
    const [toDoLists, setToDoLists] = useState([]);
    const fetchLists = async () => {
        const response = await fetch("http://localhost:5000/todos").then(res => res.json());
        if (response) setToDoLists(response);
    }
    const handleDelete = async(id) => {
        try {
            await fetch(`http://localhost:5000/todos/${id}`, {
                method: "DELETE",
            })
            setToDoLists(toDoLists.filter(k => k.tid !== id));
        } catch (error) {
            console.error(error.message)   
        }
        console.log(id);
    }

    useEffect(() => {
        fetchLists();
    }, [])


    return (
        <Fragment>
            <table className="table text-center mt-5">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {toDoLists.map((data, k) =>
                        <tr key={k}>
                            <td>{data.description}</td>
                            <td><EditTodo todo={data} /></td>
                            <td>
                                <button className='btn btn-danger' onClick={()=> handleDelete(data.tid)}>Delete</button>
                            </td>
                        </tr>)}
                </tbody>
            </table>
        </Fragment>
    )
}

export default ListTodos