
import { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

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

const AddPhoto = () => {


  const initialValues = { title:"", description:"", image: null };
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  const navigate = useNavigate();
  
  const accessToken = Cookies.get('access_token');
  const headers = {
    'Authorization': `Bearer ${accessToken}` // Bearerトークンを含める
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('photo[title]', formValues.title);
    formData.append('photo[description]', formValues.description);
    // formData.append('photo[image]', formValues.image);
    formData.append('photo[image]', e.target.image.files[0]);

    axios.post('http://localhost:3000/api/v1/photos', formData, { headers })
    .then((resp) => {
        console.log(resp)
        navigate('/photo/share');
        // console.log(resp.data.name);
    })
    .catch((error) => {
        console.log(error.response.data);
        console.log(error);
    });
  };

  const handleImageSelect = (e) => {
    const selectedImage = e.target.files[0];
    // console.log(e.target.files[0])
    if (selectedImage) {
      setFormValues({ ...formValues, image: selectedImage });
    }
  };

  return (
    <LoginForm>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <h1>画像登録</h1>
        <hr />
        <FormItems>
          <FormItem>
            <Label htmlFor="">写真</Label>
            <Input
              type="file"
              placeholder=''
              name="image"
              accept="image/*,.png,.jpg,.jpeg,.gif"
              onChange={handleImageSelect}
            />
          </FormItem>
          <FormItem>
            <Label htmlFor="">作品名</Label>
            <Input
              type="text"
              placeholder='作品名'
              value={formValues.title}
              onChange={handleChange}
              name="title"
            />
          </FormItem>
          <FormItem>
            <Label htmlFor="">作品説明</Label>
            <Input
              type="text"
              placeholder='作品の説明'
              value={formValues.description}
              name="description"
              onChange={handleChange}
            />
          </FormItem>
          {/* <FormItem>
            <Label htmlFor="">撮影地</Label>
            <Input
              type="text"
              placeholder='撮影地'
              onChange={handleChange}
            />
          </FormItem> */}
          <LoginButton type="submit">アップロード</LoginButton>
        </FormItems>
      </Form>
    </LoginForm>
  )}

export default AddPhoto
