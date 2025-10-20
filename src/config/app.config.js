export const SERVICE_LIST = [
    {
        id : 1,
        title : "Stays",
        icon : "bed",
        active : true,
    },
    {
        id : 2,
        title : "Flights",
        icon : "flight",
        active : false,
    },
    {
        id : 3,
        title : "Car rentals",
        icon : "car",
        active : false,
    },
    {
        id : 4,
        title : "Attractions",
        icon : "attractions",
        active : false,
    },
    {
        id : 5,
        title : "Airport taxis",
        icon : "taxi",
        active : false,
    }
]


export const TRENDING_DESTINATIONS = [
  {
    title: 'New Delhi',
    image: 'delhi.jpg',
    className: 'sm:col-span-3 sm:col-start-1 col-span-full',
  },
  {
    title: 'Bangalore',
    image: 'bangalore.jpg',
    className: 'sm:col-span-3 sm:col-start-4 col-span-full',
  },
  {
    title: 'Mumbai',
    image: 'mumbai.jpg',
    className: 'md:col-span-2 md:col-start-1 col-span-full',
  },
  {
    title: 'Chennai',
    image: 'chennai.jpg',
    className: 'md:col-span-2 md:col-start-3 sm:col-span-3 col-span-full',
  },
  {
    title: 'Hyderabad',
    image: 'hyderabad.jpg',
    className: 'md:col-span-2 md:col-start-5 sm:col-span-3 col-span-full',
  },
];


export const FOOTER_SECTION = [
  {
    title: 'Support',
    links: [
      { text: 'Coronavirus (COVID-19) FAQs', href: '#' },
      { text: 'Manage your trips', href: '#' },
      { text: 'Contact Customer Service', href: '#' },
      { text: 'Safety resource centre', href: '#' },
    ],
  },
  {
    title: 'Discover',
    links: [
      { text: 'Genius loyalty programme', href: '#' },
      { text: 'Seasonal and holiday deals', href: '#' },
      { text: 'Travel articles', href: '#' },
      { text: 'Booking.com for Business', href: '#' },
      { text: 'Traveller Review Awards', href: '#' },
      { text: 'Car hire', href: '#' },
      { text: 'Flight finder', href: '#' },
      { text: 'Restaurant reservations', href: '#' },
      { text: 'Booking.com for Travel Agents', href: '#' },
    ],
  },
  {
    title: 'Terms and settings',
    links: [
      { text: 'Privacy & cookies', href: '#' },
      { text: 'Terms and conditions', href: '#' },
      { text: 'Grievance officer', href: '#' },
      { text: 'Modern Slavery Statement', href: '#' },
      { text: 'Human Rights Statement', href: '#' },
    ],
  },
  {
    title: 'Partners',
    links: [
      { text: 'Extranet login', href: '#' },
      { text: 'Partner help', href: '#' },
      { text: 'List your property', href: '#' },
      { text: 'Become an affiliate', href: '#' },
    ],
  },
  {
    title: 'About',
    links: [
      { text: 'About Booking.com', href: 'https://codingshuttle.com' },
      { text: 'How we work', href: '#' },
      { text: 'Sustainability', href: '#' },
      { text: 'Press centre', href: '#' },
      { text: 'Careers', href: '#' },
      { text: 'Investor relations', href: '#' },
      { text: 'Corporate contact', href: '#' },
    ],
  },
];


export const SOCIAL_LINKS = [
  { icon: 'pinterest', href: '#', title: 'Pinterest' },
  { icon: 'twitter', href: '#', title: 'Twitter' },
  { icon: 'instagram', href: '#', title: 'Instagram' },
  { icon: 'youtube', href: '#', title: 'Youtube' },
];

export const DESTINATIONS = [
  { city: 'Jaipur', country: 'India' },
  { city: 'Delhi', country: 'India' },
  { city: 'Goa', country: 'India' },
  { city: 'Gurgaon', country: 'India' },
  { city: 'North Goa', country: 'India' },
  { city: 'Mumbai', country: 'India' },
  { city: 'Bangalore', country: 'India' },
  { city: 'Hyderabad', country: 'India' },
  { city: 'Chennai', country: 'India' },
  { city: 'Pune', country: 'India' }
];

export const SEARCH_PARAMS_KEYS = {
  CHECKIN: 'startDate',
  CHECKOUT: 'endDate',
  ROOMS: 'roomsCount',
  LOCATION: 'city',
  SELECTED_ROOM: 'selected_rcid',
  SORTBY: 'sort',
  PAGE: 'page',
  STAR_CATEGORY: 'starCategory',
  PRICE_RANGE: 'priceRange',
  NEXT_REDIRECT: 'next',
};

export const SEARCH_RESULT_PAGE_LIMIT = 20;

export const STAR_FILTERS = [
  {
    id : 1,
    label : '5 Star',
    value : 5
  },
  {
    id : 2,
    label : '4 Star',
    value : 4
  },
  {
    id : 3,
    label : '3 Star',
    value : 3
  },
  {
    id : 4,
    label : '2 Star',
    value : 2
  },
  {
    id : 5,
    label : '1 Star',
    value : 1
  },
]

export const PRICE_FILTERS = [
  {
    id : 1,
    label : '₹0 - ₹500',
    value : '0-500'
  },
  {
    id : 2,
    label : '₹500 - ₹1000',
    value : '500-1000'
  },
  {
    id : 3,
    label : '₹1000 - ₹1500',
    value : '1000-1500'
  },
  {
    id : 4,
    label : '₹1500 - ₹2000',
    value : '1500-2000'
  },
  {
    id : 5,
    label : '₹2000 - ₹2500',
    value : '2000-2500'
  },
]

export const SEARCH_FILTERS = [
  {
    label: 'Our top picks',
    value: 'popularity',
  },
  {
    label: 'Price (lowest first)',
    value: 'price-asc',
  },
  {
    label: 'Price (highest first)',
    value: 'price-desc',
  },
];

export const HOTELS_INFO = {
  "content": [
    {
      "id": 1,
      "name": "The Grand Crown Luxury Hotel and Convention Cente",
      "city": "BBSR",
      "photos": [
        "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
        "https://images.pexels.com/photos/1134175/pexels-photo-1134175.jpeg",
        "https://images.pexels.com/photos/19570521/pexels-photo-19570521.jpeg",
        "https://images.pexels.com/photos/13914276/pexels-photo-13914276.jpeg",
        "https://images.pexels.com/photos/33552579/pexels-photo-33552579.jpeg"
      ],
      "amenities": ["AC", "Free Breakfast", "Parking", "Free WiFi", "GYM"],
      "contactInfo": {
        "address": "Jaydev Vihar",
        "phoneNumber": "9123456222",
        "email": "contact@crown.com",
        "location": "20.2961,85.8245"
      },
      "price": 2499.0
    },
    {
      "id": 2,
      "name": "Horizon Residency and Premium Business Suites",
      "city": "BBSR",
      "photos": [
        "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
        "https://images.pexels.com/photos/1134175/pexels-photo-1134175.jpeg",
        "https://images.pexels.com/photos/19570521/pexels-photo-19570521.jpeg",
        "https://images.pexels.com/photos/13914276/pexels-photo-13914276.jpeg",
        "https://images.pexels.com/photos/33552579/pexels-photo-33552579.jpeg"
      ],
      "amenities": ["AC", "Free WiFi", "Pool", "GYM"],
      "contactInfo": {
        "address": "Khandagiri",
        "phoneNumber": "9123456223",
        "email": "contact@horizon.com",
        "location": "20.2965,85.8200"
      },
      "price": 1999.0
    },
    {
      "id": 3,
      "name": "Sunview International Hotel and Spa Retreat",
      "city": "BBSR",
      "photos": [
        "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
        "https://images.pexels.com/photos/1134175/pexels-photo-1134175.jpeg",
        "https://images.pexels.com/photos/19570521/pexels-photo-19570521.jpeg",
        "https://images.pexels.com/photos/13914276/pexels-photo-13914276.jpeg",
        "https://images.pexels.com/photos/33552579/pexels-photo-33552579.jpeg"
      ],
      "amenities": ["AC", "Free Breakfast", "Spa", "Parking"],
      "contactInfo": {
        "address": "Saheed Nagar",
        "phoneNumber": "9123456224",
        "email": "contact@sunview.com",
        "location": "20.3120,85.8240"
      },
      "price": 2799.0
    },
    {
      "id": 4,
      "name": "Pearl Heritage Hotel and Fine Dining Experience",
      "city": "BBSR",
      "photos": [
        "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
        "https://images.pexels.com/photos/1134175/pexels-photo-1134175.jpeg",
        "https://images.pexels.com/photos/19570521/pexels-photo-19570521.jpeg",
        "https://images.pexels.com/photos/13914276/pexels-photo-13914276.jpeg",
        "https://images.pexels.com/photos/33552579/pexels-photo-33552579.jpeg"
      ],
      "amenities": ["AC", "Restaurant", "Free WiFi", "Parking"],
      "contactInfo": {
        "address": "Patia",
        "phoneNumber": "9123456225",
        "email": "contact@pearl.com",
        "location": "20.3140,85.8170"
      },
      "price": 2299.0
    },
    {
      "id": 5,
      "name": "Royal Palace Hotel with Banquet Hall and Rooftop Lounge",
      "city": "BBSR",
      "photos": [
        "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
        "https://images.pexels.com/photos/1134175/pexels-photo-1134175.jpeg",
        "https://images.pexels.com/photos/19570521/pexels-photo-19570521.jpeg",
        "https://images.pexels.com/photos/13914276/pexels-photo-13914276.jpeg",
        "https://images.pexels.com/photos/33552579/pexels-photo-33552579.jpeg"
      ],
      "amenities": ["AC", "Free WiFi", "GYM", "Pool", "24x7 CCTV"],
      "contactInfo": {
        "address": "Bapuji Nagar",
        "phoneNumber": "9123456226",
        "email": "contact@royal.com",
        "location": "20.3145,85.8280"
      },
      "price": 2599.0
    }
  ]
}