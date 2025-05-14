import { ReactNode } from "react"
import { Open_Sans } from "next/font/google"
const openSans = Open_Sans({
  subsets: ["latin"],
})
export const LogoSection = ({ children, href }: { children: ReactNode, href: string }) => (
   <section className="relative z-10 bg-white text-black w-full py-8">
    <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl mx-auto px-4 md:gap-8">
      <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-6 md:mb-0">
        <img
          src={href}
          alt="Primary Shift Auto Society Logo"
          className="hidden md:block w-auto h-auto md:max-h-[340px] object-contain"
        />
      </div>
      <div className={`w-full md:w-[40%] text-center md:text-left md:pl-8 text-xl md:text-2xl antialias font-[460] text-gray-700 ${openSans.className}`}>
        <p className="text-center">{children}</p>
      </div>
    </div>
  </section>
)