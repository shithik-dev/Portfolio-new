import LoadingScreen from "./components/LoadingScreen";
import ScrollProgress from "./components/ScrollProgress";
import CustomCursor from "./components/CustomCursor";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";

import VideoIntro from "./components/VideoIntro";
import FeaturedWork from "./components/FeaturedWork";

import VideoShowcase from "./components/VideoShowcase";
import TransitionSection from "./components/TransitionSection";
import Process from "./components/Process";

import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <CustomCursor />

      <Navbar />

      <main>
        {/* 01 — HERO */}
        <Hero />

        {/* 02 — CREATIVE MARQUEE */}
        <Marquee />

        {/* 03 — WHAT IS GRAPHIC DESIGN? */}
        <VideoIntro />

        {/* 04 — SELECTED WORK */}
        <FeaturedWork />

        {/* 05 — VIDEO EDITING */}
        <VideoShowcase />

        {/* 06 — TRANSITION */}
        <TransitionSection />

        {/* 07 — ABOUT */}
        <About />

        {/* 08 — SERVICES */}
        <Services />
        {/* 09 — SKILLS / TOOLKIT */}
        <Skills />
        {/* 10 — PROCESS */}
        <Process />
      </main>
    </>
  );
}

export default App;