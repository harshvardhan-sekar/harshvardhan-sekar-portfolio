import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#2d3748" />
        <meta name="msapplication-TileColor" content="#2d3748" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Fonts */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Inter:wght@400;500;600;700;800&display=swap" 
          rel="stylesheet" 
        />
        <link 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
          rel="stylesheet" 
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
