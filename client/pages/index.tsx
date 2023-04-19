import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="px-10 py-10">
        <h1 className="text-4xl mb-5">Awesome ChatGPT or AI Prompts</h1>
        <div className="flex flex-col md:flex-row md:space-x-10 ">
          <div className="flex-auto w-full md:basis-1/2 bg-primary">02</div>
          <div className="flex-auto w-full md:w-20 bg-primary">03</div>
        </div>
      </div>
    </Layout>
  );
}
