import Image from "next/image";
import { Rubik } from "next/font/google";
import Link from "next/link";

import dynamic from "next/dynamic";
import { useState } from "react";
import { useRouter } from "next/router";
// const Modal = dynamic(() => import("react-modal"), { ssr: false });
import Modal from "react-modal";
import { signOut, useSession } from "next-auth/react";
const SiginModal = dynamic(() => import("./popup/modal/signin.modal"), {
  ssr: false,
});

const rubik = Rubik({
  weight: "800",
  subsets: ["cyrillic"],
});
const LeftNevbar = () => {
  const { data: session }: any = useSession();
  const router = useRouter();

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
          {session ? (
            <>
              <div className="bg-secondary rounded-md p-3 md:flex flex-col space-y-2 hidden">
                {/* profile */}
                <div className="bg-primary rounded-md p-3 flex space-x-2 items-center">
                  <div className="rounded-full w-[50px] h-[50px]">
                    <Image
                      src={session?.user?.image ?? "/icon/favicon.png"}
                      className="rounded-full object-cover bg-blue-500"
                      width={50}
                      height={50}
                      alt={""}
                    />
                  </div>
                  <div className="items-center">
                    <div className="text-white text-sm">
                      {session?.user?.name}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {session?.user?.email}
                    </div>
                  </div>
                </div>
                <div
                  className="cursor-pointer flex items-center text-white hover:bg-gray-600 duration-150 border-gray-600 border-2 w-full rounded-md md:px-9 md:py-3 py-1 md:space-x-3 justify-center"
                  onClick={() => signOut()}
                >
                  <Image
                    src="/icon/logout2.png"
                    width={25}
                    height={25}
                    alt="logout image"
                  />
                  <span className="">Log out</span>
                </div>
              </div>
              <div className=" rounded-md md:hidden flex flex-col space-y-4">
                <div className="rounded-full w-[35px] h-[35px]">
                  <Image
                    src={session?.user?.image ?? "/icon/favicon.png"}
                    className="rounded-full object-cover bg-blue-500"
                    width={35}
                    height={35}
                    alt={""}
                  />
                </div>
                <div className="cursor-pointer flex items-center text-white bg-gray-600 duration-150 border-gray-600 border-2 w-full rounded-md md:px-9 md:py-3 py-1 md:space-x-3 justify-center">
                  <Image
                    src="/icon/logout2.png"
                    width={25}
                    height={25}
                    alt="logout image"
                  />
                </div>
              </div>
            </>
          ) : (
            <Link
              className="cursor-pointer flex items-center text-white hover:bg-secondary duration-150 border-secondary border-2 w-full rounded-md md:px-9 md:py-3 py-1 md:space-x-3 justify-center md:justify-start"
              href={"?login=true"}
              as={"/login"}
            >
              <Image
                src="/icon/login.png"
                width={25}
                height={25}
                alt="login image"
              />
              <span className="hidden md:inline">Sign in</span>
            </Link>
          )}
        </div>
      </div>
      <Modal
        isOpen={!!router.query.login}
        onRequestClose={() => router.push(router.pathname)}
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
