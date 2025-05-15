import Image from "next/image";
import { LogoSection } from "./components/LogoSection";
import { MembershipSection } from "./components/MembershipsSection";
import { ContactForm} from "./components/ContactSection";
import { MapSection } from "./components/MapSection";
import { SplashSection } from "./components/SplashSection";

export const Hero = () => {
    return (
        <>
            <SplashSection />
            <LogoSection />
            <MembershipSection />
            <ContactForm />
            <MapSection />
        </>
    )
}