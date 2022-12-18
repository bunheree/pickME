import { useEffect, useState } from 'react'
import members from '../json/data.json'

const fs = require('fs')
async function writeFile(data) {
  console.log(data)
  fs.writeFileSync('../json/example.json', data)
}

export default function List() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchData()
  }, [data])

  const fetchData = () => {
    setData(members)
  }

  const onRemoveItem = (index) => {
    data.splice(index, 1)
    writeFile(data)
  }

  return (
    <div>
      <p className="title-text dosis-font text-center text-2xl py-2 drop-shadow-lg text-white">
        DANH SÁCH THAM GIA
      </p>
      <div className="m-4">
        {data.length > 0 ?
          <>
            {data.map((item, index) => (
              <button key={index}
                type="button"
                onClick={() => onRemoveItem(index)}
                className="text-white hover:text-orange-400 mx-1 group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                {item.name}
                <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 122.87 122.87" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18,18A61.45,61.45,0,1,1,0,61.44,61.28,61.28,0,0,1,18,18ZM77.38,39l6.53,6.54a4,4,0,0,1,0,5.63L73.6,61.44,83.91,71.75a4,4,0,0,1,0,5.63l-6.53,6.53a4,4,0,0,1-5.63,0L61.44,73.6,51.13,83.91a4,4,0,0,1-5.63,0L39,77.38a4,4,0,0,1,0-5.63L49.28,61.44,39,51.13a4,4,0,0,1,0-5.63L45.5,39a4,4,0,0,1,5.63,0L61.44,49.28,71.75,39a4,4,0,0,1,5.63,0ZM61.44,10.54a50.91,50.91,0,1,0,36,14.91,50.83,50.83,0,0,0-36-14.91Z" clipRule="evenodd"></path></svg>
              </button>
            ))}
          </> :
          <p className="title-text dosis-font text-center text-xl py-2 drop-shadow-lg text-white">
            Chưa có ai tham gia cả !!!
          </p>
        }
      </div>
    </div>
  )
}
