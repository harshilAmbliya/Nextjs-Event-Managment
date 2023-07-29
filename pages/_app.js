import '@/styles/globals.css'
import Layout from './components/ui/Layout'

export default function App({ Component, pageProps }) {
  return <Layout>
    <Component {...pageProps} />
  </Layout>
}
