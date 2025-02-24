"use client"
import { useState } from "react";
import { BobText } from "./components/BobText/BobText";

export default function Home() {
  // const [showBobText, setShowBobText] = useState(false);

  return (
    <div>
      <main>
        <div className="w-80 h-full border-black border-2 rounded-md hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white">
          <a href="" className="block cursor-pointer">
            <article className="w-full h-full">
              <figure className="w-full h-1/2 border-black border-b-2">
              </figure>
              <div className="px-6 py-5 text-left h-full">
                <p className="text-base mb-4">May 15th, 2023</p>
                <h1 className="text-[32px] mb-4">Neo Brutallism</h1>
                
                Bob: <BobText />
                
              </div>
            </article>
          </a>
        </div>
      </main>
      <footer>
      </footer>
    </div>
  );
}
