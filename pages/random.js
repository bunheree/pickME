import { useRouter } from 'next/router'
import { useEffect, useState, useRef } from 'react'
import Marquee from "react-fast-marquee"

export default function Random() {
    const [gameState, setGameState] = useState(false)
    const [data, setData] = useState([])
    const [showLabel, setShowLabel] = useState(false)
    const [index, setIndex] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleClick = (state) => {
        setGameState(state)
    }

    const fetchData = async () => {
        const req = await fetch('/api/get')
        const res = await req.json()
        if (res.data && res.data.values) {
            setData(res.data.values)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const findWinner = async () => {
        var winnerIdx = Math.floor(Math.random() * data.length)
        var newData = []

        if (data[winnerIdx][2] == 0) {
            findWinner()
        }

        setLoading(true)
        setTimeout(() => {
            setIndex(winnerIdx)
            setShowLabel(true)
            setLoading(false)
        }, 5000)

        // Update data
        data.forEach((item, i) => {
            newData[i] = item
            if (winnerIdx == i) {
                newData[i] = [item[0], item[1], 0]
            }
        })
        const response = await fetch('/api/update', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
        const content = await response.json()
        console.log(content)
        fetchData()
    }

    const itemElem = function (item, i) {
        return (
            <Marquee key={i}
                speed={Math.floor(Math.random() * (120 - 50) + 50)}
                className={`marquee-item text-xl ${item[2] == 0 ? 'text-green-300 underline underline-offset-4' : 'text-white'}`}
                style={{ top: Math.floor(Math.random() * 550) }}
                gradient={false}>
                {item[0]}
            </Marquee>
        )
    }

    return (
        <div className={`bg-main bg-home ` + (gameState ? 'bg-game' : '') + (showLabel ? ' bg-disable' : '') + (loading ? ' bg-disable' : '')}>
            {!gameState ?
                <button className="btn-start border border-red-800 rounded p-3 bg-yellow-400 hover:text-red-800 border-4 hover:border-red-800 hover:bg-white font-mono absolute shadow-2xl text-2xl"
                    onClick={() => handleClick(!gameState)}>
                    BẮT ĐẦU
                </button>
                :
                <>
                    {(!showLabel && !loading) &&
                        <>
                            <button className="btn-back border border-red-800 rounded p-3 bg-yellow-400 hover:text-red-800 border-4 hover:border-red-800 hover:bg-white font-mono absolute shadow-2xl"
                                onClick={() => handleClick(!gameState)}>
                                BACK
                            </button>
                            <div className='btn-start-game'>
                                <button className="btn-game-start border border-red-800 rounded p-3 px-8 bg-yellow-400 hover:text-red-800 border-4 hover:border-red-800 hover:bg-white font-mono absolute shadow-2xl"
                                    onClick={findWinner}>
                                    START
                                </button>
                            </div>
                        </>
                    }

                </>
            }


            {(gameState && data.length > 0) &&
                <div className='marquee-wrapper'>
                    {data.map((item, i) => {
                        return itemElem(item, i)
                    })}
                </div>
            }

            {showLabel &&
                <div className='bg-winner winner-alert text-2xl winner-font' onClick={() => setShowLabel(false)}>
                    {data[index][0]}
                    <br />
                    {data[index][1]}
                </div>
            }

            {loading &&
                <div className='loader'></div>
            }
        </div>
    )
}
