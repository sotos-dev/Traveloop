import "../styles/globals.scss"
import Layout from "../layout"
import { AuthContextProvider } from "../context/AuthContext"
import { useRouter } from "next/router"
import ProtectedRoute from "../utils/ProtectedRoute"
import Modal from "../ui/Modal"
import ModalContextProvider from "../context/ModalContext"

const noAuthRequired = ["/", "/login", "/register"]

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
    <>
      <AuthContextProvider>
        <ModalContextProvider>
          <Modal></Modal>
          <Layout>
            {noAuthRequired.includes(router.pathname) ? (
              <Component {...pageProps} />
            ) : (
              <ProtectedRoute>
                <Component {...pageProps} />
              </ProtectedRoute>
            )}
          </Layout>
        </ModalContextProvider>
      </AuthContextProvider>
    </>
  )
}

export default MyApp
