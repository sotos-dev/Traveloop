import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../../firebase/firebase_config"
import CategorySection from "../../../components/4-CategoryPageComps/1-categorySection"

const CategoryPage = ({ postsList, category }) => {
  return (
    <>
      return <CategorySection postsList={postsList} category={category} />
    </>
  )
}

export default CategoryPage

// Static Props
export const getServerSideProps = async ({ params }) => {
  const category = params.category
  // The Query
  const q = query(collection(db, "categories"), where("url", "==", category))
  // Run the Query
  const querySnapshot = await getDocs(q)
  // What Category was Clicked on
  const theCategory = querySnapshot.docs.map((doc) => {
    return { id: doc.id, data: doc.data() }
  })
  // This returns a nested array that includes the posts
  const postsList = theCategory.map((doc) => {
    return doc.data.posts
  })

  return {
    props: {
      postsList: postsList,
      category: category,
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
