export const HOTEL_INFO = {
  description:
    'OYO Townhouse is based on the needs of the millennial traveler. Every single element of the hotel – from the breakfast menu to the booking process has been re-engineered for comfort, efficiency, convenience and affordability. Each Townhouse is designed to complement its neighborhood.',
  hotelPolicy: {
    checkIn: '12:00 PM',
    checkOut: '11:00 AM',
    rules: [
      'Couples are welcome',
      'Guests can check in using any local or outstation ID proof (PAN card not accepted).',
      'Only Indian Nationals allowed',
    ],
  },
  cancellationPolicy: [
    'For cancellation done prior 9 AM on 18 January, 100% Refundable',
    'For cancellation done post 9 AM on 18 January, Non Refundable',
  ],
};

export const HOTEL_DATA = {
  hotel: {
    id: 1,
    name: 'Hotel Almond Resorts and Spa',
    city: 'Delhi',
    photos: [
      'https://r1imghtlak.mmtcdn.com/aba17ca69e8111eba9520242ac110003.jpg',
      'https://images.oyoroomscdn.com/uploads/hotel_image/171566/large/qoprlwskpwsv.jpg',
      'https://images.oyoroomscdn.com/uploads/hotel_image/171566/large/xdoguigmygyh.jpg',
      'https://images.oyoroomscdn.com/uploads/hotel_image/171566/large/waqmgwqnmcdg.jpg',
      'https://r1imghtlak.mmtcdn.com/b0605782196611e992b90242ac110003.jpg',
      'https://r1imghtlak.mmtcdn.com/6a5cc9aa-de68-4950-8106-40ba176f497e.jpg',
    ],
    amenities: ['AC', 'Lake View', 'Pool Area', 'Outdoor', 'Facade', 'Spa'],
    contactInfo: {
      address: 'East Delhi',
      phoneNumber: '9829391929',
      email: 'hello@rosehotels.com',
      location: '74.2381,28.43124',
    },
    active: true,
  },
  rooms: [
    {
      id: 1,
      type: 'Almond Delux Room',
      photos: [
        'https://i.travelapi.com/lodging/1000000/530000/523000/522986/a77aa84f_z.jpg',
        'https://r1imghtlak.mmtcdn.com/3d0034e49e8211eb98ce0242ac110002.jpg',
        'https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/200705141436028514-75dcd5c5-c975-49c9-8e60-dfa39468bcf4.jpg',
        'https://r1imghtlak.mmtcdn.com/c59164a4250511ec91a00a58a9feac02.jpg',
      ],
      amenities: [
        'WiFi',
        'Air Conditioning',
        'Spa',
        'Fireplace',
        'Kids area',
        'Dining',
        'Minibar',
      ],
      price: 718.75,
      isSelected: true
    },
    {
      id: 2,
      type: 'Almond Presidential Suite',
      photos: [
        'https://r1imghtlak.mmtcdn.com/3d0034e49e8211eb98ce0242ac110002.jpg',
        'https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/200705141436028514-75dcd5c5-c975-49c9-8e60-dfa39468bcf4.jpg',
        'https://r1imghtlak.mmtcdn.com/c59164a4250511ec91a00a58a9feac02.jpg',
      ],
      amenities: [
        'Gym',
        'King-size Bed',
        'WiFi',
        'Air Conditioning',
        'Spa',
        'Fireplace',
        'Kids area',
        'Dining',
        'Minibar',
      ],
      price: 1437.5,
      isSelected: false
    },
  ],
};
