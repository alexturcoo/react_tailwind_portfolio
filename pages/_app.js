import { Navbar } from '../components/navbar'
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return <> 
  <Navbar />
  
  <Component {...pageProps} />
</>

}

export default MyApp
