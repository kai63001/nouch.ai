import { Quicksand } from "next/font/google";
import Header from "./Header";
import LeftNevbar from "./LeftNavbar";
import Navbar from "./Navbar";

interface Layout {
  title?: string | undefined;
  des?: string | undefined;
  image?: string | undefined;
  children?: JSX.Element;
}

const quicksand = Quicksand({
  weight: "400",
  subsets: ["latin"],
});

const Layout = (props: Layout) => {
  return (
    <>
      <Header title={props.title} des={props.des} image={props.image} />
      <Navbar />
      <main className={`max-w-[1800px] mx-auto mt-3 px-2 xs:px-0 ${quicksand.className}`}>
        {props.children}
      </main>
    </>
  );
};

export default Layout;
