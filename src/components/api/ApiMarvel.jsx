import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

function Marvel() {
    const [personajes, setPersonajes] = useState([])
    useEffect(() => {
        axios.get('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=956a154d44f7087e12011b9f378ca964&hash=190d14cfea5350efbdc604ffb99d4e13').then(res => {
            setPersonajes(res.data.data.results)
        }).catch(err => console.log(err))
    }, [])



    return (
        <div>
            <h1>Personajes de Marvel</h1>
            <div className={`user-card p-4 rounded-md shadow-md hover:scale-105 transition group`}>

                {personajes.map(per => (
                    <img className="w-full rounded-md grayscale group-hover:grayscale-0 aspect-auto max-w-xxs"
                    src={`${per.thumbnail.path}.${per.thumbnail.extension}`} alt="card image" />
                ))
                }

            </div>
        </div>
    )
}
export default Marvel


//https://gateway.marvel.com:443/v1/public/characters?apikey=

//key public: 956a154d44f7087e12011b9f378ca964

//key private: 78f2e55cbcfb6993c8d94c37b4b5c9fef971f80f

// ts: 1

// llave total 178f2e55cbcfb6993c8d94c37b4b5c9fef971f80f956a154d44f7087e12011b9f378ca964

//hash: 190d14cfea5350efbdc604ffb99d4e13