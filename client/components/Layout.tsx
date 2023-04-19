import Header from "./Header";
import LeftNevbar from "./LeftNavbar";

interface Layout {
  title?: string | undefined;
  des?: string | undefined;
  image?: string | undefined;
  children?: any | undefined;
}


const LayoutIndex = (props: Layout) => {
  return (
    <>
      <Header title={props.title} des={props.des} image={props.image} />
      <div className="flex">
        <LeftNevbar/>
      </div>

      {props.children}
    </>
  );
};

export default LayoutIndex;
