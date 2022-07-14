import HeroSection from "../components/1-HomePageComps/1-heroSection"
import RecentArticlesSection from "../components/1-HomePageComps/2-recentArticlesSection"
import MoreArticlesSection from "../components/1-HomePageComps/3-moreArticlesSection"
import MagazineSection from "../components/1-HomePageComps/4-magazineSection"
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../firebase/firebase_config"

export default function Home({ categories, recentPosts }) {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      {/* Recent Articles Section */}
      <RecentArticlesSection recentPosts={recentPosts} />
      {/* MoreArticlesSection */}
      <MoreArticlesSection categories={categories} />
      {/* Magazine Section */}
      <MagazineSection />
    </>
  )
}

export const getServerSideProps = async () => {
  // Get the first post from the first 4 categories
  let list = []
  const q = query(
    collection(db, "categories"),
    where("category", "!=", "travel inspiration")
  )
  const snapShot = await getDocs(q)
  snapShot.forEach((doc) => {
    list.push({ ...doc.data().posts[0], id: doc.id })
  })

  // Gets all Categories
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
      recentPosts: list,
    },
  }
}
