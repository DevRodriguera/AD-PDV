import React, { useEffect, useState } from 'react'
import Input from '../Input/Input'

const FormLogin = ({ handleSubmit, userData }) => {

  // const [user, setUser] = useState(userData || {})

  const [userName, setUsername] = useState('');
  const [userPassword, setUserpassword] = useState('');

  const [user, setUser] = useState({})

  // const submit = (e) => {
  //   e.preventDefault()
  //   handleSubmit(user)
  // }

  // ENVIAR VALORES DOS CAMPOS SEPARADOS
  // function handleName(e){ 
  //   setUsername(e.target.value)
  //   console.log(userName)
  // }

  // ENVIAR VALORES DOS CAMPOS COMO OBJETO
  // setUser({...user,
  // ->NOME DO CAMPO [e.target.name]
  // ->VALOR INFORMADO PELO USUÁRIO e.target.value})

  const handleChange = (e) => {
    setUser({...user, [e.target.name]:e.target.value})
    console.log(user)
  }


  return (
    <form>
      <Input
        type="text"
        text="Nome de usuário"
        name="nome"
        value={[user.nome]}
        handleOnChange={handleChange} />
      <Input
        type="password"
        text="Senha"
        name="senha"
        handleOnChange={handleChange} />

      <div className='gp-button'>
        <button type="submit" className='btn-submit'>Entrar</button>
        <button type="submit" className='btn-cancel'>Sair</button>
      </div>
      <a href="#" target="_blank" rel="noopener noreferrer">Atualiza licença</a>

    </form>
  )
}

export default FormLogin