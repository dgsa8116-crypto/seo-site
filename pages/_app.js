import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <body className="bg">
      <Component {...pageProps} />
    </body>
  )
}
