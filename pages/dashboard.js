import { useRouter } from "next/router"
import Dashboard from "../components/5-dashboardPageComps"
import { useAuth } from "../context/AuthContext"

const DashboardPage = () => {
  const { currentUser } = useAuth()
  const router = useRouter()

  return (
    <>
      {currentUser && <Dashboard />}
      {!currentUser && <div>You should probably login</div>}
    </>
  )
}

export default DashboardPage
