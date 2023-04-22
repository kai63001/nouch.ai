import Layout from "@/components/Layout";
import RightMenu from "@/components/prompts/rightMenu";

export default function Home() {
  return (
    <Layout>
      <div className="px-24 py-6">
        <h1 className="text-4xl mb-5">Awesome Free AI Prompts</h1>
        <div className="flex flex-col md:flex-row md:space-x-10 md:space-y-0 space-y-5">
          <div className="flex-auto w-full md:basis-3/5">
            {/* card */}
            asd
          </div>
          <div className="flex-auto w-full md:w-28">
            <RightMenu />
          </div>
        </div>
      </div>
    </Layout>
  );
}
