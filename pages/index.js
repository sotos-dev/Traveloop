import HeroSection from "../components/1-HomePageComps/1-heroSection/Index"
import RecentArticlesSection from "../components/1-HomePageComps/2-recentArticlesSection/Index"
import MoreArticlesSection from "../components/1-HomePageComps/3-moreArticlesSection/Index"
import MagazineSection from "../components/1-HomePageComps/4-magazineSection/Index"

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
