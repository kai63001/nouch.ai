import { useRouter } from "next/router";
import ReactModal from "react-modal";
import CreatePrompt from "../popup/modal/createPrompt.modal";
import Link from "next/link";

const RightMenu = () => {
  const router = useRouter();
  return (
    <div>
      <Link
        href={"?createPrompt=true"}
        as="/create-prompt"
        className="flex items-center text-lg text-white bg-gradient-to-r from-cyan-500 to-blue-500 w-full rounded-md md:px-9 md:py-3 py-1 md:space-x-3 justify-center"
      >
        Create a New Propmt
      </Link>
      <ReactModal
        isOpen={!!router.query.createPrompt}
        onRequestClose={() => router.push(router.pathname)}
        ariaHideApp={false}
        overlayClassName={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-10 flex items-center justify-center overflow-y-auto`}
        className="bg-black w-11/12 md:w-5/12 rounded-xl shadow-lg px-14 py-10 duration-200 items-center"
      >
        <CreatePrompt />
      </ReactModal>
    </div>
  );
};

export default RightMenu;
