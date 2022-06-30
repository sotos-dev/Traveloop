import "../styles/globals.scss"
import Layout from "../layout"
import { AuthProvider } from "../store/AuthContext"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </>
  )
}

export default MyApp
