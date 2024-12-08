import Classic from "@/components/Classic";
import Editor from "@/components/Editors";
import FeaturedPosts from "@/components/FeaturedPosts";
import Herosection from "@/components/Hero";
import Neural from "@/components/Neural";
import FeaturedProducts from "@/components/Products";

export default function Home() {
  return (
    <div>
      <Herosection />

      <Editor />
      <FeaturedProducts/>
      <Classic />
      <Neural />

      <FeaturedPosts />
    </div>
  );
}
