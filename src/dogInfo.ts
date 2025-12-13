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
  MicroMini = 'Micro Mini'
}

enum CoatType {
  Straight = 'Straight',
  Wavy = 'Wavy',
  Curly = 'Curly',
}

enum CoatColorPatterns {
  Sable = 'Sable',
  Phantom = 'Phantom',
  ApricotSable = 'Apricot Sable',
  TraditionalTriColor = 'Traditional Tri-color',
  TriColorWithSable = 'Tri-color with Sable',
  BlackTanPoints = 'Black with Tan Points',
  Red = 'Red',
  Black = 'Black',
  Brown = 'Brown',
  Parti = 'Parti',
  Merle = 'Merle',
  Blenheim = 'Blenheim',
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
  id: string,
  dam: Dog, // composite key
  sire: Dog, // composite key
  preBirthDescription?: string,
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
  {    // Undecided Stud
    id: '',
    name: 'Undecided Stud',
    gender: 'M',
    description: 'We are currently looking for the perfect stud.',
    isInternal: true,
    state: DogState.Breeder,
    weight: 45,
    breed: {
      type: BreedType.Bernedoodle,
      size: BreedSize.Mini,
      class: BreedClass.Multigeneration,
    },
    images: {
      main: '',
      gallery: [],
    },
  }, { // Libby
    id: 'f9392faa-8f0c-44f7-9477-bb32ce7a8bc9',
    name: 'Liberty',
    gender: 'F',
    description: 'Liberty is the start of our breeding business! She is a beautiful apricot sable, standard AKC Poodle. She\'s a 40-pound bundle of intelligence and affection, with all the classic traits that make Poodles such a beloved breed. She is gentle and intuitive, sweet and sassy. Libby is always eager to be close and involved in whatever we\'re doing whether we\'re watching a movie or playing outside. Her smaller standard size makes her easy to manage, but she still has plenty of energy for play and adventure.',
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
      main: 'Liberty_sitting_handkerchief_2',
      gallery: [
        'Liberty_sitting_handkerchief_2',
        'Liberty_sitting_handkerchief_1',
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
    description: 'Holly joined our program from another breeder. She has had one previous litter, and because she began her breeding journey later in life, this will be her retirement litter. Holly is a sweet, affectionate, and deeply loving girl who brings so much warmth to everyone around her.',
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
  }, { // Luna
    id: '73c2bfee-83d2-47d1-9bf5-7e78613d6f89',
    name: 'Luna',
    gender: 'F',
    description: 'Luna is a medium multi-generational Bernedoodle. She is a stunning tri-chocolate parti with a soft, curly coat and a gentle spirit. Weighing 55 pounds, she has a nurturing temperament and naturally cares for our puppies, earning her the title of our beloved “nanny dog.” Luna’s affectionate personality and love for cuddles make her truly special.',
    isInternal: true,
    state: DogState.Breeder,
    weight: 55,
    breed: {
      type: BreedType.Bernedoodle,
      size: BreedSize.Medium,
      class: BreedClass.Multigeneration,
    },
    images: {
      main: 'Luna_laying_floor',
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
  }, { // Twiggy
    id: '9641d81b-7806-42b3-9f9d-b4c876e01aca',
    name: 'Twiggy',
    gender: 'M',
    description: 'Twiggy is an outside stud. He is a tri-colored F1 Bernedoodle. He is a micro mini at only 20 lbs.',
    isInternal: false,
    state: DogState.Breeder,
    weight: 20,
    breed: {
      type: BreedType.Bernedoodle,
      size: BreedSize.MicroMini,
      class: BreedClass.F1,
    },
    images: {
      main: 'Twiggy',
      gallery: ['Twiggy'],
    }
  }, { // Flair
    id: 'a7393bd9-f77e-460b-bb4e-6167ed5dd1d2',
    name: 'Flair',
    gender: 'F',
    description: 'Flair is an elegant red Poodle with hidden merle genetics, co-owned with Kentuckiana Poodles. Weighing 60 pounds, she lives a happy and well-loved life in her guardian home. She carries genes for chocolate, parti, and intense red coloring.',
    isInternal: false,
    state: DogState.Breeder,
    weight: 65,
    breed: {
      type: BreedType.Poodle,
      size: BreedSize.Standard,
      class: BreedClass.AKC,
    },
    images: {
      main: 'Flair',
      gallery: [],
    }
  }, { // Creed
    id: '3a2312f8-5eb5-4d17-aea5-360d8047d0a3',
    name: 'Creed',
    gender: 'M',
    description: 'Creed is a handsome 60-pound black phantom Standard Poodle who carries genes for chocolate, parti, and intense red coloring.',
    isInternal: false,
    state: DogState.Breeder,
    weight: 60,
    breed: {
      type: BreedType.Poodle,
      size: BreedSize.Standard,
      class: BreedClass.AKC,
    },
    images: {
      main: 'Creed',
      gallery: [],
    }
  }, { // Bullet
    id: '8f3ab31c-27a3-49cd-b31f-e91b3d25bedf',
    name: 'Bullet',
    gender: 'M',
    description: 'Bullet is genetically clear which is nearly impossible to find in a Cavapoo. With his fully furnished straight coat and color genetics and you basically have a unicorn stud.',
    isInternal: false,
    state: DogState.Breeder,
    weight: 16,
    breed: {
      type: BreedType.Cavapoo,
      size: BreedSize.Mini,
      class: BreedClass.Multigeneration,
    },
    images: {
      main: 'Bullet',
      gallery: [],
    },
  }, { // Meeko
    id: '5eb71f99-c84a-4dc8-8a30-37b8e674192f',
    name: 'Meeko',
    gender: 'M',
    description: 'Meeko is a tri-chocolate straight coat Bernedoodle. He is 21 pounds. He was chosen as a stud for this litter because of his straight fully furnished chocolate coat.',
    isInternal: false,
    state: DogState.Breeder,
    weight: 21,
    breed: {
      type: BreedType.Bernedoodle,
      size: BreedSize.MicroMini,
      class: BreedClass.Multigeneration,
    },
    images: {
      main: 'Meeko',
      gallery: [],
    },
  }, {
    id: 'faff5e81-11b9-49ed-b29e-33adb1669eb2',
    name: 'Bogey',
    gender: 'M',
    description: 'Bogey is a multi-generational micro-mini bernedoodle. He is 52% bernese, and only 18 pounds. He is fully furnished, genetically clear and has a straight coat.',
    isInternal: false,
    state: DogState.Breeder,
    weight: 18,
    breed: {
      type: BreedType.Bernedoodle,
      size: BreedSize.MicroMini,
      class: BreedClass.Multigeneration,
    },
    images: {
      main: 'Bogey',
      gallery: [],
    },
  }
];

export const puppies: Puppy[] = [
  {    // Tiny Tim
    id: '1f4d856a-0413-4ed2-a76a-f91d4c5b1184',
    name: 'Tiny Tim',
    status: PuppyStatus.Sold,
    gender: 'M',
    description: '',
    imageName: 'Liberty_KingKong_TinyTim_6weeks',
    priceAboveStarting: 0,
  }, { // Gloria
    id: '931256d9-4dc0-4c61-98f3-9263073a2204',
    name: 'Gloria',
    status: PuppyStatus.Sold,
    gender: 'F',
    description: '',
    imageName: 'Liberty_KingKong_Gloria_6weeks_2',
    priceAboveStarting: 0,
  }, { // Maple
    id: '61558fdd-f10d-4b04-95b9-790862fd3ac4',
    name: 'Maple',
    status: PuppyStatus.Sold,
    gender: 'F',
    description: '',
    imageName: 'Liberty_KingKong_Maple_6weeks',
    priceAboveStarting: 0,
  }, { // Licorice
    id: '53d125b6-8f70-4b9d-aaba-6c9de02ca92a',
    name: 'Licorice',
    status: PuppyStatus.Sold,
    gender: 'M',
    description: '',
    imageName: 'Liberty_KingKong_Licorice_6weeks',
    priceAboveStarting: 0,
  }, { // Jingle
    id: 'd9f15140-5f60-4404-89b7-f724c2729e5c',
    name: 'Jingle',
    status: PuppyStatus.Sold,
    gender: 'M',
    description: '',
    imageName: 'Liberty_KingKong_Jingle_6weeks',
    priceAboveStarting: 0,
  }, { // Buddy
    id: '624d3910-7cdb-4e03-8c5b-0f78cde56264',
    name: 'Buddy',
    status: PuppyStatus.Sold,
    gender: 'M',
    description: '',
    imageName: 'Liberty_KingKong_Buddy_6weeks',
    priceAboveStarting: 0,
  }, { // Hazel
    id: 'c5633b99-8011-4101-a187-b71980ac9851',
    name: 'Hazel',
    status: PuppyStatus.Sold,
    gender: 'F',
    description: '',
    imageName: 'Liberty_KingKong_Hazel_5weeks',
    priceAboveStarting: 0,
  }, { // Cherry
    id: 'aac8147f-5e91-49d4-b420-652ab6285f69',
    name: 'Cherry',
    status: PuppyStatus.Sold,
    gender: 'F',
    description: '',
    imageName: 'Liberty_KingKong_Cherry_5weeks',
    priceAboveStarting: 0,
  }, { // Ivy
    id: 'c2e1e218-4c2f-43a9-a8e2-6fdde8c4b3a5',
    name: 'Ivy',
    status: PuppyStatus.Sold,
    gender: 'F',
    description: '',
    imageName: 'Liberty_KingKong_Ivy_5weeks',
    priceAboveStarting: 0,
  }, { // Birch
    id: '2f5f5d49-e380-4077-910a-cc575540483d',
    name: 'Birch',
    status: PuppyStatus.Sold,
    gender: 'M',
    description: '',
    imageName: 'Liberty_KingKong_Birch_16weeks',
    priceAboveStarting: 0,
  }, { // Oak
    id: 'ed68364f-c5e3-4f78-ab84-9815a00058af',
    name: 'Oak',
    status: PuppyStatus.Sold,
    gender: 'M',
    description: '',
    imageName: 'Liberty_KingKong_Oak_5weeks',
    priceAboveStarting: 0,
  }, { // Spruce
    id: '3b8ef45b-cb87-49e6-aead-875240e0c89f',
    name: 'Spruce',
    status: PuppyStatus.Sold,
    gender: 'M',
    description: '',
    imageName: 'Liberty_KingKong_Spruce_5weeks',
    priceAboveStarting: -1000,
  }, { // Cedar
    id: 'e1527389-0329-47c3-887e-0c97825490e0',
    name: 'Cedar',
    status: PuppyStatus.Sold,
    gender: 'M',
    description: '',
    imageName: 'Liberty_KingKong_Cedar_5weeks',
    priceAboveStarting: 0,
  }, { // Aspen
    id: '803c9d34-6573-4885-9ff8-e3325003899f',
    name: 'Aspen',
    status: PuppyStatus.Sold,
    gender: 'M',
    description: '',
    imageName: 'Liberty_KingKong_Aspen_5weeks',
    priceAboveStarting: 0,
  }, { // Acorn
    id: 'e868ec72-0326-47f5-89ac-681ac8b4368b',
    name: 'Acorn',
    status: PuppyStatus.Sold,
    gender: 'M',
    description: '',
    imageName: 'Acorn_02',
    priceAboveStarting: 0,
  }, { // Buttercup
    id: '6fe814aa-b1bf-49f6-aa77-8c95330e5d02',
    name: 'Buttercup',
    status: PuppyStatus.Sold,
    gender: 'F',
    description: '',
    imageName: 'Buttercup_02',
    priceAboveStarting: 0,
  }, { // Hubbard
    id: '517ce702-80e7-4fcf-b264-6ed806e854cd',
    name: 'Hubbard',
    status: PuppyStatus.Sold,
    gender: 'M',
    description: '',
    imageName: 'Hubbard_02',
    priceAboveStarting: 0,
  }, { // Pumpkin
    id: '3c3fbd7b-b245-47b1-abc2-dd972cc70b5a',
    name: 'Pumpkin',
    status: PuppyStatus.Sold,
    gender: 'M',
    description: '',
    imageName: 'Pumpkin_02',
    priceAboveStarting: 0,
  }, { // Sugar
    id: '47992bac-392d-4d02-adfe-6e740694e36a',
    name: 'Sugar',
    status: PuppyStatus.Sold,
    gender: 'F',
    description: '',
    imageName: 'Sugar_02',
    priceAboveStarting: 0,
  }, { // Sweetmeat
    id: 'b44cb0b7-61fd-4bd3-9c98-a545c19940ec',
    name: 'Sweetmeat',
    status: PuppyStatus.Sold,
    gender: 'F',
    description: '',
    imageName: 'Sweetmeat_02',
    priceAboveStarting: 0,
  }, 
  
  {    // Noelle
    id: '901f2d9f-ea8d-412b-a0fd-265d41a98d6f',
    gender: 'F',
    description: 'Noelle is red.',
    imageName: 'Flair_Creed_Noelle_4Days',
    name: 'Noelle',
    status: PuppyStatus.Available,
    priceAboveStarting: 0,
  }, { // Crystal
    id: '7eb550ce-c136-4cce-92c1-2026c3e2d193',
    gender: 'F',
    description: 'Crystal is tricolor.',
    imageName: 'Flair_Creed_Crystal_4Days',
    name: 'Crystal',
    status: PuppyStatus.Available,
    priceAboveStarting: 0,
  }, { // Aurora
    id: 'b1349864-8b66-4f79-99f2-84c07f908d6d',
    gender: 'F',
    description: 'Aurora is a chocolate phantom merle.',
    imageName: 'Flair_Creed_Aurora_4Days',
    name: 'Aurora',
    status: PuppyStatus.Available,
    priceAboveStarting: 1000,
  }, { // Ember
    id: 'de240ff1-40c2-43b8-af46-8f8bb9b88766',
    gender: 'M',
    description: 'Ember is red.',
    imageName: 'Flair_Creed_Ember_4Days',
    name: 'Ember',
    status: PuppyStatus.Available,
    priceAboveStarting: 0,
  }, { // Ice
    id: '2e042cae-7f79-4f17-8f0c-2af8cff20a8a',
    gender: 'M',
    description: 'Ice is red parti.',
    imageName: 'Flair_Creed_Ice_4Days',
    name: 'Ice',
    status: PuppyStatus.Available,
    priceAboveStarting: 0,
  }, { // Fudge
    id: 'efa7d454-1665-43ac-9f55-26b7b656df5e',
    gender: 'M',
    description: 'Fudge is chocolate phantom.',
    imageName: 'Flair_Creed_Fudge_4Days',
    name: 'Fudge',
    status: PuppyStatus.Available,
    priceAboveStarting: 0,
  }, { // Coal
    id: '1f633b4a-6ed6-431b-a09c-db17e3d13b2f',
    gender: 'M',
    description: 'Coal is black phantom.',
    imageName: 'Flair_Creed_Coal_4Days',
    name: 'Coal',
    status: PuppyStatus.Available,
    priceAboveStarting: 0,
  }, { // Storm
    id: 'cf3af56f-fb82-446d-b293-2a2a05af9ffd',
    gender: 'M',
    description: 'Storm is a black phantom merle.',
    imageName: 'Flair_Creed_Storm_4Days',
    name: 'Storm',
    status: PuppyStatus.Available,
    priceAboveStarting: 1000,
  }, { // Frost
    id: 'dc930071-5cfc-421a-942f-50536f646573',
    gender: 'M',
    description: 'Frost is red parti.',
    imageName: 'Flair_Creed_Frost_4Days',
    name: 'Frost',
    status: PuppyStatus.Available,
    priceAboveStarting: 0,
  }
];

export const litters:LitterInfo[] = [
  {    // Liberty - King Kong
    id: '832fd26e-0a4d-45e3-b1fe-714c8edff83a',
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
  }, { // Liberty - King Kong
    id: '6fe7617e-9f6f-40c1-b00d-2a444a9b6370',
    dam: findDog('Liberty', dogs),
    sire: findDog('King Kong', dogs),
    dueDate: new Date(2024, 6, 19),
    birthDate: new Date(2024, 6, 17),
    goHomeDate: new Date(2024, 8, 11),
    size: 8,
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
  }, { // Liberty - Twiggy
    id: '0ca167c1-b62d-45d9-a074-4c0d085ed45d',
    dam: findDog('Liberty', dogs),
    sire: findDog('Twiggy', dogs),
    // preBirthDescription: 'We\'re expecting F1B Mini Bernedoodles in the fall of this year. They should range between 20 and 45 lbs in weight as adults. We should get traditional tri color, phantom, and sable puppies. They could have curly, wavy, or straight coats.',
    preBirthDescription: 'We welcomed 6 adorable Mini Bernedoodle puppies on Tue Sep 09 2025. Liberty and Twiggy had 3 beautiful girls and 3 handsome boys. These cute pups will be ready to go to their new loving homes Tue Nov 04 2025. Pictures will be coming soon.',
    dueDate: new Date(2025, 8, 10),
    expectedPuppySize: '20 to 45 lbs',
    state: LitterState.Complete,
    size: 6,
    puppyBreed: {
      type: BreedType.Bernedoodle,
      expectedSizes: [
        BreedSize.Mini,
      ],
      class: BreedClass.F1B
    },
    expectedCoatTypes: [
      CoatType.Curly,
      CoatType.Wavy,
      CoatType.Straight,
    ],
    expectedColors: [
      CoatColorPatterns.Sable,
      CoatColorPatterns.TraditionalTriColor,
      CoatColorPatterns.Phantom,
    ],
    startingPrice: 2000,
    reservationFee: 500, // this is part of the final price not in addition.
    birthDate: new Date(2025, 8, 9),
    goHomeDate: new Date(2025, 10, 4),
    puppies: puppies.filter((puppy) => [
      'e868ec72-0326-47f5-89ac-681ac8b4368b',
      '6fe814aa-b1bf-49f6-aa77-8c95330e5d02',
      '517ce702-80e7-4fcf-b264-6ed806e854cd',
      '3c3fbd7b-b245-47b1-abc2-dd972cc70b5a',
      '47992bac-392d-4d02-adfe-6e740694e36a',
      'b44cb0b7-61fd-4bd3-9c98-a545c19940ec',
    ].includes(puppy.id)),
  }, { // Flair - Creed
    dam: findDog('Flair', dogs),
    sire: findDog('Creed', dogs),
    dueDate: new Date(2025, 11, 8),
    id: '',
    size: 9,
    expectedPuppySize: '60 lbs',
    state: LitterState.Puppy,
    puppyBreed: {
      type: BreedType.Poodle,
      expectedSizes: [
        BreedSize.Standard,
      ],
      class: BreedClass.AKC
    },
    expectedCoatTypes: [
      CoatType.Curly,
    ],
    expectedColors: [
      CoatColorPatterns.Phantom,
      CoatColorPatterns.Black,
      CoatColorPatterns.Brown,
      CoatColorPatterns.Red,
      CoatColorPatterns.Parti,
      CoatColorPatterns.Merle,
    ],
    puppies: puppies.filter((puppy) => [
      '901f2d9f-ea8d-412b-a0fd-265d41a98d6f',
      '7eb550ce-c136-4cce-92c1-2026c3e2d193',
      'b1349864-8b66-4f79-99f2-84c07f908d6d',
      'de240ff1-40c2-43b8-af46-8f8bb9b88766',
      '2e042cae-7f79-4f17-8f0c-2af8cff20a8a',
      'efa7d454-1665-43ac-9f55-26b7b656df5e',
      '1f633b4a-6ed6-431b-a09c-db17e3d13b2f',
      'cf3af56f-fb82-446d-b293-2a2a05af9ffd',
      'dc930071-5cfc-421a-942f-50536f646573',
    ].includes(puppy.id)),
    reservationFee: 500,
    startingPrice: 2000,
    goHomeDate: new Date(2026, 1, 2),
    birthDate: new Date(2025, 11, 8),
  }, { // Luna - Meeko
    dam: findDog('Luna', dogs),
    sire: findDog('Meeko', dogs),
    dueDate: new Date(2025, 11, 8),
    id: '',
    size: 8,
    expectedPuppySize: '55 lbs',
    state: LitterState.Expected,
    puppyBreed: {
      type: BreedType.Bernedoodle,
      expectedSizes: [
        BreedSize.Mini,
      ],
      class: BreedClass.Multigeneration
    },
    expectedCoatTypes: [
      CoatType.Curly,
    ],
    expectedColors: [
      CoatColorPatterns.Parti,
    ],
    reservationFee: 500,
    startingPrice: 2500,
  }, { // Holly - Bullet
    dam: findDog('Holly', dogs),
    sire: findDog('Bullet', dogs),
    dueDate: new Date(2026, 1, 28),
    id: '',
    size: 8,
    expectedPuppySize: '40 lbs',
    state: LitterState.Expected,
    puppyBreed: {
      type: BreedType.Cavapoo,
      expectedSizes: [
        BreedSize.Mini,
      ],
      class: BreedClass.Multigeneration,
    },
    expectedCoatTypes: [
      CoatType.Wavy,
    ],
    expectedColors: [
      CoatColorPatterns.TraditionalTriColor,
      CoatColorPatterns.Red,
      CoatColorPatterns.Blenheim,
      CoatColorPatterns.BlackTanPoints,
    ],
    reservationFee: 500,
    startingPrice: 2700,
  }, { // Liberty - Bogey
    dam: findDog('Liberty', dogs),
    sire: findDog('Bogey', dogs),
    dueDate: new Date(2026, 1, 28),
    id: '',
    size: 8,
    expectedPuppySize: '35 lbs',
    state: LitterState.Expected,
    puppyBreed: {
      type: BreedType.Bernedoodle,
      expectedSizes: [
        BreedSize.Mini,
      ],
      class: BreedClass.Multigeneration,
    },
    expectedCoatTypes: [
      CoatType.Wavy,
    ],
    expectedColors: [
      CoatColorPatterns.TraditionalTriColor,
      CoatColorPatterns.Red,
      CoatColorPatterns.Phantom,
      CoatColorPatterns.Sable,
    ],
    reservationFee: 500,
    startingPrice: 2500,
  }
];