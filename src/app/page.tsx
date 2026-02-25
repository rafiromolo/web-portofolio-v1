import Home from "./pages/home";
import Divider from "./components/divider";
import AboutMe from "./components/home/about-me";
import FeaturedWork from "./components/home/featured-work";

export default function Page() {
  return (
    <main>
      <Home />
      <Divider />
      <AboutMe />
      <Divider />
      <FeaturedWork />
      <Divider />
    </main>
  );
}
