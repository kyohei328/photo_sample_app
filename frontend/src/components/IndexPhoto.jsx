import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin-top: 30px;
`
const Card = styled(Link)`
`
const Image = styled.img`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 10px;
  padding: 0px;
  max-width: 200px;
  height: 90%;
  width: 90%
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000000;
  text-align: left;
  padding-left: 10px;
  font-weight: bold;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`

const IndexPhoto = () => {

  const [images, setImages] = useState([])

  const accessToken = Cookies.get('access_token');
  const headers = {
    'Authorization': `Bearer ${accessToken}` // Bearerトークンを含める
  };
  console.log(accessToken)
  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/photos', { headers })
      .then((resp) => {
        console.log(resp)
        setImages(resp.data.data)
      })
      .catch((error) => {
      console.log(error)
    });
  },[]);


  return (
    <>
      <StyledLink to="/map" images={images}>
        撮影場所を見る
      </StyledLink>
      <CardList>
        {images.map((image) => (
            <Card to={`/photo/${image.attributes.id}`} key={image.attributes.id} >
              <Image src={image.attributes.image_url} alt={image.attributes.title}/>
            </Card>
        ))}
      </CardList>
    </>
  )
}

export default IndexPhoto
