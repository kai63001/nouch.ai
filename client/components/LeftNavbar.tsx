import Image from "next/image"
import { Rubik } from "next/font/google";

const rubik = Rubik({
  weight: "800",
  subsets: ["cyrillic"],
});
const LeftNevbar = () => {
    return (
        <nav className="h-screen fixed bg-primary w-14 sm:w-80 px-3 sm:px-5 py-5">
          <div className="flex flex-col">
            <div className="flex space-x-2 items-center justify-start">
                <Image src="/icon/favicon.png" width={35} height={35} alt="Nouch Logo" />
              <div className={`text-3xl ${rubik.className} hidden sm:inline`}>Nouch</div>
            </div>
            <div className="flex flex-col mt-10">
              <a href="/" className="flex items-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 w-full rounded-md sm:px-9 sm:py-3 py-1 sm:space-x-3 justify-center sm:justify-start">
                <Image src="/icon/cmd.png" width={25} height={25} alt="Prompt" />
                <span className="hidden sm:inline">Prompts</span>
              </a>
            </div>
          </div>
        </nav>
    )
}

export default LeftNevbar