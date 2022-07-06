import { useRouter } from "next/router"

const PostPage = () => {
  return (
    <>
      <div>Post Page</div>
    </>
  )
}

export default PostPage

export const getStaticProps = async ({ params }) => {
  const post = params.post

  console.log(params)

  return {
    props: {
      data: null,
    },
  }
}

export const getStaticPaths = async () => {
  const querySnap = await getDocs(collection(db, "categories"))

  //   console.log(params)

  return {
    props: {
      data: null,
    },
  }
}
