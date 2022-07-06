import {
  doc,
  getDoc,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore"
import { db } from "../../firebase/firebase_config"
import CategorySection from "../../components/4-CategoryPageComps/1-categorySection"

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

const CategoryPage = ({ postsList }) => {
  return (
    <>
      return <CategorySection postsList={postsList} />
    </>
  )
}

export default CategoryPage

export const getStaticProps = async ({ params }) => {
  const category = params.categoryId
  // The Query
  const q = query(collection(db, "categories"), where("url", "==", category))
  // Run the Query
  const querySnapshot = await getDocs(q)
  // What Category was Clicked on
  const theCategory = querySnapshot.docs.map((doc) => {
    return { id: doc.id, data: doc.data() }
  })

  // console.log(theCategory)
  const postsList = theCategory.map((doc) => {
    return doc.data.posts
  })

  if (postsList) {
    return {
      props: {
        postsList: postsList,
      },
    }
  } else {
    return {
      props: {
        postsList: null,
      },
    }
  }
}
