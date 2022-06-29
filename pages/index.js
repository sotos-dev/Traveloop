import HeroSection from "../components/1-HomePageComps/1-heroSection"
import RecentArticlesSection from "../components/1-HomePageComps/2-recentArticlesSection"
import MoreArticlesSection from "../components/1-HomePageComps/3-moreArticlesSection"
import MagazineSection from "../components/1-HomePageComps/4-magazineSection"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      {/* Recent Articles Section */}
      <RecentArticlesSection />
      {/* MoreArticlesSection */}
      <MoreArticlesSection />
      {/* Magazine Section */}
      <MagazineSection />
    </>
  )
}
