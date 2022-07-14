import { collection, getDocs, query, where } from "firebase/firestore"
import PostSection from "../../../../components/5-PostPageComps/1-postSection"
import { db } from "../../../../firebase/firebase_config"

const PostPage = ({ post, posts, categories, categoryUrl, postUrl }) => {
  return (
    <>
      {/* Post Section with Sidebar */}
      <PostSection
        post={post}
        posts={posts}
        categories={categories}
        categoryUrl={categoryUrl}
        postUrl={postUrl}
      />
    </>
  )
}

export default PostPage

export const getServerSideProps = async ({ params }) => {
  console.log(params.category)

  // Initializations
  let travelCategories = []
  let categoryResult = {}
  // Get all the travel categories
  const categories = await getDocs(collection(db, "categories"))
  categories.forEach((category) => {
    travelCategories.push({
      id: category.id,
      data: category.data(),
    })
  })

  // Create query to get a single category based on the Next's params object - params.category where params is the url object and category is the name of the dynamic route/folder/file
  const q = query(
    collection(db, "categories"),
    where("url", "==", params.category)
  )
  // Run the above query
  const querySnapShot = await getDocs(q)

  // Initializations to get one post from the category above
  let singlePost = {}
  let posts = []
  // Get ategory's data
  querySnapShot.forEach((doc) => {
    categoryResult = { ...doc.data() }
  })
  // Get a Particular Post using the params object again there is the slug property that's a field in every post in firestore
  categoryResult.posts.forEach((post) => {
    if (params.post === post.slug) {
      singlePost = post
    }
    // Also get all posts from this category
    posts.push(post)
  })

  return {
    props: {
      post: singlePost,
      posts: posts,
      categories: travelCategories,
    },
  }
}
