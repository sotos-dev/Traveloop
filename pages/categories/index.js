import CategoriesSection from "../../components/3-CategoriesPageComps/1-categoriesSection"
import RecentArticles from "../../components/3-CategoriesPageComps/2-recentArticlesSection"
import { getDocs, collection } from "firebase/firestore"
import { db } from "../../firebase/firebase_config"

const CategoriesPage = ({ categories }) => {
  console.log(categories)
  return (
    <>
      <CategoriesSection categories={categories} />
      <RecentArticles />
    </>
  )
}

export default CategoriesPage

export const getStaticProps = async () => {
  const querySnap = await getDocs(collection(db, "categories"))

  const categories = []

  querySnap.forEach((doc) => {
    categories.push(doc.data())
  })

  return {
    props: {
      categories,
    },
  }
}
