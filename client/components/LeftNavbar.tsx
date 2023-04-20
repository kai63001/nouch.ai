import Image from "next/image";
import { Rubik } from "next/font/google";
import Link from "next/link";

import dynamic from "next/dynamic";
import { useState } from "react";
import { useRouter } from "next/router";
// const Modal = dynamic(() => import("react-modal"), { ssr: false });
import Modal from "react-modal";
const SiginModal = dynamic(() => import("./popup/modal/signin.modal"), {
  ssr: false,
});

const rubik = Rubik({
  weight: "800",
  subsets: ["cyrillic"],
});
const LeftNevbar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const openLogin = () => {
    console.log("open login");
    setOpen(true);
  };

  return (
    <nav className="h-screen fixed bg-primary w-14 md:w-80 px-3 md:px-5 py-5 flex flex-col justify-between">
      <div className="flex flex-col">
        <div className="flex space-x-2 items-center justify-start">
          <Image
            src="/icon/favicon.png"
            width={35}
            height={35}
            alt="Nouch Logo"
          />
          <div className={`text-3xl ${rubik.className} hidden md:inline`}>
            Nouch
          </div>
        </div>
        <div className="flex flex-col mt-10">
          <Link
            href="/"
            className="flex items-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 w-full rounded-md md:px-9 md:py-3 py-1 md:space-x-3 justify-center md:justify-start"
          >
            <Image src="/icon/cmd.png" width={25} height={25} alt="Prompt" />
            <span className="hidden md:inline">Prompts</span>
          </Link>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col mt-10">
          <Link
            className="cursor-pointer flex items-center text-white hover:bg-secondary duration-150 border-secondary border-2 w-full rounded-md md:px-9 md:py-3 py-1 md:space-x-3 justify-center md:justify-start"
            href={"/?singin=true"}
            as={"/signin"}
            onClick={openLogin}
          >
            <Image
              src="/icon/login.png"
              width={25}
              height={25}
              alt="login image"
            />
            <span className="hidden md:inline">Sign in</span>
          </Link>
        </div>
      </div>
      <Modal
        isOpen={!!router.query.singin}
        onRequestClose={() => router.push("/")}
        ariaHideApp={false}
        overlayClassName={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-50 flex items-center justify-center`}
        className="bg-primary w-11/12 md:w-5/12 rounded-xl shadow-lg px-14 py-10 duration-200 items-center"
      >
        <SiginModal />
      </Modal>
    </nav>
  );
};

export default LeftNevbar;
