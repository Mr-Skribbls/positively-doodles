enum BreedType {
  Poodle = 'Poodle',
  Bernese = 'Bernese',
  Bernedoodle = 'Bernedoodle',
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
  size: BreedSize,
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
    path: string,
    company: string,
  },
}

export interface Dog {
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
  name: string
  status: PuppyStatus
  gender: 'M' | 'F'
  description: string
  imageName: string
  priceAboveStarting: number
}

export interface LitterInfo {
  dam: Dog, // composite key
  sire: Dog, // composite key
  dueDate: Date, // composite key
  birthDate?: Date,
  goHomeDate?: Date,
  size: number, // number of puppies
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
      }
    },
  };
  return dog;
}

export const dogs:Dog[] = [
  { // Libby
    name: 'Liberty',
    gender: 'F',
    description: 'Liberty is apricot sable, tall and slender. She Loves to give kisses and is independent, smart, and sassy.',
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
        'Liberty_laying_floor',
        'liberty_baby001',
        'liberty_baby002',
        'liberty_baby003',
        'liberty_baby004',
        'liberty_baby005',
        'liberty001',
        'liberty002',
        'liberty003',
        'liberty004',
      ],
    },
    testing: {
      OFA: {
        canineHealth: '/documents/liberty/compressed/LADY LIBERTY XXII-CANINE HEALTH-2023-10-16.pdf',
        elbows: '/documents/liberty/compressed/LADY LIBERTY XXII-ELBOW-2023-07-13.pdf',
        eyes: '/documents/liberty/compressed/LADY LIBERTY XXII-EYES-2023-10-12.pdf',
        hips: '/documents/liberty/compressed/LADY LIBERTY XXII-HIPS-2023-07-13.pdf',
        heart: '/documents/liberty/compressed/LADY LIBERTY XXII-BASIC CARDIAC-2023-09-28.pdf',
        thyroid: '/documents/liberty/compressed/LADY LIBERTY XXII-THYROID-2023-10-09.pdf',
      },
      genetics: {
        path: '/documents/liberty/compressed/Liberty Embark Test Results.pdf',
        company: 'embark'
      },
    },
  }, { // King Kong
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
      }
    },
    additionalInformation: [
      'King Kong is an outside stud from Sun Valley Doodles',
      'King Kong is fully furnished with no curl',
      'He is 100% clear of all genetic diseases with Animal Genetics and Embark.',
      'His OFA\'s are completed and normal.'
    ],
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
    state: LitterState.Puppy,
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
    puppies: [
      {
        name: 'Tiny Tim',
        status: PuppyStatus.Sold,
        gender: 'M',
        description: "Tiny Tim is super sweet.  He loves to play and loves to cuddle.  He has a wavy coat and will be between 30-35 lbs. fully grown. ",
        imageName: 'Liberty_KingKong_TinyTim_6weeks',
        priceAboveStarting: 0,
      }, {
        name: 'Gloria',
        status: PuppyStatus.Sold,
        gender: 'F',
        description: "Gloria is spunky and loves to be around those she knows.  She will be perfect for someone who will be with her all day long.",
        imageName: 'Liberty_KingKong_Gloria_6weeks_2',
        priceAboveStarting: 0,
      }, {
        name: 'Maple',
        status: PuppyStatus.Sold,
        gender: 'F',
        description: "She is super smart.  Already, at only 4 weeks old, she is already going to the potty box to go to the bathroom.  She is very mellow and super sweet.",
        imageName: 'Liberty_KingKong_Maple_6weeks',
        priceAboveStarting: 0,
      }, {
        name: 'Licorice',
        status: PuppyStatus.Available,
        gender: 'M',
        description: "Licorice is very quiet and very mellow.  He sometimes will just sit back and watch his siblings play and other times is the one trying to get another to wrestle with him.  He is very sweet and loves to give lots of kisses.  He is charting to be around 30 pounds.",
        imageName: 'Liberty_KingKong_Licorice_6weeks',
        priceAboveStarting: 0,
      }, {
        name: 'Jingle',
        status: PuppyStatus.Available,
        gender: 'M',
        description: "Jingle is the biggest of the litter.  He is one of the first to alert when someone walks in the room.  He loves to give puppy kisses and cuddles, but he also loves to romp around with his litter mates.",
        imageName: 'Liberty_KingKong_Jingle_6weeks',
        priceAboveStarting: 0,
      }, {
        name: 'Buddy',
        status: PuppyStatus.Reserved,
        gender: 'M',
        description: "Buddy is a beautiful tri-color Sable.  He is almost always the first to go try and explore something new.  He is charting to be about 35 pounds.",
        imageName: 'Liberty_KingKong_Buddy_6weeks',
        priceAboveStarting: 0,
      }
    ]
  },
]