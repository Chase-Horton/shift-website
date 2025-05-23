import Image from "next/image"
export const SplashSection = () => 
(
  <div className="relative h-screen w-full overflow-hidden">
    {/* Background Image */}
    <div className="fixed inset-0 -z-10">
      <Image
        src="/images/orange-lamborghini.jpg"
        alt="Luxurious Lamborghini showcased in an elegant modern garage"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
    </div>

    {/* Centered Logo */}
    <div className="flex items-center justify-center h-full">
      <Image
        src="/images/Shift-Logo-Tertiary.png"
        alt="Shift Auto Society Logo with Transparent Background"
        width={400}
        height={400}
        className="object-contain drop-shadow-lg w-[80%] md:max-w-[400px] max-w-[250px]"
        priority
      />
    </div>

    {/* Chevron */}
    <div className="absolute bottom-4 w-full text-center text-white text-sm opacity-80 animate-bounce">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2.5"
        stroke="currentColor"
        className="w-8 h-8 mx-auto"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
      </svg>
    </div>
    {/* black background */}
    <div className="absolute inset-0 bg-black animate-fade" />
  </div>
)