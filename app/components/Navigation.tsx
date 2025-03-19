import Link from 'next/link';

const navigationItems = {
  main: [
    { name: 'Home', href: '/' },
    {
      name: 'Services',
      href: '/services',
      children: [
        {
          name: 'Corporate Menu',
          href: '/menu',
          children: [
            { name: 'Corporate Menu', href: '/services/corporate/menu' },
            { name: 'Office Functions', href: '/services/corporate/functions' },
          ]
        },
        {
          name: 'Wedding Services',
          href: '/services/wedding',
          children: [
            { name: 'Wedding Catering', href: '/services/wedding/catering' },
            { name: 'Wedding Decorations', href: '/services/wedding/decorations' },
            { name: 'Wedding Film', href: '/services/wedding/film' },
            { name: 'Wedding Photography', href: '/services/wedding/photography' },
            { name: 'Welcome Models', href: '/services/wedding/models' },
          ]
        },
        {
          name: 'Other Events',
          href: '/services/events',
          children: [
            { name: 'Kids Birthday', href: '/services/events/kids-birthday' },
            { name: 'Engagement', href: '/services/events/engagement' },
            { name: 'School Events', href: '/services/events/school' },
            { name: 'College Events', href: '/services/events/college' },
            { name: 'House Ceremony', href: '/services/events/house-ceremony' },
            { name: 'Baby Shower', href: '/services/events/baby-shower' },
          ]
        },
      ]
    },
    {
      name: 'Tasting',
      href: '/tasting',
    },
    {
      name: 'About',
      href: '/about',
    },
  ]
}; 