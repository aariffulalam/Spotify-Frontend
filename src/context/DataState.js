import React, { useState, useEffect } from 'react'
import dataContext from './DataContext'

const DataState = ({ children }) => {

    // Fetching the datas
    const [topsongs, setTopSongs] = useState([])
    async function getData() {
        await fetch("http://localhost:3000/spotify/songs").then((res) => {
            return res.json()
        }).then((data) => {
            console.log(typeof (data))
            setTopSongs(data.getSongs)
        })
    }

    useEffect(() => {
        getData()
    }, [])

    const [name, setName] = useState("")
    const handleOnChange = (e) => {
        setName(e.target.value)
    }
    // setSongData(fetcheddata)
    return (
        <dataContext.Provider value={{ name, handleOnChange, topsongs }}>
            {children}
        </dataContext.Provider>
    )
}

export default DataState