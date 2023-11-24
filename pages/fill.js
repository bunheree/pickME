import { useEffect, useState } from 'react'

export default function Fill() {
    const [error, setError] = useState(false)
    const [errorText, setErrorText] = useState('Số điện thoại không hợp lệ!!!')
    const [success, setSuccess] = useState(false)
    const [disableBtn, setDisableBtn] = useState(false)
    const [data, setData] = useState([])
    const [isLoad, setIsLoad] = useState(false)

    const fetchData = async () => {
        const req = await fetch('/api/get')
        const res = await req.json()
        if (res.data && res.data.values) {
            setData(res.data.values)
        }
        setIsLoad(true)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleClick = async (e) => {
        e.preventDefault()
        const name = document.querySelector('#name').value
        const phone = document.querySelector('#phone').value
        const status = 1

        if (!name) {
            setErrorText('Name is required!')
            setError(true)
            return false
        }

        if (!phone) {
            setErrorText('Phone is required!')
            setError(true)
            return false
        }

        if (phone.length < 10) {
            setErrorText('Phone number is not valid!!!')
            setError(true)
            return false
        }

        let checkPhone = 0
        if (data.length > 0) {
            for (let i = 0; i <= data.length; i++) {
                // break condition     
                if (data[i] && data[i][1] == phone) {
                    console.log(data[i][1])
                    setErrorText('Joined phone number!')
                    setError(true)
                    checkPhone = 1
                    break;
                }
            }
        }
    
        if (checkPhone == 1) {
            return false
        }

        setError(false)
        setDisableBtn(true)

        const form = {
            name,
            phone,
            status
        }
        const response = await fetch('/api/submit', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
        const content = await response.json()
        console.log(content)
        setSuccess(true)

    }

    return (
        <div>
            <img className={`main-logo object-cover m-auto ` + (success ? 'opacity-0' : '')} src="/desk.png" width="300" />

            {isLoad &&
                <>
                    {!success ?
                        <>
                            <p className="title-text dosis-font text-center text-lg p-2">
                                <span className='text-purple-400'>Note:</span> The phone number will be used to verify the details.
                            </p>

                            <div className="w-full max-w-xs m-auto mt-4">
                                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                    <div className="mb-4">
                                        <input id="name"
                                            name="name"
                                            required
                                            className={(error ? 'border-rose-600' : '') + ` shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                            type="text"
                                            placeholder="Name" />
                                    </div>
                                    <div className="mb-6">
                                        <input id="phone"
                                            name="phone"
                                            required
                                            className={(error ? 'border-rose-600' : '') + ` shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                            placeholder="Phone number" />
                                        <p className={`text-sm text-rose-800 py-2 ` + (error ? '' : 'hidden')}>
                                            {errorText}
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <button className={`border rounded p-2 bg-purple-400 hover:bg-white hover:text-purple-900 font-mono focus:outline-none focus:shadow-outline ${disableBtn ? 'opacity-50' : ''}`}
                                            onClick={handleClick}
                                            disabled={disableBtn}
                                            type="submit">
                                            Join random game
                                        </button>
                                    </div>
                                </form>
                                <p className="text-center text-gray-200 text-xs">
                                    &copy;2022 Emma.
                                </p>
                            </div>
                        </>
                        :
                        <>
                            <img className="main-logo object-cover m-auto" src="/success.png" width="300" />
                            <p className="title-text dosis-font text-center text-2xl py-2">
                                <span className='text-purple-200'>Tada!!</span> You have successfully joined.
                            </p>
                        </>
                    }
                </>
            }
        </div>
    )
}
