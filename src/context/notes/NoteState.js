import { useState } from 'react'
import NoteContext from './noteContext'

const NoteState = (props) => {
    const s = {
        "name": "Aarif",
        "class": "5b"
    }
    const [state, setState] = useState(s)
    const update = () => {
        setTimeout(() => {
            setState({
                "name": "ALAM",
                "class": "10b"
            })
        }, 1000)
    }
    return (
        <NoteContext.Provider value={{ state: state, update: update }} >
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;