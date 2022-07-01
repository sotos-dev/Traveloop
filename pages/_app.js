import "../styles/globals.scss"
import Layout from "../layout"
import { AuthContextProvider } from "../context/AuthContext"
import { useRouter } from "next/router"
import ProtectedRoute from "../utils/ProtectedRoute"

const noAuthRequired = ["/", "/login", "/register"]

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
    <>
      <AuthContextProvider>
        <Layout>
          {noAuthRequired.includes(router.pathname) ? (
            <Component {...pageProps} />
          ) : (
            <ProtectedRoute>
              <Component {...pageProps} />
            </ProtectedRoute>
          )}
        </Layout>
      </AuthContextProvider>
    </>
  )
}

export default MyApp
