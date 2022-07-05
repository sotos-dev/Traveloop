import { getDocs, collection } from "firebase/firestore"
import { db } from "../../firebase/firebase_config"

const CategoryPage = ({ id }) => {
  return (
    <>
      <div>Category Page</div>
      <p>{id}</p>
    </>
  )
}

export default CategoryPage

export const getStaticPaths = async () => {
  const querySnap = await getDocs(collection(db, "categories"))

  const listOfIds = []

  querySnap.forEach((doc) => {
    listOfIds.push(doc.data().url)
  })

  const paths = listOfIds.map((url) => {
    return {
      params: { categoryId: url },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const id = params.categoryId

  return {
    props: {
      id,
    },
  }
}
