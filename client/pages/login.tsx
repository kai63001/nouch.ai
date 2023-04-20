import Layout from "@/components/Layout";
import SiginModal from "@/components/popup/modal/signin.modal";
const Login = () => {
  return (
    <Layout>
      <div className="flex w-full h-full">
        <div className="m-auto translate-y-2/3 bg-primary px-10 py-10 rounded-md">
          <SiginModal />
        </div>
      </div>
    </Layout>
  );
};

export default Login;
