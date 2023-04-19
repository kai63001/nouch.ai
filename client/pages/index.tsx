import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row">
        <div className="flex-auto w-full md:w-64">02</div>
        <div className="flex-auto w-full md:w-32">03</div>
      </div>
    </Layout>
  );
}
