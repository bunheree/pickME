import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push('/fill')
  }

  return (
    <div className="bg-home bg-home-mobile">
      <button onClick={handleClick} className="btn-home border border-red-800 border-2 rounded p-3 bg-yellow-400 hover:bg-white hover:text-red-900 hover:bg-white font-mono title-text absolute">THAM GIA</button>
    </div>
  )
}
