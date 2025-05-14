import { ReactNode } from "react"
export const LogoSection = ({ children, href }: { children: ReactNode, href: string }) => (
   <section className="relative z-10 bg-white text-black w-full py-8">
    <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl mx-auto px-4">
      <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-6 md:mb-0 md:pr-8">
        <img
          src={href}
          alt="Primary Shift Auto Society Logo"
          className="w-auto h-auto hidden md:block md:max-h-[270px] object-contain"
        />
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left md:pl-8 text-xl md:text-2xl antialias font-medium text-gray-700">
        <p>{children}</p>
      </div>
    </div>
  </section>
)