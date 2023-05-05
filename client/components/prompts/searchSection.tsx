import { FC, useState } from "react"

const SearchSection: FC = () => {
    const [showSaleFormat, setShowSeleFormat] = useState(false)
    const [showPrice, setShowPrice] = useState(false)
    const [showCollection, setShowCollection] = useState(false)
    const [showCategory, setShowCategory] = useState(false)


    return <div className="mt-[50px] bg-[#242627] h-[120px] rounded-[64px] grid grid-cols-4">
        <div onClick={() => setShowSeleFormat(true)} className="flex self-center justify-center items-center border-0 border-r-[1px] h-[60%] border-[#919293] cursor-pointer">
            <div className={showSaleFormat ? "bg-red-500 px-[32px] py-[8px]" : ''}>
                <div>Sale format</div>
                <div className="text-[#7b7c7c]">Choose format</div>
            </div>
        </div>
        <div className="flex self-center justify-center items-center border-0 border-r-[1px] h-[60%] border-[#919293] cursor-pointer">
            <div>
                <div>Price</div>
                <div className="text-[#7b7c7c]">Choose amount</div>
            </div>
        </div>
        <div className="flex self-center justify-center items-center border-0 border-r-[1px] h-[60%] border-[#919293] cursor-pointer">
            <div>
                <div>Collection</div>
                <div className="text-[#7b7c7c]">Choose Collection</div>
            </div>
        </div>
        <div className="flex self-center justify-center items-center cursor-pointer">
            <div>
                <div>Category</div>
                <div className="text-[#7b7c7c]">Choose Category</div>
            </div>
        </div>
    </div >
}
export default SearchSection