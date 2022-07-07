import { collection, getDocs, query, where } from "firebase/firestore"
import PostSection from "../../../../components/5-PostPageComps/1-postSection"
import RelatedArticles from "../../../../components/5-PostPageComps/2-relatedArticlesSection"
import { db } from "../../../../firebase/firebase_config"

const PostPage = ({ post, posts }) => {
  return (
    <>
      {/* Post Section with Sidebar */}
      <PostSection post={post} posts={posts} />
      {/* Related Articles */}
      <RelatedArticles RelatedArticles={RelatedArticles} />
    </>
  )
}

export default PostPage

export const getServerSideProps = async ({ params }) => {
  const q = query(
    collection(db, "categories"),
    where("url", "==", params.category)
  )

  const querySnapShot = await getDocs(q)

  let categoryResult = {}
  let postObj = {}
  let posts = []

  querySnapShot.forEach((doc) => {
    categoryResult = { ...doc.data() }
  })

  categoryResult.posts.forEach((post) => {
    if (params.post === post.slug) {
      postObj = post
    }

    posts.push(post)
  })

  return {
    props: {
      post: postObj,
      posts: posts,
    },
  }
}
