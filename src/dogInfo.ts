enum BreedType {
  Poodle = 'Poodle',
  Bernese = 'Bernese',
  Bernedoodle = 'Bernedoodle',
  Cavapoo = 'Cavapoo',
  KingCharlesCavalier = 'KingCharlesCavalier',
}

enum BreedClass {
  AKC = 'AKC',
  Multigeneration = 'Multigeneration',
  F1 = 'F1',
  F2 = 'F2',
  F1B = 'F1B',
  F2B = 'F2B',
}

enum BreedSize {
  Standard = 'Standard',
  MediumStandard = 'Medium Standard',
  SmallStandard = 'Small Standard',
  Medium = 'Medium',
  Moyan = 'Moyan',
  Mini = 'Mini',
}

enum CoatType {
  Straight = 'Straight',
  Wavy = 'Wavy',
  Curly = 'Curly',
}

enum CoatColorPatterns {
  ApricotSable = 'Apricot Sable',
  TraditionalTriColor = 'Traditional Tri-color',
  TriColorWithSable = 'Tri-color with Sable',
  BlackTanPoints = 'Black with Tan Points',
  Red = 'Red',
}

export enum DogState {
  Puppy = 'Puppy',
  Breeder = 'Breeder',
  Retired = 'Retired',
  Sold = 'Sold',
}

export enum LitterState {
  Expected = 'Expected',
  Puppy = 'Puppy',
  HomeBound = 'Home Bound',
  Complete = 'Complete',
}

export enum PuppyStatus {
  Available = 'Available',
  Reserved = 'Reserved',
  Sold = 'Found Forever Home',
}

export interface Breed {
  class: BreedClass,
  size?: BreedSize,
  type: BreedType,
}

export interface LitterBreed {
  class: BreedClass,
  expectedSizes: BreedSize[],
  type: BreedType,
}

export interface DogImages {
  main: string,
  gallery: string[],
}

export interface StudService {
  price: number,
  pickOfLitter?: 'or' | 'and',
}

export interface OFADocuments {
  ofaPreliminaryId?: number
  ofaId?: number,
  canineHealth?: string,
  elbows?: string,
  eyes?: string,
  hips?: string,
  heart?: string,
  thyroid?: string,
  patellas?: string,
}

export interface DogTesting {
  OFA?: OFADocuments,
  genetics?: {
    results?: string,
    path: string,
    company: string,
  },
}

export interface Dog {
  id: string,
  name: string,
  gender: 'M' | 'F',
  description: string,
  isInternal: boolean,
  state: DogState,
  weight: number,
  breed: Breed,
  images: DogImages,
  testing?: DogTesting,

  additionalInformation?: string[],
  studService?: StudService, // [future use] for internal studs
  link?: string,
}

export interface Puppy {
  id: string,
  name: string
  status: PuppyStatus
  gender: 'M' | 'F'
  description: string
  imageName: string
  priceAboveStarting: number
}

export interface LitterInfo {
  // id: the id is the compound of dam sire and hyphenated dueDate with _ separator
  dam: Dog, // composite key
  sire: Dog, // composite key
  dueDate: Date, // composite key
  birthDate?: Date,
  goHomeDate?: Date,
  size: number, // number of puppies
  expectedPuppySize: string, // expected size the puppies should get
  state: LitterState,
  puppyBreed: LitterBreed,
  expectedCoatTypes: CoatType[],
  expectedColors: CoatColorPatterns[],
  startingPrice: number,
  reservationFee: number,
  puppies?: Puppy[]
}

const findDog = (name: string, dictionary: Dog[]): Dog => {
  const dog = dictionary.find((dog: Dog) => dog.name === name) || {
    id: '',
    name: '',
    gender: 'F',
    description: '',
    isInternal: false,
    state: DogState.Sold,
    weight: 0,
    breed: {
      class: BreedClass.AKC,
      size: BreedSize.Mini,
      type: BreedType.Poodle,
    },
    images: {
      main: 'liberty001',
      gallery: [],
    },
    testing: {
      OFA: {
        elbows: 'Incomplete',
        eyes: 'Incomplete',
        hips: 'Incomplete',
        patellas: 'Incomplete',
        heart: 'Incomplete',
        thyroid: 'Incomplete',
      },
    },
  };
  return dog;
};

export const dogs:Dog[] = [
  {    // Libby
    id: 'f9392faa-8f0c-44f7-9477-bb32ce7a8bc9',
    name: 'Liberty',
    gender: 'F',
    description: 'Liberty is the start of our breeding business! She is a beautiful apricot sable, standard AKC Poodle. She’s a 40-pound bundle of intelligence and affection, with all the classic traits that make Poodles such a beloved breed. She is gentle and intuitive, sweet and sassy. Libby is always eager to be close and involved in whatever we\'re doing whether we\'re watching a movie or playing outside. Her smaller standard size makes her easy to manage, but she still has plenty of energy for play and adventure.',
    isInternal: true,
    state: DogState.Breeder,
    link: '/dog/Liberty',
    weight: 40,
    breed: {
      type: BreedType.Poodle,
      size: BreedSize.SmallStandard,
      class: BreedClass.AKC,
    },
    images: {
      main: 'Liberty_sitting_pretty',
      gallery: [
        'Liberty_sitting_pretty',
      ],
    },
    testing: {
      OFA: {
        ofaId: 2473538,
        canineHealth: '/documents/liberty/compressed/LADY LIBERTY XXII-CANINE HEALTH-2023-10-16.pdf',
        elbows: '/documents/liberty/compressed/LADY LIBERTY XXII-ELBOW-2023-07-13.pdf',
        eyes: '/documents/liberty/compressed/LADY LIBERTY XXII-EYES-2023-10-12.pdf',
        hips: '/documents/liberty/compressed/LADY LIBERTY XXII-HIPS-2023-07-13.pdf',
        heart: '/documents/liberty/compressed/LADY LIBERTY XXII-BASIC CARDIAC-2023-09-28.pdf',
        thyroid: '/documents/liberty/compressed/LADY LIBERTY XXII-THYROID-2023-10-09.pdf',
      },
      genetics: {
        results: 'Genetically clear through Embark and parentage.',
        path: '/documents/liberty/compressed/Liberty Embark Test Results.pdf',
        company: 'embark',
      },
    },
  }, { // King Kong
    id: 'cb3fe85e-c1e7-49c8-af69-61b335b7a322',
    name: 'King Kong',
    gender: 'M',
    description: 'King Kong is an outside stud from Sun Valley Doodles',
    isInternal: false,
    state: DogState.Breeder,
    weight: 30,
    breed: {
      type: BreedType.Bernedoodle,
      size: BreedSize.Mini,
      class: BreedClass.F2,
    },
    images: {
      main: 'king_kong',
      gallery: [],
    },
    testing: {
      OFA: {
        hips: '/documents/king kong/King Kong Pennhip.pdf',
        eyes: '/documents/king kong/KK eyes.pdf',
        heart: '/documents/king kong/KK Heart.pdf',
        patellas: '/documents/king kong/KK Patellas.pdf',
      },
      genetics: {
        path: '/documents/king kong/King Kong Genetic Testing.pdf',
        company: 'Animal Genetics',
      },
    },
    additionalInformation: [
      'King Kong is an outside stud from Sun Valley Doodles',
      'King Kong is fully furnished with no curl',
      'He is 100% clear of all genetic diseases with Animal Genetics and Embark.',
      'His OFA\'s are completed and normal.',
    ],
  }, { // Holly
    id: '0e7a755e-9773-4b11-9cae-6f4c16babff3',
    name: 'Holly',
    gender: 'F',
    description: 'AKC Registered Moyan Poodle',
    isInternal: true,
    state: DogState.Breeder,
    weight: 18,
    breed: {
      type: BreedType.Poodle,
      size: BreedSize.Moyan,
      class: BreedClass.AKC,
    },
    images: {
      main: 'holly_sitting_chair',
      gallery: [],
    },
  }, { // Finn
    id: '8dc00a6b-7b8c-4b17-a8c0-c5ddcb62fb90',
    name: 'Finn',
    gender: 'M',
    description: 'ACK Registered King Charles Cavalier Spaniel.',
    isInternal: false,
    state: DogState.Breeder,
    weight: 13.5,
    breed: {
      type: BreedType.KingCharlesCavalier,
      class: BreedClass.AKC,
    },
    images: {
      main: 'finn',
      gallery: [],
    },
  }, { // Luna
    id: '73c2bfee-83d2-47d1-9bf5-7e78613d6f89',
    name: 'Luna',
    gender: 'F',
    description: 'Luna is a mini tri-chocolate parti multi-generational bernadoodle.',
    isInternal: true,
    state: DogState.Breeder,
    weight: 45,
    breed: {
      type: BreedType.Bernedoodle,
      size: BreedSize.Mini,
      class: BreedClass.Multigeneration,
    },
    images: {
      main: 'Luna_fluffy_cut',
      gallery: [
        'Luna_fluffy_cut',
        'Luna_laying_floor',
      ],
    },
    testing: {
      OFA: {
        ofaPreliminaryId: 2537502,
        ofaId: 2585205,
      },
      genetics: {
        results: 'Genetically clear through Embark and parentage.',
        path: '',
        company: 'Embark',
      }
    },
  }
];

export const puppies: Puppy[] = [
  {
    id: '1f4d856a-0413-4ed2-a76a-f91d4c5b1184',
    name: 'Tiny Tim',
    status: PuppyStatus.Sold,
    gender: 'M',
    description: 'Tiny Tim is super sweet.  He loves to play and loves to cuddle.  He has a wavy coat and will be between 30-35 lbs. fully grown. ',
    imageName: 'Liberty_KingKong_TinyTim_6weeks',
    priceAboveStarting: 0,
  }, {
    id: '931256d9-4dc0-4c61-98f3-9263073a2204',
    name: 'Gloria',
    status: PuppyStatus.Sold,
    gender: 'F',
    description: 'Gloria is spunky and loves to be around those she knows.  She will be perfect for someone who will be with her all day long.',
    imageName: 'Liberty_KingKong_Gloria_6weeks_2',
    priceAboveStarting: 0,
  }, {
    id: '61558fdd-f10d-4b04-95b9-790862fd3ac4',
    name: 'Maple',
    status: PuppyStatus.Sold,
    gender: 'F',
    description: 'She is super smart.  Already, at only 4 weeks old, she is already going to the potty box to go to the bathroom.  She is very mellow and super sweet.',
    imageName: 'Liberty_KingKong_Maple_6weeks',
    priceAboveStarting: 0,
  }, {
    id: '53d125b6-8f70-4b9d-aaba-6c9de02ca92a',
    name: 'Licorice',
    status: PuppyStatus.Reserved,
    gender: 'M',
    description: 'Licorice is very quiet and very mellow.  He sometimes will just sit back and watch his siblings play and other times is the one trying to get another to wrestle with him.  He is very sweet and loves to give lots of kisses.  He is charting to be around 30 pounds.',
    imageName: 'Liberty_KingKong_Licorice_6weeks',
    priceAboveStarting: 0,
  }, {
    id: 'd9f15140-5f60-4404-89b7-f724c2729e5c',
    name: 'Jingle',
    status: PuppyStatus.Sold,
    gender: 'M',
    description: 'Jingle is the biggest of the litter.  He is one of the first to alert when someone walks in the room.  He loves to give puppy kisses and cuddles, but he also loves to romp around with his litter mates.',
    imageName: 'Liberty_KingKong_Jingle_6weeks',
    priceAboveStarting: 0,
  }, {
    id: '624d3910-7cdb-4e03-8c5b-0f78cde56264',
    name: 'Buddy',
    status: PuppyStatus.Sold,
    gender: 'M',
    description: 'Buddy is a beautiful tri-color Sable.  He is almost always the first to go try and explore something new.  He is charting to be about 35 pounds.',
    imageName: 'Liberty_KingKong_Buddy_6weeks',
    priceAboveStarting: 0,
  }, {
    id: 'c5633b99-8011-4101-a187-b71980ac9851',
    name: 'Hazel',
    status: PuppyStatus.Sold,
    gender: 'F',
    description: '',
    imageName: 'Liberty_KingKong_Hazel_5weeks',
    priceAboveStarting: 0,
  }, {
    id: 'aac8147f-5e91-49d4-b420-652ab6285f69',
    name: 'Cherry',
    status: PuppyStatus.Sold,
    gender: 'F',
    description: '',
    imageName: 'Liberty_KingKong_Cherry_5weeks',
    priceAboveStarting: 0,
  }, {
    id: 'c2e1e218-4c2f-43a9-a8e2-6fdde8c4b3a5',
    name: 'Ivy',
    status: PuppyStatus.Sold,
    gender: 'F',
    description: '',
    imageName: 'Liberty_KingKong_Ivy_5weeks',
    priceAboveStarting: 0,
  }, {
    id: '2f5f5d49-e380-4077-910a-cc575540483d',
    name: 'Birch',
    status: PuppyStatus.Sold,
    gender: 'M',
    description: '',
    imageName: 'Liberty_KingKong_Birch_16weeks',
    priceAboveStarting: 0,
  }, {
    id: 'ed68364f-c5e3-4f78-ab84-9815a00058af',
    name: 'Oak',
    status: PuppyStatus.Sold,
    gender: 'M',
    description: '',
    imageName: 'Liberty_KingKong_Oak_5weeks',
    priceAboveStarting: 0,
  }, {
    id: '3b8ef45b-cb87-49e6-aead-875240e0c89f',
    name: 'Spruce',
    status: PuppyStatus.Sold,
    gender: 'M',
    description: '',
    imageName: 'Liberty_KingKong_Spruce_5weeks',
    priceAboveStarting: -1000,
  }, {
    id: 'e1527389-0329-47c3-887e-0c97825490e0',
    name: 'Cedar',
    status: PuppyStatus.Sold,
    gender: 'M',
    description: '',
    imageName: 'Liberty_KingKong_Cedar_5weeks',
    priceAboveStarting: 0,
  }, {
    id: '803c9d34-6573-4885-9ff8-e3325003899f',
    name: 'Aspen',
    status: PuppyStatus.Sold,
    gender: 'M',
    description: '',
    imageName: 'Liberty_KingKong_Aspen_5weeks',
    priceAboveStarting: 0,
  }, 
];

export const litters:LitterInfo[] = [
  {
    dam: findDog('Liberty', dogs),
    sire: findDog('King Kong', dogs),
    dueDate: new Date(2023, 11, 26),
    birthDate: new Date(2023, 11, 25),
    goHomeDate: new Date(2024, 1, 14),
    size: 6,
    expectedPuppySize: '30 to 45 lbs',
    state: LitterState.Complete,
    puppyBreed: {
      type: BreedType.Bernedoodle,
      expectedSizes: [
        BreedSize.Mini,
      ],
      class: BreedClass.F2B,
    },
    expectedCoatTypes: [
      CoatType.Wavy,
    ],
    expectedColors: [
      CoatColorPatterns.ApricotSable,
      CoatColorPatterns.TraditionalTriColor,
      CoatColorPatterns.TriColorWithSable,
    ],
    startingPrice: 1500,
    reservationFee: 500,
    puppies: puppies.filter((puppy) => [
      '1f4d856a-0413-4ed2-a76a-f91d4c5b1184',
      '931256d9-4dc0-4c61-98f3-9263073a2204',
      '61558fdd-f10d-4b04-95b9-790862fd3ac4',
      '53d125b6-8f70-4b9d-aaba-6c9de02ca92a',
      'd9f15140-5f60-4404-89b7-f724c2729e5c',
      '624d3910-7cdb-4e03-8c5b-0f78cde56264',
    ].includes(puppy.id)),
  }, {
    dam: findDog('Liberty', dogs),
    sire: findDog('King Kong', dogs),
    dueDate: new Date(2024, 6, 19),
    birthDate: new Date(2024, 6, 17),
    goHomeDate: new Date(2024, 8, 11),
    size: 8,
    expectedPuppySize: '30 to 45 lbs',
    state: LitterState.HomeBound,
    puppyBreed: {
      type: BreedType.Bernedoodle,
      expectedSizes: [
        BreedSize.Mini,
      ],
      class: BreedClass.F2B,
    },
    expectedCoatTypes: [
      CoatType.Wavy,
    ],
    expectedColors: [
      CoatColorPatterns.ApricotSable,
      CoatColorPatterns.TraditionalTriColor,
      CoatColorPatterns.TriColorWithSable,
    ],
    startingPrice: 2000,
    reservationFee: 500,
    puppies: puppies.filter((puppy) => [
      'c5633b99-8011-4101-a187-b71980ac9851',
      'aac8147f-5e91-49d4-b420-652ab6285f69',
      'c2e1e218-4c2f-43a9-a8e2-6fdde8c4b3a5',
      '2f5f5d49-e380-4077-910a-cc575540483d',
      'ed68364f-c5e3-4f78-ab84-9815a00058af',
      '3b8ef45b-cb87-49e6-aead-875240e0c89f',
      'e1527389-0329-47c3-887e-0c97825490e0',
      '803c9d34-6573-4885-9ff8-e3325003899f',
    ].includes(puppy.id)),
  },
];