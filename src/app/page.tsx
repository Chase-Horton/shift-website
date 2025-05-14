import Image from "next/image";
import {Hero} from "./page-components/HeroPage"

export default function Home() {
  return (
    <>
    <Hero />
    <section className="relative z-10 bg-white text-black py-32 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-4xl font-bold">Welcome to the Site</h1>
          <p className="text-lg">
            Here's some scrollable content that appears to slide over the hero background.
          </p>
          <p className="text-sm text-gray-600">
            Add more sections below for a complete scroll effect.
          </p>
        </div>
      </section>
      <section className="h-[100vh] bg-gray-100" />
    </>
  );
}
