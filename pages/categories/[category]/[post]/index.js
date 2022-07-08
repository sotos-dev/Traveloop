import { collection, getDocs, query, where } from "firebase/firestore"
import PostSection from "../../../../components/5-PostPageComps/1-postSection"
import RelatedArticles from "../../../../components/5-PostPageComps/2-relatedArticlesSection"
import { db } from "../../../../firebase/firebase_config"

const PostPage = ({ post, posts, categories }) => {
  return (
    <>
      {/* Post Section with Sidebar */}
      <PostSection post={post} posts={posts} categories={categories} />
      {/* Related Articles */}
      <RelatedArticles RelatedArticles={RelatedArticles} />
    </>
  )
}

export default PostPage

export const getServerSideProps = async ({ params }) => {
  // Initializations
  let topics = []
  // Get Categories
  const categories = await getDocs(collection(db, "categories"))
  categories.forEach((category) => {
    topics.push({
      id: category.id,
      data: category.data(),
    })
  })

  // Create Query to get a single Category
  const q = query(
    collection(db, "categories"),
    where("url", "==", params.category)
  )
  // Get the Category
  const querySnapShot = await getDocs(q)

  let categoryResult = {}
  let singlePost = {}
  let posts = []
  // Get Category's Data
  querySnapShot.forEach((doc) => {
    categoryResult = { ...doc.data() }
  })
  // Get Particular Post
  categoryResult.posts.forEach((post) => {
    if (params.post === post.slug) {
      singlePost = post
    }
    // Also get All Posts from this category
    posts.push(post)
  })

  console.log(topics)

  return {
    props: {
      post: singlePost,
      posts: posts,
      categories: topics,
    },
  }
}
