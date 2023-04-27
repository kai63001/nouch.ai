import { SectionCard } from "@/components/Home";
import { HeroSection } from "@/components/Home";
import Layout from "@/components/Layout";


// set up i18n
// paralax
const MOCK_POPULAR_PROMT = {
  title: 'Most Popular Prompts This Week',
  content: [
    {
      img: '/icon/bg-01.png',
      name: 'Sint duis ullamco magna est aliquip commodo laboris duis commodo culpa in id sunt.',
      author: 'Mikikung',
      model: 'Midjourney',
      price: '2.99'
    },
    {
      img: '/icon/bg-01.png',
      name: 'magna est aliquip commodo laboris duis commodo culpa in id sunt.',
      author: 'Romeo',
      model: 'Midjourney',
      price: '1.99'
    },
    {
      img: '/icon/bg-01.png',
      name: 'mcommodo laboris duis commodo culpa in id sunt.',
      author: 'Romeo',
      model: 'Midjourney',
      price: '1.89'
    },
    {
      img: '/icon/bg-01.png',
      name: 'mn id sunt.',
      author: 'albert',
      model: 'Midjourney',
      price: '3.99'
    },
    {
      img: '/icon/bg-01.png',
      name: 'in id sunt.',
      author: 'Copter',
      model: 'Midjourney',
      price: '0.99'
    },
    {
      img: '/icon/bg-01.png',
      name: 'Sint duis ullamco magna est aliquip commodo laboris duis commodo culpa in id sunt.',
      author: 'Mikikung',
      model: 'Midjourney',
      price: '2.99'
    },
    {
      img: '/icon/bg-01.png',
      name: 'magna est aliquip commodo laboris duis commodo culpa in id sunt.',
      author: 'Romeo',
      model: 'Midjourney',
      price: '1.99'
    },
    {
      img: '/icon/bg-01.png',
      name: 'mcommodo laboris duis commodo culpa in id sunt.',
      author: 'Romeo',
      model: 'Midjourney',
      price: '1.89'
    },
    {
      img: '/icon/bg-01.png',
      name: 'mn id sunt.',
      author: 'albert',
      model: 'Midjourney',
      price: '3.99'
    },
    {
      img: '/icon/bg-01.png',
      name: 'in id sunt.',
      author: 'Copter',
      model: 'Midjourney',
      price: '0.99'
    },
    {
      img: '/icon/bg-01.png',
      name: 'Sint duis ullamco magna est aliquip commodo laboris duis commodo culpa in id sunt.',
      author: 'Mikikung',
      model: 'Midjourney',
      price: '2.99'
    },
    {
      img: '/icon/bg-01.png',
      name: 'magna est aliquip commodo laboris duis commodo culpa in id sunt.',
      author: 'Romeo',
      model: 'Midjourney',
      price: '1.99'
    },
    {
      img: '/icon/bg-01.png',
      name: 'mcommodo laboris duis commodo culpa in id sunt.',
      author: 'Romeo',
      model: 'Midjourney',
      price: '1.89'
    },
    {
      img: '/icon/bg-01.png',
      name: 'mn id sunt.',
      author: 'albert',
      model: 'Midjourney',
      price: '3.99'
    },
    {
      img: '/icon/bg-01.png',
      name: 'in id sunt.',
      author: 'Copter',
      model: 'Midjourney',
      price: '0.99'
    },
  ]
}


export default function Home() {
  return (
    <div className="bg-[url('/icon/bg-01.png')] bg-no-repeat bg-cover w-full h-[100vh]">
      <Layout>
        <div>
          <HeroSection />
          <SectionCard />
        </div>
      </Layout>
    </div>
  );
}
