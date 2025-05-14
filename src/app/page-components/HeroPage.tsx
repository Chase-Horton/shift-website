import Image from "next/image";

export const Hero = () =>
(
    <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="fixed inset-0 -z-10">
            <Image
            src="/images/orange-lamborghini.jpg"
            alt="Luxurious Lamborghini showcased in an elegant modern garage"
            fill
            className="object-cover"
            priority
            />
            {/* Optional dark overlay */}
            <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Centered Logo */}
        <div className="flex items-center justify-center h-full">
            <Image
                src="/images/Shift-Logo-Tertiary.png" 
                alt="Shift Auto Society Logo"
                width={400}
                height={400}
                className="object-contain drop-shadow-lg"
            />
        </div>

        {/* Placeholder */}
        <div className="absolute bottom-4 w-full text-center text-white text-sm opacity-80 animate-bounce">
            Scroll Down ↓
        </div>
    </section>
)