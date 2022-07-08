import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../../firebase/firebase_config"
import CategorySection from "../../../components/4-CategoryPageComps/1-categorySection"

const CategoryPage = ({ posts, categories }) => {
  return (
    <>
      <CategorySection posts={posts} categories={categories} />
    </>
  )
}

export default CategoryPage

// Static Props
export const getServerSideProps = async ({ params }) => {
  // Declare Variables
  let category = []
  let posts = []
  // Query to find the Category
  const q = query(
    collection(db, "categories"),
    where("url", "==", params.category)
  )
  // Run the Query and get the data
  const querySnapshot = await getDocs(q)
  // Save Category's data and id in an array and pass it as props
  querySnapshot.docs.forEach((doc) =>
    category.push({ id: doc.id, data: doc.data() })
  )
  // Get the Posts from the category
  category.forEach((item) => posts.push(...item.data.posts))

  // -------------------------
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
      posts,
      categories,
    },
  }
}

// Static Paths
// export const getStaticPaths = async () => {
//   const querySnap = await getDocs(collection(db, "categories"))

//   const listOfIds = []

//   querySnap.forEach((doc) => {
//     listOfIds.push(doc.data().url)
//   })

//   const paths = listOfIds.map((url) => {
//     return {
//       params: { category: url },
//     }
//   })

//   return {
//     paths,
//     fallback: false,
//   }
// }
