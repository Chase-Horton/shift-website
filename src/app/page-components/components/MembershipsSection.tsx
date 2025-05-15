import { MembershipCard } from "./MembershipCard";
import * as motion from "motion/react-client"
export const MembershipSection = () => {
    let key = 0
    const cards = [
        {
            nameShort: "SOCIAL",
            description: 'Social Membership',
            price: 75,
            lis: [
                'Waitlist for Storage Membership',
                '24x7 Access to Shift Auto Society - 1 keyfob',
                'Membership Card',
                'Clubhouse Access',
                'Conference Room Usage',
                'Social Events',
                'Education Events',
                'Discounts from partners',
                'Bicycle Storage'
            ]
        },
        {
            nameShort: 'MOTO',
            description: 'Motorcycle Storage',
            price: 150,
            lis: [
                'Storage for 1 Motorcycle',
                'Full Access to Motorcycle Lift',
                'Full Access to Indoor Wash Bay',
                '24x7 Access to Shift Auto Society - 1 keyfob, 1 Parking Pass',
                'Security Camera Access',
                'Social Membership with Card',
                'Clubhouse Access',
                'Conference Room Usage',
                'Social Events',
                'Education Events',
                'Discounts from partners',
                'Bicycle Storage'
            ]
        },
        {
            nameShort: 'SINGLE AUTO',
            description: 'Underground Storage',
            price: 275,
            lis: [
                'Storage for one vehicle in underground garage',
                'Full Access to 2-Post Repair Lift',
                'Full Access to Indoor Wash Bay',
                '24x7 Access to Shift Auto Society - 1 keyfob, 1 Parking Pass',
                'Security Camera Access',
                'Social Membership with Card',
                'Clubhouse Access',
                'Conference Room Usage',
                'Social Events',
                'Education Events',
                'Discounts from partners',
                'Bicycle Storage'
            ]
        },
        {
            nameShort: '2 AUTO',
            description: '4-Post Lifted Storage',
            price: 425,
            lis: [
                'Storage for 2 Autos on a 4-Post Lift',
                'Full Access to 2-Post Repair Lift',
                'Full Access to Indoor Wash Bay',
                '24x7 Access to Shift Auto Society - 1 keyfob, 2 Parking Passes',
                'Security Camera Access',
                'Social Membership with Card',
                'Clubhouse Access',
                'Conference Room Usage',
                'Social Events',
                'Education Events',
                'Discounts from partners',
                'Bicycle Storage'
            ]
        },
        {
            nameShort: '2 AUTO BUDDY',
            description: 'Shared 4-Post Lifted Storage',
            price: 500,
            lis: [
                'Storage for 2 Autos on a 4-Post Lift with friend',
                'Full Access to 2-Post Repair Lift',
                'Full Access to Indoor Wash Bay',
                '24x7 Access to Shift Auto Society - 1 keyfob, 2 Parking Passes',
                'Security Camera Access',
                'Social Membership with Card',
                'Clubhouse Access',
                'Conference Room Usage',
                'Social Events',
                'Education Events',
                'Discounts from partners',
                'Bicycle Storage'
            ]
        },
    ]
    return (
        <div className="bg-red-500 py-8">
            <motion.div
                className="flex flex-col md:flex-row gap-4 justify-center items-center md:items-stretch"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    hidden: {},
                    visible: {
                        opacity: 1,
                        transition: {
                            duration: 0,
                            when: "beforeChildren",
                            staggerChildren: 0.2,
                            staggerDirection: 1,
                        }
                    }
                }}
            >
                {cards.map((section, index) => (
                    <motion.div
                        key={index}
                        transition={{
                            duration: 0.2,
                            ease: "easeOut"
                        }}
                        variants={{
                        hidden: { 
                            opacity: 0, 
                            scale: 0.8,
                            y: 30,
                            rotateZ: -2
                        },
                        visible: { 
                            opacity: 1, 
                            scale: 1,
                            y: 0,
                            rotateZ: 0,
                            transition: {
                                type: "spring",
                                stiffness: 80,
                                damping: 12
                            }
                        }
                    }}
                    >
                        <MembershipCard
                            nameShort={section.nameShort}
                            description={section.description}
                            price={section.price}
                            lis={section.lis}
                            key={key++}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}