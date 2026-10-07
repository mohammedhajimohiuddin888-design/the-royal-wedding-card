export interface WeddingEvent {
  id: string;
  title: string;
  subtitle?: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  dressCode?: string;
  description: string;
  iconName?: string;
}

export interface WeddingData {
  couple: {
    bride: {
      fullName: string;
      calligraphyName: string;
      title: string;
      daughterOf: string;
      bio: string;
    };
    groom: {
      fullName: string;
      calligraphyName: string;
      title: string;
      sonOf: string;
      bio: string;
    };
    hashtag: string;
    monogram: string;
  };
  eventDate: {
    isoDate: string; // ISO string for countdown calculation
    displayDate: string;
    dayName: string;
    monthYear: string;
    islamicDate?: string;
  };
  welcome: {
    bismillah: string;
    invitationKicker: string;
    subheadline: string;
  };
  messages: {
    formalInvitation: string[];
    quote: string;
    quoteAuthor?: string;
    duaa?: string;
  };
  events: WeddingEvent[];
  venue: {
    name: string;
    palaceSubtitle: string;
    address: string;
    cityStateZip: string;
    mapsUrl: string;
    embedQuery: string;
    landmark: string;
    parkingNote: string;
  };
  rsvp: {
    deadline: string;
    whatsappNumber: string; // e.g. "919876543210" without plus or spaces for click-to-chat
    contactEmail: string;
    defaultMessageTemplate: string;
  };
  music: {
    title: string;
    subtitle: string;
    autoPlayOnOpen: boolean;
  };
  closing: {
    heading: string;
    subtext: string;
    blessing: string;
  };
}
