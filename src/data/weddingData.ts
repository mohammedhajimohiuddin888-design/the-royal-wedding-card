import { WeddingData } from '../types/wedding';

export const weddingData: WeddingData = {
  couple: {
    bride: {
      fullName: 'Sabiha',
      calligraphyName: 'Sabiha',
      title: 'The Bride',
      daughterOf: 'Beloved Daughter of Respected Family',
      bio: 'Luminous, cherished, and noble of character. Sabiha enters this blessed union with grace, prayer, and timeless devotion.',
    },
    groom: {
      fullName: 'Mohd Haji',
      calligraphyName: 'Mohd Haji',
      title: 'The Groom',
      sonOf: 'Beloved Son of Respected Family',
      bio: 'Steadfast, esteemed, and warm-hearted. Mohd Haji welcomes this sacred bond of marriage with honour, gratitude, and joy.',
    },
    hashtag: '#HajiWedsSabiha',
    monogram: 'M & S',
  },
  eventDate: {
    isoDate: '2026-12-17T19:00:00+05:30', // Shadi date: 17 December 2026
    displayDate: 'Thursday, 17th December 2026',
    dayName: 'Thursday',
    monthYear: 'December 2026',
    islamicDate: '8 Rajab 1448 AH',
  },
  welcome: {
    bismillah: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
    invitationKicker: 'In the name of Allah, the Most Gracious, the Most Merciful',
    subheadline: 'Together with their families, cordially invite you to celebrate the blessed wedding ceremony of their beloved children',
  },
  messages: {
    formalInvitation: [
      'With hearts filled with joy and boundless gratitude to the Almighty, we request the honour of your gracious presence and valuable prayers at the wedding celebration of our beloved children.',
      'As two lives unite in this sacred covenant of companionship and mutual devotion, your esteemed presence and heartfelt duas will bring immense blessing to this auspicious occasion.',
      'We eagerly look forward to welcoming you to both our Shadi and Dinner festivities, sharing warmth, celebration, and cherished memories together.',
    ],
    quote: '“And of His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy.”',
    quoteAuthor: 'Surah Ar-Rum [30:21]',
    duaa: 'Barakallahu laka wa baraka ‘alayka wa jama‘a baynakuma fee khayr (May Allah bless you and bestow His blessings upon you and unite you both in goodness).',
  },
  events: [
    {
      id: 'shadi',
      title: 'Shadi',
      subtitle: 'The Auspicious Wedding Ceremony',
      date: 'Thursday, 17th December 2026',
      time: '07:00 PM Onwards',
      venue: "King's Palace Function Hall",
      address: '12-2-706, Ushodaya Colony, Gudi Malkapur Rd, Noor Ghat, Gudi Malkapur, Mehdipatnam, Hyderabad, Telangana 500008',
      dressCode: 'Royal Traditional / Formal Ethnic Attire',
      description: 'The auspicious wedding ceremony, solemn vows, and heartfelt prayers in the presence of family and loved ones, marking the joyous beginning of a lifelong union.',
      iconName: 'Crown',
    },
    {
      id: 'dinner',
      title: 'Dinner',
      subtitle: 'Reception & Royal Wedding Feast',
      date: 'Sunday, 20th December 2026',
      time: '08:00 PM Onwards',
      venue: "King's Palace Function Hall",
      address: '12-2-706, Ushodaya Colony, Gudi Malkapur Rd, Noor Ghat, Gudi Malkapur, Mehdipatnam, Hyderabad, Telangana 500008',
      dressCode: 'Festive Royal Glamour / Formal Attire',
      description: 'The grand wedding dinner and reception celebrating the newlyweds with traditional royal delicacies, fragrant biryani, sweets, and felicitation.',
      iconName: 'Utensils',
    },
  ],
  venue: {
    name: "King's Palace Function Hall",
    palaceSubtitle: 'Royal Grand Banquet & Convention Hall',
    address: '12-2-706, Ushodaya Colony, Gudi Malkapur Rd, Noor Ghat',
    cityStateZip: 'Gudi Malkapur, Mehdipatnam, Hyderabad, Telangana 500008',
    mapsUrl: 'https://maps.google.com/?q=King%27s+Palace+Function+Hall+Gudi+Malkapur+Mehdipatnam+Hyderabad+Telangana+500008',
    embedQuery: 'Kings+Palace+Function+Hall+Gudi+Malkapur+Mehdipatnam+Hyderabad',
    landmark: 'Near Noor Ghat & Ushodaya Colony, Gudi Malkapur Road',
    parkingNote: 'Spacious car parking and valet assistance available at the main gate of King\'s Palace.',
  },
  rsvp: {
    deadline: '10th December 2026',
    whatsappNumber: '919876543210',
    contactEmail: 'haji.sabiha.wedding@royalinvitation.luxury',
    defaultMessageTemplate: 'Salam! We are delighted to confirm our attendance for the wedding celebration of Sabiha & Mohd Haji.',
  },
  music: {
    title: 'Kalyan Raga Symphony',
    subtitle: 'Acoustic Sitar, Santoor & Shehnai Harmony',
    autoPlayOnOpen: true,
  },
  closing: {
    heading: 'WITH ALL OUR HEARTS',
    subtext: 'Your gracious presence and sincere prayers are our greatest blessing.',
    blessing: 'May peace, prosperity, and joy always fill your home.',
  },
};
