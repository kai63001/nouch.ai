import Header from "./Header";
import LeftNevbar from "./LeftNavbar";
import Navbar from "./Navbar";

interface Layout {
  title?: string | undefined;
  des?: string | undefined;
  image?: string | undefined;
  children?: any | undefined;
}

const Layout = (props: Layout) => {
  return (
    <>
      <Header title={props.title} des={props.des} image={props.image} />
      <Navbar />
      <div className="max-w-[1800px] mx-auto mt-3 px-2 xs:px-0">
        {props.children}
      </div>
    </>
  );
};

export default Layout;
