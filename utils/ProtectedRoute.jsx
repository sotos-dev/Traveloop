import { useRouter } from "next/router"
import { useEffect } from "react"
import { useAuth } from "../context/AuthContext"

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!currentUser) {
      router.push("/login")
    }
  }, [router, currentUser])

  return (
    <>
      <div>{currentUser ? children : null}</div>
    </>
  )
}

export default ProtectedRoute
