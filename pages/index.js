import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push('/fill')
  }

  return (
    <div className="bg-home bg-home-mobile">
      <button onClick={handleClick} className="btn-home border rounded p-3 bg-red-600 hover:text-red-900 hover:bg-white font-mono title-text absolute">THAM GIA</button>
    </div>
  )
}
