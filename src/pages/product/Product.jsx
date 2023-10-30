import React from 'react'
import FormProduct from '../../components/FormProduct/FormProduct.jsx'
import Header from '../../components/Header/index.jsx'

const Product = () => {


    function createPost(project) {
        project.cost = 0
        project.services = []

        fetch("http://localhost:5000/projects", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                //redirect
            })
            .catch(err => console.log(err))
    }

    return (<>
        <Header />
        <FormProduct handleSubmit={createPost} />
    </>)
}

export default Product