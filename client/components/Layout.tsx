import { Quicksand } from "next/font/google";
import Header from "./Header";

import dynamic from "next/dynamic";
import Footer from "./Footer";
const Navbar = dynamic(() => import("./Navbar"), { ssr: false });

interface Layout {
  title?: string | undefined;
  des?: string | undefined;
  image?: string | undefined;
  children?: JSX.Element;
  disableMax?: boolean | undefined;
}

const quicksand = Quicksand({
  weight: ["400","600"],
  subsets: ["latin"],
});

const Layout = (props: Layout) => {
  return (
    <>
      <Header title={props.title} des={props.des} image={props.image} />
      <Navbar />
      <main className={`${props.disableMax ?? ('max-w-[1800px] mx-auto mt-3 px-2 xs:px-0')} ${quicksand.className}`}>
        {props.children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
