import React, { useState } from 'react'
import axios from 'axios'

const IndexPhoto = () => {

  const [images, setImages] = useState([])

    axios.get('http://localhost:3000/api/v1/photos')
      .then((resp) => {
        setImages(resp.data)
      })
      .catch((error) => {
      console.log(error)
    })

    

  return (
    <div>
      { images.map((image) => (
        <div key={image.id}>
          <img src={`/rails/active_storage/blobs/${image.image.key}`} alt={image.image.filename} />
        </div>
      ))}
    </div>
  )
}

export default IndexPhoto
