import React, { useEffect, useState } from 'react'
import { urlG, apiKey } from '../../helpers/helpers'


const Cards = ({ categoria }) => {

    const [images, setImages] = useState([])
    useEffect(() => {
        fetchImgGif(categoria)
            .then(imgData => setImages(imgData))
    }, [categoria])

    const fetchImgGif = async (categoria) => {
        const urlGiphy = `${urlG}${encodeURI(categoria)}&limit=5&api_key=${apiKey}`
        const resp = await fetch(urlGiphy)
        const { data } = await resp.json()

        const imgData = data.map((img) => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        })

        return imgData
    }

    return (
        categoria !== undefined ?

            
            <ul>
                {
                    images.map((img) => (

                        <li key={img.id}>
                                <h3>{img.title}</h3>
                                <img src={img.url} alt="imagen" />
                        </li>

                    ))
                }
            </ul>
            :
            null
    )
}

export default Cards
