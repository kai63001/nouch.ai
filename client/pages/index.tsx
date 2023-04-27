import { SectionCard } from "@/components/Home";
import { HeroSection } from "@/components/Home";
import Layout from "@/components/Layout";
import { MOCK_CHATGPT_PROMT, MOCK_POPULAR_PROMT } from './mock'
import PrototypeSection from "@/components/Home/PrototypeSection";


// set up i18n
// paralax


export default function Home() {
  return (
    <div className="bg-[url('/icon/bg-01.png')] bg-no-repeat bg-cover w-full h-[100vh]">
      <Layout>
        <div>
          <HeroSection />
          <div className="mx-[80px]">
            <div className="mt-24">
              <SectionCard title={MOCK_POPULAR_PROMT.title} content={MOCK_POPULAR_PROMT.content} />
            </div>
            <div className="mt-24">
              <SectionCard title={MOCK_CHATGPT_PROMT.title} content={MOCK_CHATGPT_PROMT.content} />
            </div>
            <div className="mt-24">
              <PrototypeSection title={MOCK_POPULAR_PROMT.title} content={MOCK_POPULAR_PROMT.content} />
            </div>
            <div className="mt-24">
              <SectionCard title={MOCK_POPULAR_PROMT.title} content={MOCK_POPULAR_PROMT.content} />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
