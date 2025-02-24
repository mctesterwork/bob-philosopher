"use client"
import { BobText } from "./components/BobText/BobText";

export default function Home() {

  return (
    <>
      <main className="w-full h-full">
        <div className="w-80 h-full border-black border-2 rounded-md hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white">
          <a href="" className="block cursor-pointer">
            <article className="w-full h-full">
              <figure className="w-full h-1/2 border-black border-b-2">
              </figure>
              <div className="px-6 py-5 text-left h-full">
                <p className="text-base mb-4">{Date.now().toString()}</p>
                <h1 className="text-[32px] mb-4">Bob`s shower thoughts</h1>
                <BobText />
              </div>
            </article>
          </a>
        </div>
      </main>
      <footer>
      </footer>
    </>
  );
}