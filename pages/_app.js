import { Navbar } from '../components/navbar'
import '../styles/globals.css'
import { Bottombar } from '../components/bottombar'

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-black text-gray-300 min-h-screen font-mono flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Component {...pageProps} />
      </main>
      <Bottombar />
    </div>
  )
}

export default MyApp
