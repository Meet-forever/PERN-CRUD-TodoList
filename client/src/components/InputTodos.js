import React, { Fragment, useState } from 'react'

function InputTodos() {

    const [description, setDescription] = useState("");
    const onSubmitForm = async(e) => {
        e.preventDefault();
        if(description.trim() === "") return; 
        try {
            const body = { description };
            await fetch("http://localhost:5000/todos", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            setDescription("");
            window.location = "/";
        } catch (err) {
            console.log(err.message);
        }
    }


    return (
        <Fragment>
            <h1 className='text-center mt-5'>Pern Todo List</h1>
            <form className='d-flex mt-5' onSubmit={onSubmitForm}>
                <input type={'text'} name={'description'} className='form-control' value={description} onChange={(e) => setDescription(e.target.value)} />
                <button type={'submit'} className='btn btn-success'>Add</button>
            </form>
        </Fragment>
    )
}

export default InputTodos