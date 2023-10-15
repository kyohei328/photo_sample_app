
import { useState } from 'react'
import styled from 'styled-components'

const AddPhoto = () => {

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
  const initialValues = { username:"", mailAddress:"", password:""};
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <LoginForm>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <h1>画像登録</h1>
        <hr />
        <FormItems>
          <FormItem>
            <Label htmlFor="">写真</Label>
            <Input type="file" placeholder='' onChange={(e) => handleChange(e)} />
          </FormItem>
          <FormItem>
            <Label htmlFor="">作品名</Label>
            <Input  type="text" placeholder='' onChange={(e) => handleChange(e)} />
          </FormItem>
          <FormItem>
            <Label htmlFor="">作品説明</Label>
            <Input type="text" placeholder='' onChange={(e) => handleChange(e)} />
          </FormItem>
          <FormItem>
            <Label htmlFor="">撮影地</Label>
            <Input type="text" placeholder='' onChange={(e) => handleChange(e)} />
          </FormItem>
          <LoginButton>アップロード</LoginButton>
        </FormItems>
      </Form>
    </LoginForm>
  )}

export default AddPhoto
