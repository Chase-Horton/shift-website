export const MembershipCard = ({nameShort, description, price, lis}: {nameShort:string, description:string, price:number, lis:string[]}) => (
    <div className="rounded-lg max-w-xs overflow-hidden shadow-lg">
        <div className="flex flex-col items-center bg-gray-400 px-4 py-3 text-white">
            <h2 className="text-2xl font-medium">{nameShort}</h2>
            <p className="text-xs">{description}</p>
        </div>
        <div className="flex flex-col items-center border-b border-gray-600">
            <p className="pt-4 pb-4"><span className="text-sm align-top">$</span><span className="text-4xl font-light">{price}</span>/month</p>
        </div>
        <div className="p-4">
            <ul className="text-sm space-y-2 text-gray-800 flex flex-col items-center">
                {lis.map((li, i)=>(
                    <li key={i} className="list-disc list-inside text-blue-400">
                        <span className="text-xs text-gray-800">{li}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
)