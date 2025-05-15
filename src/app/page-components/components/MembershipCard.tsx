import { Open_Sans } from "next/font/google"
const openSans = Open_Sans({subsets: ["latin"]})
export const MembershipCard = ({nameShort, description, price, lis}: {nameShort:string, description:string, price:number, lis:string[]}) => (
    <div className={`rounded-lg max-w-xs overflow-hidden shadow-lg bg-white ${openSans.className}`}>
        <div className="flex flex-col items-center bg-gray-400 px-4 py-3 text-white">
            <h2 className="text-3xl font-[370] capitalize">{nameShort}</h2>
            <p className="text-sm">{description}</p>
        </div>
        <div className="flex flex-col items-center border-b border-gray-400">
            <p className="pt-4 pb-4"><span className="text-sm align-top">$</span><span className="text-5xl font-[300] text-shadow-lg text-shadow-gray-200">{price}</span>/month</p>
        </div>
        <div className="p-4">
            <ul className="text-sm space-y-2 text-gray-800 flex flex-col items-center">
                {lis.map((li, i)=>(
                    <li key={i} className="text-center list-disc list-inside text-blue-400 my-2">
                        <span className="text-gray-800">{li}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
)