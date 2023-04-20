import Header from "./Header";
import LeftNevbar from "./LeftNavbar";

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
      <div className="flex">
        <LeftNevbar/>
        <div className="pl-14 md:pl-80 w-full">
        {props.children}
        </div>
      </div>

    </>
  );
};

export default Layout;
