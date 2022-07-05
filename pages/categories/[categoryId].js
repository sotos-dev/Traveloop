const CategoryPage = () => {
  return (
    <>
      <div>Category Page</div>
      <p></p>
    </>
  )
}

export default CategoryPage

export const getStaticPaths = async ({ params }) => {
  console.log(params)

  return {
    props: {
      test: params,
    },
  }
}
