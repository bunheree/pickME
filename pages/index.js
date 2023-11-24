import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push('/fill')
  }

  return (
    <div className="bg-home bg-home-mobile">
      <button onClick={handleClick} className="btn-home text-purple-500 border-purple-800 border-4 font-bold rounded p-3 bg-white hover:bg-purple-600 hover:text-white font-mono title-text absolute">JOIN GAME</button>
    </div>
  )
}
