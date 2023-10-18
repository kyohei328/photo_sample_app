import { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const LoginForm = styled.div`
height: 100vh;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`

const Form = styled.form`
background-color: white;
width: 70%;
max-width: 450px;
padding: 30px;
border-radius: 10px;
border: 1px solid #dfdfdf;
border-radius: 18px;
box-shadow: 30px 43px 32px -34px rgba(0, 0, 0, 0.4);
`
const FormItems = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
height: 400px;
`

const FormItem = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`

const Input = styled.input`
border: 1px solid grey;
padding: 20px;
border-radius: 4px;
&:focus{
  outline: none;
}
`

const Label = styled.label`
font-size: 15px;
font-weight: 600;
margin-bottom: 3px;
`

const LoginButton = styled.button`
background-color: #1b66a7;
  width: 100%;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  padding: 10px 30px;
  color: white;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover{
    background-color: #175892;
  }
`

const UserCreate = () => {

  const initialValues = { name:"", email:"", password:"", password_confirmation:""};
  const [formValues, setFormValues] = useState(initialValues);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues)

    // axios.post('/api/v1/users', formValues)
    axios.post('http://localhost:3000/api/v1/users', formValues)
    .then(resp => {
        console.log(resp.data);
        navigate('/');
    })
    .catch(error => {
        console.log(error);
    });
  };

  return (
    <LoginForm>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <h1>ユーザー登録</h1>
        <hr />
        <FormItems>
            <FormItem>
                <Label htmlFor="">ユーザー名</Label>
                <Input
                type="text"
                required
                placeholder='ユーザー名'
                value={formValues.name}
                onChange={handleChange}
                name="name"
                />
            </FormItem>
            <FormItem>
                <Label htmlFor="">メールアドレス</Label>
                <Input
                type="text"
                required
                placeholder='メールアドレス'
                value={formValues.email}
                onChange={handleChange}
                name="email"
                />
            </FormItem>
            <FormItem>
                <Label htmlFor="">パスワード</Label>
                <Input
                type="text"
                required
                placeholder='パスワード'
                value={formValues.password}
                onChange={handleChange}
                name="password"
                />
            </FormItem>
          <FormItem>
            <Label htmlFor="">パスワード確認</Label>
            <Input
                type="text"
                required
                placeholder='パスワード確認'
                value={formValues.password_confirmation}
                onChange={handleChange}
                name="password_confirmation"
                />
          </FormItem>
          <LoginButton type="submit">登録</LoginButton>
        </FormItems>
      </Form>
    </LoginForm>
  )
}

export default UserCreate;
