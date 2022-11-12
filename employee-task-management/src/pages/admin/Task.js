import { React, useState, useEffect } from "react";
import { Form, Row, Col } from "react-bootstrap"
import UserTask from "../user/Task";

export default function MyModal({ visible, onClose }) {
    const initialValues = {
        nameofTask: "",
        deadline: "",
        category: "",
        inputTask: "",
    }

    const [formValues, setformValues] = useState(initialValues);
    const [formErrors, setformErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setformValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // setIsSubmit(true);
        // alert(formValues)
        console.log(formValues);
    }

    // const tambahTask = (title) => {
    //     // let id = this.state.initialValues[this.state.initialValues.length-1].id + 1
    //     // const newTodo = {nameofTask, ...deadline, category, addTask}
    //     this.setState({initialValues: [...this.state.initialValues, newTodo]})
    // }

    const handleOnClose = (e) => {
        if (e.target.id === "container") onClose()
    }

    if (!visible) return null

    return (
        <div id="container" onClick={handleOnClose} className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-white p-2 rounded" style={{ width: 500 }}>
                <h5 className="text-center mt-3">Add Task</h5>
                
                <div className="ml-3 mt-3 mr-3 mb-3 sm:flex sm:items-start">
                    <Form onSubmit={handleSubmit}>
                        {Object.keys(formErrors).length === 0 && isSubmit ?
                            (alert("berhasil"))
                            : (
                                ""
                            )}

                        <p>{formErrors.nama}</p>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={6}>
                                Name of Task
                            </Form.Label>
                            <Col sm={6}>
                                <Form.Control type="text" placeholder="" name="nameofTask" value={formValues.nameofTask} onChange={handleChange}/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={6}>
                                Deadline
                            </Form.Label>
                            <Col sm={6}>
                                <Form.Control type="date" placeholder="" name="deadline" value={formValues.deadline} onChange={handleChange}/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={6}>
                                Category
                            </Form.Label>
                            <Col sm={6}>
                                <Form.Select aria-label="Default select example" name="category" onChange={handleChange}>
                                    <option value="1">Urgent</option>
                                    <option value="2">Priority</option>
                                    <option value="3">Basic</option>
                                </Form.Select>
                            </Col>
                        </Form.Group>

                        {/* //input file */}
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={6}>
                                Add Task
                            </Form.Label>
                            <Col sm={6}>
                                <Form.Control type="file" name="addTask"/>
                            </Col>
                        </Form.Group>

                    </Form>
                    {/* <UserTask initialValues={this.state.initialValues} tambahTask={this.tambahTask} hapusTask={this.hapusTask}/> */}

                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={handleSubmit}
                    >
                        Save
                    </button>
                    <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => handleOnClose(false)}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}