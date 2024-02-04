import * as Genetics from './genetics';

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

export interface OFATesting {
  elbows: 'Incomplete' | 'Normal' | 'Clear',
  eyes: 'Incomplete' | 'Normal' | 'Clear',
  hips: 'Incomplete' | 'Normal' | 'Clear' | 'Mild Dysplasia',
  patellas: 'Incomplete' | 'Normal' | 'Clear',
  heart: 'Incomplete' | 'Normal' | 'Clear' | 'Mild Murmur',
  thyroid: 'Incomplete' | 'Normal' | 'Clear',
}

export interface DogTesting {
  OFA: OFATesting,
  genetics?: Genetics.GeneticTesting,
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
  testing: DogTesting,

  additionalInformation?: string[],
  studService?: StudService, // [future use] for internal studs
  link?: string,
}

export interface Puppy {
  name: string
  available: boolean
  gender: 'M' | 'F'
  description: string
  imageName: string
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
        elbows: 'Normal',
        eyes: 'Normal',
        hips: 'Normal',
        patellas: 'Normal',
        heart: 'Normal',
        thyroid: 'Normal',
      },
      genetics: {
        healthTesting: {
          SOD1: {
            disease: 'Degenerative Myelopathy, DM',
            gene: 'SOD1',
            genotype: 'GG',
            result: 'Clear',
          },
          ATF2: {
            disease: 'Neonatal Encephalopathy with Seizures, NEWS',
            gene: 'ATF2',
            genotype: 'TT',
            result: 'Clear',
          },
          SLC13A1: {
            disease: 'Osteochondrodysplasia, Skeletal Dwarfism',
            gene: 'SLC13A1',
            genotype: 'NN',
            result: 'Clear',
          },
          PRCD_Exon_1: {
            disease: 'Progressive Retinal Atrophy, prcd',
            gene: 'PRCD Exon 1',
            genotype: 'GG',
            result: 'Clear',
          },
          VWF: {
            disease: 'Von Willebrand Disease Type 1',
            gene: 'VWF',
            genotype: 'GG',
            result: 'Clear',
          },
          FGF4_chr12: {
            disease: 'Chondrodystrophy and Intervertebral Disc Disease',
            gene: 'FGF4 - chr12',
            genotype: 'N/N',
            result: 'Clear',
          },
          HEXB_Exon3: {
            disease: 'GM2 Gangliosidosis',
            gene: 'HEXB (Exon 3)',
            genotype: 'NN',
            result: 'Clear',
          },
        },
        traitTesting: {
          A_Locus: {
            result: Genetics.TraitTesting.Results.A_Locus.ayat,
            desc: Genetics.TraitTesting.Descriptions.A_Locus.ayat,
          },
          D_Locus: {
            result: Genetics.TraitTesting.Results.D_Locus.DD,
            desc: Genetics.TraitTesting.Descriptions.D_Locus.DD,
          },
          E_Locus: {
            result: Genetics.TraitTesting.Results.E_Locus.Eme,
            desc: Genetics.TraitTesting.Descriptions.E_Locus.Eme,
          },
          K_Locus: {
            result: Genetics.TraitTesting.Results.K_Locus.kyky,
            desc: Genetics.TraitTesting.Descriptions.K_Locus.kyky,
          },
          Furnishings: {
            result: Genetics.TraitTesting.Results.Furnishings.FF,
            desc: Genetics.TraitTesting.Descriptions.Furnishings.FF,
          },
          CoatLength: {
            result: Genetics.TraitTesting.Results.Coat_Length.TT,
            desc: Genetics.TraitTesting.Descriptions.Coat_Length.TT,
          },
          Shedding: {
            result: Genetics.TraitTesting.Results.Shedding.CT,
            desc: Genetics.TraitTesting.Descriptions.Shedding.CT,
          },
        },
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
        elbows: 'Normal',
        eyes: 'Normal',
        hips: 'Normal',
        patellas: 'Normal',
        heart: 'Normal',
        thyroid: 'Normal',
      },
      genetics: {
        healthTesting: {
          SOD1: {
            disease: 'Degenerative Myelopathy, DM',
            gene: 'SOD1',
            genotype: 'GG',
            result: 'Clear',
          },
          ATF2: {
            disease: 'Neonatal Encephalopathy with Seizures, NEWS',
            gene: 'ATF2',
            genotype: 'TT',
            result: 'Clear',
          },
          SLC13A1: {
            disease: 'Osteochondrodysplasia, Skeletal Dwarfism',
            gene: 'SLC13A1',
            genotype: 'NN',
            result: 'Clear',
          },
          PRCD_Exon_1: {
            disease: 'Progressive Retinal Atrophy, prcd',
            gene: 'PRCD Exon 1',
            genotype: 'GG',
            result: 'Clear',
          },
          VWF: {
            disease: 'Von Willebrand Disease Type 1',
            gene: 'VWF',
            genotype: 'GG',
            result: 'Clear',
          },
          FGF4_chr12: {
            disease: 'Chondrodystrophy and Intervertebral Disc Disease',
            gene: 'FGF4 - chr12',
            genotype: 'N/N',
            result: 'Clear',
          },
          HEXB_Exon3: {
            disease: 'GM2 Gangliosidosis',
            gene: 'HEXB (Exon 3)',
            genotype: 'NN',
            result: 'Clear',
          },
        },
        traitTesting: {
          K_Locus: {
            result: Genetics.TraitTesting.Results.K_Locus.kyky,
            desc: Genetics.TraitTesting.Descriptions.K_Locus.kyky,
          },
          A_Locus: {
            result: Genetics.TraitTesting.Results.A_Locus.atat,
            desc: Genetics.TraitTesting.Descriptions.A_Locus.atat,
          },
          D_Locus: {
            result: Genetics.TraitTesting.Results.D_Locus.DD,
            desc: Genetics.TraitTesting.Descriptions.D_Locus.DD,
          },
          E_Locus: {
            result: Genetics.TraitTesting.Results.E_Locus.EE,
            desc: Genetics.TraitTesting.Descriptions.E_Locus.EE,
          },
          Furnishings: {
            result: Genetics.TraitTesting.Results.Furnishings.FF,
            desc: Genetics.TraitTesting.Descriptions.Furnishings.FF,
          },
          CoatLength: {
            result: Genetics.TraitTesting.Results.Coat_Length.I1I1,
            desc: Genetics.TraitTesting.Descriptions.Coat_Length.I1I1,
          },
          Shedding: {
            result: Genetics.TraitTesting.Results.Shedding.nSD,
            desc: Genetics.TraitTesting.Descriptions.Shedding.nSD,
          },
          Curl: {
            result: Genetics.TraitTesting.Results.Curl.nn,
            desc: Genetics.TraitTesting.Descriptions.Curl.nn,
          },
        },
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
        name: 'Jingle',
        available: true,
        gender: 'M',
        description: "Jingle is the biggest of the litter.  He is one of the first to alert when someone walks in the room.  He loves to give puppy kisses and cuddles, but he also loves to romp around with his litter mates.",
        imageName: 'Liberty_KingKong_Jingle_4weeks',
      }, {
        name: 'Gloria',
        available: true,
        gender: 'F',
        description: "Gloria is spunky and loves to be around those she knows.  She will be perfect for someone who will be with her all day long.",
        imageName: 'Liberty_KingKong_Gloria_4weeks',
      }, {
        name: 'Licorice',
        available: true,
        gender: 'M',
        description: "Licorice is very quiet and very mellow.  He sometimes will just sit back and watch his siblings play and other times is the one trying to get another to wrestle with him.  He is very sweet and loves to give lots of kisses.  He is charting to be around 30 pounds.",
        imageName: 'Liberty_KingKong_Licorice_4weeks',
      }, {
        name: 'Maple',
        available: true,
        gender: 'F',
        description: "She is super smart.  Already, at only 4 weeks old, she is already going to the potty box to go to the bathroom.  She is very mellow and super sweet.",
        imageName: 'Liberty_KingKong_Maple_4weeks',
      }, {
        name: 'Tiny Tim',
        available: false,
        gender: 'M',
        description: "Tiny Tim is super sweet.  He loves to play and loves to cuddle.  He has a wavy coat and will be between 30-35 lbs. fully grown. ",
        imageName: 'Liberty_KingKong_TinyTim_4weeks',
      }, {
        name: 'Buddy',
        available: false,
        gender: 'M',
        description: "Buddy is a beautiful tri-color Sable.  He is almost always the first to go try and explore something new.  He is charting to be about 35 pounds.",
        imageName: 'Liberty_KingKong_Buddy_4weeks',
      }
    ]
  },
]