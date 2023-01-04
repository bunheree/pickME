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
            <button className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 rounded-lg px-5 py-2.5 text-center font-mono m-3 w-40"
                onClick={() => handleClick('/')}>
                Home
            </button>
            <button className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 rounded-lg px-5 py-2.5 font-mono m-3 w-40"
                onClick={() => handleClick('/fill')}>
                Form
            </button>
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-mono m-3 w-40"
                onClick={() => handleClick('/random')}>
                Random
            </button>
            <a href='https://docs.google.com/spreadsheets/d/1-6iugU-V9UrO7EDkVt-5x21LN5HeYAzHWgSku9Yy3TA/edit?usp=sharing'  
                className="border text-center rounded p-3 bg-purple-600 hover:text-purple-900 hover:bg-white font-mono m-3 w-40">
                Manage List
            </a>
        </div>
    )
}
