import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { MembershipCard } from '../MembershipCard';

const meta: Meta<typeof MembershipCard> = {
  title: 'Components/MembershipCard',
  component: MembershipCard,
  tags: ['autoclub', 'membership', 'pricing'],
};
export default meta;

type Story = StoryObj<typeof MembershipCard>;

export const Social: Story = {
  args: {
    nameShort: "Social",
    description: 'Social Membership',
    price: 75,
    lis: [
      'Waitlist for Storage Membership',
      '24x7 Access to Shift Auto Society – 1 keyfob',
      'Membership Card',
      'Clubhouse Access',
      'Conference Room Usage',
      'Social Events',
      'Education Events',
      'Discounts from partners',
      'Bicycle Storage'
    ]
  },
};

export const Moto: Story = {
  args: {
    nameShort: 'Moto',
    description: 'Motorcycle Storage',
    price: 150,
    lis: [
      'Storage for 1 Motorcycle',
      'Full Access to Motorcycle Lift',
      'Full Access to Indoor Wash Bay',
      '24x7 Access to Shift Auto Society – 1 keyfob, 1 Parking Pass',
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
};

export const SingleAuto: Story = {
  args: {
    nameShort: 'Single Auto',
    description: 'Underground Storage',
    price: 275,
    lis: [
      'Storage for one vehicle in underground garage',
      'Full Access to 2-Post Repair Lift',
      'Full Access to Indoor Wash Bay',
      '24x7 Access to Shift Auto Society – 1 keyfob, 1 Parking Pass',
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
};

export const TwoAuto: Story = {
  args: {
    nameShort: '2 Auto',
    description: '4-Post Lifted Storage',
    price: 425,
    lis: [
      'Storage for 2 Autos on a 4-Post Lift',
      'Full Access to 2-Post Repair Lift',
      'Full Access to Indoor Wash Bay',
      '24x7 Access to Shift Auto Society – 1 keyfob, 2 Parking Passes',
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
};
