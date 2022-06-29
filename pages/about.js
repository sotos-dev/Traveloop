import HeroSection from "../components/2-AboutPageComps/1-heroSection"
import BlogWriters from "../components/2-AboutPageComps/2-blogWritersSection"
import AboutTraveloop from "../components/2-AboutPageComps/3-aboutTraveloopSection"
import WhyTraveloop from "../components/2-AboutPageComps/4-whyTraveloopSection"
import GetInTouch from "../components/2-AboutPageComps/5-getInTouch"

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      {/* Blog Writers */}
      <BlogWriters />
      {/* About Traveloop */}
      <AboutTraveloop />
      {/* Why Traveloop */}
      <WhyTraveloop />
      {/* Get In Touch */}
      <GetInTouch />
    </>
  )
}

export default About
