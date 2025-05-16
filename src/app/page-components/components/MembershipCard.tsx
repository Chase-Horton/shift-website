"use client"
import { motion } from "motion/react"
import { useState } from "react"
export const MembershipCard = ({ nameShort, description, price, lis }: { nameShort: string, description: string, price: number, lis: string[] }) => {
    const [, setIsHovered] = useState(false)
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 70,
                damping: 12,
                when: "beforeChildren",
                staggerChildren: 0.07,
                duration:0
            },
        },
        hover: {
            scale: (1.05),
            boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)",
            transition: {
                type: "spring", stiffness: 300, damping: 20,
                when: "beforeChildren",
            }
        },
    }
    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
            },
        },
    }
    return (
        <motion.div
            className={`rounded-lg max-w-xs h-full overflow-hidden shadow-lg bg-white`
            }
            transition={{ duration: 0.5 }
            }
            viewport={{ once: true }}
            whileInView="visible"
            initial="hidden"
            layout
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            variants={cardVariants}
            whileHover="hover"
        >
            <motion.div className="flex flex-col items-center bg-gray-400 px-4 py-3 text-white">
                <h2 className="text-3xl font-[370] capitalize">{nameShort}</h2>
                <p className="text-sm">{description}</p>
            </motion.div>
            <motion.div variants={itemVariants} className="flex flex-col items-center border-b border-gray-400">
                <p className="pt-4 pb-4"><span className="text-sm align-top">$</span><span className="text-5xl font-[300] text-shadow-lg text-shadow-gray-200">{price}</span>/month</p>
            </motion.div>
            <div className="p-4">
                <ul
                    className="text-sm space-y-2 text-gray-800 flex flex-col items-center">
                    {lis.map((li, i) => (
                        <motion.li
                            key={i}
                            layout
                            className="text-center list-disc list-inside text-blue-400 my-2"
                            variants={itemVariants}
                        >
                            <motion.span className="text-gray-800">{li}</motion.span>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </motion.div >
    )
}