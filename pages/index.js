import HeroSection from "../components/1-HomePageComps/1-heroSection"
import RecentArticlesSection from "../components/1-HomePageComps/2-recentArticlesSection"
import MoreArticlesSection from "../components/1-HomePageComps/3-moreArticlesSection"
import MagazineSection from "../components/1-HomePageComps/4-magazineSection"
import { getDocs, collection } from "firebase/firestore"
import { db } from "../firebase/firebase_config"

export default function Home({ categories }) {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      {/* Recent Articles Section */}
      <RecentArticlesSection />
      {/* MoreArticlesSection */}
      <MoreArticlesSection categories={categories} />
      {/* Magazine Section */}
      <MagazineSection />
    </>
  )
}

export const getServerSideProps = async () => {
  // Gets the Categories
  const querySnap = await getDocs(collection(db, "categories"))
  // Array Initialization
  const categories = []
  // Get's All data from all Categories
  querySnap.forEach((doc) => {
    categories.push({ data: doc.data(), id: doc.id })
  })

  return {
    props: {
      categories,
    },
  }
}
