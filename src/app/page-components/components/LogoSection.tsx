import { Open_Sans } from "next/font/google"
import * as motion from "motion/react-client"
const openSans = Open_Sans({
  subsets: ["latin"],
})
export const LogoSection = () => (
  <div className="relative z-10 bg-white text-black w-full py-8">
    <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl mx-auto px-4 md:gap-8">
      <div className="mb-6 md:mb-0">
        <motion.img
          src="./images/Shift-Logo-Primary.jpg"
          alt="Primary Shift Auto Society Logo"
          className="hidden md:block w-auto h-auto md:max-h-[330px] object-contain"
          viewport={{ once: true, amount: .4 }}
          whileInView="visible"
          initial="hidden"
          transition={{
            duration: .8
          }}
          variants={{
            hidden: { translateX: "-20%", opacity: 0 },
            visible: { translateX: 0, opacity: 1 },
          }}
        />
      </div>
      <div className={`w-full md:w-[40%] text-center md:text-left pl-4 pb-[10px] text-xl md:text-[24px] antialias font-[440] text-gray-700 ${openSans.className}`}>
        <motion.p
          className="text-center"
          viewport={{once: true, amount: .4}}
          whileInView="visible"
          initial="hidden"
          transition={{
            duration: .8
          }}
          variants={{
            hidden: {translateY: "50%", opacity:0},
            visible: {translateY: 0, opacity:1}
          }}
        >Shift is a member-driven, private country club for auto enthusiasts.</motion.p>
      </div>
    </div>
  </div>
)