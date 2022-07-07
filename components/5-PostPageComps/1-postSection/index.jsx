import HeroSection from "./HeroSection"
import PostBody from "./PostBody"
import Sidebar from "./Sidebar"
import Container from "../../../ui/container/Container"
import styles from "./index.module.scss"

const PostSection = ({ post, posts, categories }) => {
  return (
    <>
      <section className={styles.postSection}>
        <Container>
          <div className={styles.postSectionWrapper}>
            {/* Post Hero Section Comp */}
            <HeroSection post={post} />
            {/* Grid */}
            <div className={styles.grid}>
              {/* Post Body Section Comp */}
              <PostBody post={post} />
              {/* Sidebar Section */}
              <Sidebar posts={posts} categories={categories} />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default PostSection
