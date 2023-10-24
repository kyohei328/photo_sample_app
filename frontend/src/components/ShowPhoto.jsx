import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

const Image = styled.img`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 10px;
  padding: 0px;
  max-width: 200px;
  height: 90%;
  width: 90%
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
  width: 100%;
  /* height: 50%; */
`
const FormItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-around; */
  height: 100%;

  width:100%;
`

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`

const ShowForm = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
`

const ShowPhoto = (props) => {

    const [current_photo, setCurrentPhoto] = useState("");
    const [data, setData] = useState([]);

    const id = useParams();

    const accessToken = Cookies.get('access_token');
    const headers = {
      'Authorization': `Bearer ${accessToken}` // Bearerトークンを含める
    };

    useEffect(() => {
      axios.get(`http://localhost:3000/api/v1/photos/${id.id}`, { headers })
       .then((resp) => {
        console.log(resp.data)
        setCurrentPhoto(resp.data)

        const formattedData = Object.keys(resp.data)
        .filter((key) => key !== "image_url")
        .map((key) => ({
                    key,
                    value: resp.data[key],
        }));
        setData(formattedData);
       })
       .catch((e) => {
        console.log(e)
       });
    },[id.id]);

  return (
    <ShowForm>
      <Form>
        <FormItems>
          <FormItem>
            <Image src={current_photo.image_url} alt={current_photo.title}/>
          </FormItem>
          <FormItem>
              {data.map((item, index) => (
                <div key={index}>
                    <p>{item.key}: {item.value}</p>
                </div>
            ))}
          </FormItem>
        </FormItems>
      </Form>
    </ShowForm>
  )
};

export default ShowPhoto
