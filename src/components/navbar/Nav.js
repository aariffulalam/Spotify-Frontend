import React, { useState, useEffect } from "react";




export default function Nav() {
    const [navitem, setNavitem] = useState('-_-')

    function item(val) {
        setNavitem(val)
        console.log("why i am working")
    }
    useEffect(() => {
        // item(navitem)
        console.log("iam working")
    }, [])

    return (
        <div>
            <button onClick={() => item('BLOG')}>blogs</button>
            <button onClick={() => item('HOME')}>home</button>
            <button onClick={() => item('POST')}>posts</button>
            <h1>{navitem}</h1>
        </div>
    )
}