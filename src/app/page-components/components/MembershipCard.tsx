import * as motion from "motion/react-client"
export const MembershipCard = ({ nameShort, description, price, lis }: { nameShort: string, description: string, price: number, lis: string[] }) => (
    <motion.div
        className={`rounded-lg max-w-xs h-full overflow-hidden shadow-lg bg-white`}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        whileInView="visible"
        initial="hidden"
        variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { 
                opacity: 1, 
                y: 0,
                transition: {
                    duration: 0,
                    when: "beforeChildren",
                    staggerChildren: 0.1
                }
            },
        }}
    >
        <div className="flex flex-col items-center bg-gray-400 px-4 py-3 text-white">
            <h2 className="text-3xl font-[370] capitalize">{nameShort}</h2>
            <p className="text-sm">{description}</p>
        </div>
        <div className="flex flex-col items-center border-b border-gray-400">
            <p className="pt-4 pb-4"><span className="text-sm align-top">$</span><span className="text-5xl font-[300] text-shadow-lg text-shadow-gray-200">{price}</span>/month</p>
        </div>
        <div className="p-4">
            <ul className="text-sm space-y-2 text-gray-800 flex flex-col items-center">
                {lis.map((li, i) => (
                    <motion.li
                        key={i}
                        className="text-center list-disc list-inside text-blue-400 my-2"
                        variants={{
                            hidden: { opacity: 0, x: -20 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
                        <span className="text-gray-800">{li}</span>
                    </motion.li>
                ))}
            </ul>
        </div>
    </motion.div>
)