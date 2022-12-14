import { useRouter } from 'next/router'

export default function Home() {
    return (
        <div>
            <img className="main-logo object-cover m-auto" src="/desk.png" width="300" />

            <p className="title-text dosis-font text-center text-2xl py-2">
                <span className='text-lime-400'>Lưu ý:</span> Sđt chỉ hợp lệ khi gọi và được bắt máy ngay tại hội trường!!!
            </p>

            <div class="w-full max-w-xs m-auto mt-4">
                <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div class="mb-4">
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Tên" />
                    </div>
                    <div class="mb-6">
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Số điện thoại" />
                    </div>
                    <div class="flex items-center justify-center">
                        <button class="border rounded p-2 bg-red-600 hover:text-red-900 font-mono focus:outline-none focus:shadow-outline" type="button">
                            Tham Gia
                        </button>
                    </div>
                </form>
                <p class="text-center text-gray-500 text-xs">
                    &copy;2022 Emma.
                </p>
            </div>
        </div>
    )
}
