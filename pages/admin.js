import { useRouter } from 'next/router'

export default function Admin() {
    const router = useRouter()

    const handleClick = (link) => {
        router.push(link)
    }

    return (
        <div className='grid grid-rows-5 grid-flow-col flex justify-center'>
            <p className="title-text dosis-font text-center text-2xl pt-8 pb-4">
                Menu
            </p>
            <button className="border rounded p-3 bg-red-600 hover:text-red-900 hover:bg-white font-mono m-3 w-40"
                onClick={() => handleClick('/')}>
                Home
            </button>
            <button className="border rounded p-3 bg-red-600 hover:text-red-900 hover:bg-white font-mono m-3 w-40"
                onClick={() => handleClick('/fill')}>
                Form
            </button>
            <button className="border rounded p-3 bg-purple-600 hover:text-purple-900 hover:bg-white font-mono m-3 w-40"
                onClick={() => handleClick('/random')}>
                Random
            </button>
            <button className="border rounded p-3 bg-purple-600 hover:text-purple-900 hover:bg-white font-mono m-3 w-40"
                onClick={() => handleClick('/list')}>
                Manage List
            </button>
        </div>
    )
}
