import { useEffect, useState } from 'react'

export default function Fill() {
    const [error, setError] = useState(false)
    const [errorText, setErrorText] = useState('Số điện thoại không hợp lệ!!!')
    const [success, setSuccess] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        const name = document.querySelector('#name').value
        const phone = document.querySelector('#phone').value

        if (!name) {
            setErrorText('Quên nhập TÊN rồi kìa!')
            setError(true)
            return false
        }

        if (!phone) {
            setErrorText('Quên nhập SĐT rồi kìa!')
            setError(true)
            return false
        }

        if (phone.length < 10) {
            setErrorText('Số điện thoại không hợp lệ!!!')
            setError(true)
            return false
        }

        setSuccess(true)
    }

    return (
        <div>
            <img className={`main-logo object-cover m-auto ` + (success ? 'opacity-0' : '')} src="/desk.png" width="300" />

            {!success ?
                <>
                    <p className="title-text dosis-font text-center text-2xl py-2">
                        <span className='text-lime-400'>Lưu ý:</span> Sđt chỉ hợp lệ khi gọi và được bắt máy ngay tại hội trường!!!
                    </p>

                    <div class="w-full max-w-xs m-auto mt-4">
                        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                            <div class="mb-4">
                                <input id="name"
                                    name="name"
                                    required
                                    class={(error ? 'border-rose-600' : '') + ` shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                    type="text"
                                    placeholder="Tên" />
                            </div>
                            <div class="mb-6">
                                <input id="phone"
                                    name="phone"
                                    required
                                    class={(error ? 'border-rose-600' : '') + ` shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                    placeholder="Số điện thoại" />
                                <p className={`text-sm text-rose-800 py-2 ` + (error ? '' : 'hidden')}>
                                    {errorText}
                                </p>
                            </div>
                            <div class="flex items-center justify-center">
                                <button class="border rounded p-2 bg-red-600 hover:text-red-900 font-mono focus:outline-none focus:shadow-outline"
                                    onClick={handleClick}
                                    type="submit">
                                    Tham Gia
                                </button>
                            </div>
                        </form>
                        <p class="text-center text-gray-500 text-xs">
                            &copy;2022 Emma.
                        </p>
                    </div>
                </>
                :
                <>
                    <img className="main-logo object-cover m-auto" src="/success.png" width="300" />
                    <p className="title-text dosis-font text-center text-2xl py-2">
                        <span className='text-rose-800'>Hì hì:</span> Chúc mừng bạn đã tham gia thành công ^ ^
                    </p>
                </>
            }
        </div>
    )
}
