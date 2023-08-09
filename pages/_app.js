import '@/styles/globals.css'
import Layout from './components/ui/Layout'
import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css';
export default function App({ Component, pageProps }) {
  return <Theme appearance="light" accentColor="cyan" radius="large">
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </Theme>
}
