import Classic from "@/components/Classic";
import Editor from "@/components/Editors";
import FeaturedPosts from "@/components/FeaturedPosts";
import Header from "@/components/Header";
import Herosection from "@/components/Hero";
import Neural from "@/components/Neural";
import FeaturedProducts from "@/components/Products";
import TopHeader from "@/components/Top";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <TopHeader/>
      <Header/>
      <Herosection />

      <Editor />
      <FeaturedProducts/>
      <Classic />
      <Neural />

      <FeaturedPosts />
    </div>
  );
}
