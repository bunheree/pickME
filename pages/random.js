import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Random() {
    const [gameState, setGameState] = useState(false);

    const handleClick = (state) => {
        setGameState(state)
    }

    return (
        <div className={`bg-main bg-home ` + (gameState ? 'bg-game' : '')}>
            {!gameState ?
                <button className="btn-start border rounded p-3 bg-red-600 hover:text-red-900 hover:bg-white font-mono absolute shadow-2xl text-2xl border-4 hover:border-rose-600"
                    onClick={() => handleClick(!gameState)}>
                    BẮT ĐẦU
                </button>
                :
                <button className="btn-back border rounded p-3 bg-red-600 hover:text-red-900 hover:bg-white font-mono absolute shadow-2xl"
                    onClick={() => handleClick(!gameState)}>
                    BACK
                </button>
            }
        </div>
    )
}
