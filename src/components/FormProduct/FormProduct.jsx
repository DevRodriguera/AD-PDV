import React, { useState, useEffect } from 'react'
import Input from '../Input/Input.jsx'
import { unstable_HistoryRouter } from 'react-router-dom';

const FormProduct = ({handleSubmit, projectData}) => {

    const [categories, setCategories] = useState([]);
    const [project, setProject] = useState(projectData || {});

    // useEffect(() => {
    //     fetch("http://localhost:5000/categories", {
    //         method: "GET",
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     })
    //         .then((resp) => resp.json())
    //         .then((data) => {
    //             setCategories(data)
    //         })
    //         .catch((err) => console.log(err))
    // }, [])

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
    }

    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value })
    }

    return (
        <form onSubmit={submit}>
            <Input type="text" text="Nome de usuário"
                name="usuario" handleOnChange={handleChange} />
            <button type='submit'>Enviar</button>
        </form>
    )
}

export default FormProduct