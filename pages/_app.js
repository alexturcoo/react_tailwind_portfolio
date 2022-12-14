import { Navbar } from '../components/navbar'
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { Bottombar } from '../components/bottombar'

function MyApp({ Component, pageProps }) {
  return <> 
  <Navbar />
  
  <Component {...pageProps} />

  <Bottombar />
</>

}

export default MyApp
