import React, { Fragment, useState } from 'react'

const EditTodo = ({ todo }) => {
    const [description, setDescription] = useState(todo.description);

    const handleEdit = async(e) => {
        try {
            const body = { description };
            await fetch(`http://localhost:5000/todos/${todo.tid}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body : JSON.stringify(body)
            })
            window.location = "/"
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <Fragment>
            <button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#todoID-${todo.tid}`}>
                Edit
            </button>

            <div className="modal" id={`todoID-${todo.tid}`} onClick={()=>setDescription(todo.description)}>
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">Edit Description</h4>
                            <button type="button" className="close" data-dismiss="modal" onClick={()=>setDescription(todo.description)}>&times;</button>
                        </div>


                        <div className="modal-body">
                            <input type={'text'} className='form-control' value={description} onChange={(e) => setDescription(e.target.value)} />
                        </div>

                        <div className="modal-footer">
                            <button className='btn btn-warning' onClick={e => handleEdit(e)}>Edit</button>
                            <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={()=>setDescription(todo.description)}>Close</button>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default EditTodo