import { MembershipCard } from "./MembershipCard";

export const MembershipSection = () => {
    let key = 0
    let cards = [
        {
            nameShort: "Social",
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
            nameShort: 'Moto',
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
            nameShort: 'Single Auto',
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
            nameShort: '2 Auto',
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
            nameShort: '2 Auto Buddy',
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
        <section className="bg-red-500 py-4">
            <div className="flex flex-row gap-4 justify-center">
                {cards.map(section => (
                    <MembershipCard
                        nameShort={section.nameShort}
                        description={section.description}
                        price={section.price}
                        lis={section.lis}
                        key={key++}
                    />
                ))}
            </div>
        </section>
    )
}