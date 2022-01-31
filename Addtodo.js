import React, { useState } from 'react';


export const Addtodo = (props) => {
    let [title, setTitle] = useState("");
    let [desc, setDesc] = useState("");
    const submit = (e) => {

        e.preventDefault();
        if (!title || !desc) {
            alert("Title or description can not be empty")
        }
        else {
        props.addTodo(title, desc);
        setTitle=("");
        setDesc=("");
        }
    }

    return (
        <div className="container my-3">
            <h3>Add a TODO</h3>
            <form onSubmit={submit}>

                <div className="mb-3">
                    <label htmlFor="Title" className="form-label">Your Title</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="Title" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                    <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="desc" />
                </div>

                <button type="submit" className="btn btn-sm btn-success">Update</button>
            </form>
        </div>
    )
}
