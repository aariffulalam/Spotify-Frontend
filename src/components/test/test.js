import React, { useContext, useEffect } from "react";
import noteContext from '../../context/notes/noteContext'

function Test() {
    const a = useContext(noteContext)
    useEffect(() => {
        a.update()
    }, [])
    return (
        <div>
            <p>name =      {a.state.name}</p>
            <p>age  =      {a.state.class}</p>
        </div>
    )
}

export default Test;