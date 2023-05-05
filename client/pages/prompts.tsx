import Layout from "@/components/Layout"
import { Dropdown, SearchSection } from "@/components/prompts"
import { MOCK_POPULAR_PROMT } from './mock'
import type { FC } from "react"
import { Card } from "@/components/Home"

const Prompt: FC = () => {
    return (
        <Layout>
            <div>
                <div className="flex justify-between items-center">
                    <div className="flex gap-[10px] ">
                        <h1 className="font-semibold text-[64px]">Explore</h1>
                        <div className="flex gap-[15px] mt-[30px]">
                            <div>550</div>
                            <div>items selected</div>
                        </div>
                    </div>
                    <Dropdown />
                </div>
                <SearchSection />
                <div className="mt-[150px] flex flex-wrap justify-between gap-[50px]">
                    {MOCK_POPULAR_PROMT.content.map((item) => {
                        return <Card content={item} />
                    })}
                </div>
            </div>
        </Layout>)
}

export default Prompt