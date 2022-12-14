import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>PickME</title>
                <meta name="description" content="Create by Emma" />
                <link rel="icon" href="/Emma.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@200;400&display=swap" rel="stylesheet" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp