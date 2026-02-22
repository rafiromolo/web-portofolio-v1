import Home from "./pages/home";
import Divider from "./components/divider";
import AboutMe from "./components/home/about-me";

export default function Page() {
  return (
    <main>
      <Home />
      <Divider />
      <AboutMe />
      <Divider />
    </main>
  );
}
