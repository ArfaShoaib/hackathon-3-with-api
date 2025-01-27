import Classic from "@/components/Classic";
import FashionPage from "@/components/Combine";
import FeaturedPosts from "@/components/FeaturedPosts";
import Header from "@/components/Header";
import Herosection from "@/components/Hero";
import Neural from "@/components/Neural";
import TopHeader from "@/components/Top";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <TopHeader/>
      <Header/>
      <Herosection />
     
      <FashionPage />
      <Classic />
      <Neural />

      <FeaturedPosts />
    </div>
  );
}
