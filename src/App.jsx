import React, { useState } from "react"
import { Game } from "./Components/Game/Game"
import Loading from "./Components/Loading/Loading"

function App() {
    const [enter, setEnter] = useState(false)

    function enterGame() {
        setEnter(true)
    }

    return (
        <>
            {
                enter ? <Game /> : <Loading onEnter={enterGame} />
            }
        </>
    )
}

export default App
