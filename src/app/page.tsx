import Navigation from "./components/navigation";
import VideoBackground from "./components/video-background";
import Partnership from "./components/partnership";
import Discount from "./components/discount";
import Carousel from "./components/caroussel";
import Icons from "./components/icons";
import Numbers from "./components/numbers";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <header className="bg-gradient-to-t from-blue-500 to-blue-900 min-h-screen">
        <VideoBackground />
      </header>
      <main className="pb-10">
        <Partnership />
        <Discount />
        <div className="container mx-auto"><Carousel /></div>
        <div className="container mx-auto"><Icons /></div>
        <Numbers />
        <Footer />
      </main>
    </>
  );
}
