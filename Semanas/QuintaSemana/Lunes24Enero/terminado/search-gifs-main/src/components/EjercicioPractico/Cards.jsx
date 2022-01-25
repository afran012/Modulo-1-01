import React, { useEffect, useState } from 'react'

const Cards = ({ categoria }) => {

    const [images, setImages] = useState([])
    useEffect(() => {
        fetchImgGif(categoria)
            .then(imgData => setImages(imgData))
    }, [categoria])

    const fetchImgGif = async (categoria) => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=5&api_key=VB3008QFTwD5SgXniRnEa6UjwcBpXkIt`
        const resp = await fetch(url)
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
            <ol>
                {
                    images.map((img) => (
                        <li key={img.id}>
                            <h3>{img.title}</h3>
                            <img src={img.url} alt="imagen" />
                        </li>
                    ))
                }
            </ol>
            :
            null
    )
}

export default Cards
