namespace HealthTesting {
  interface GeneticHealthTestResult {
    disease: string,
    gene: string,
    genotype: string,
    result: 'Clear',
  }
  
  export interface SOD1 extends GeneticHealthTestResult {
    disease: 'Degenerative Myelopathy, DM',
    gene: 'SOD1',
    genotype: 'GG',
  }
  
  export interface ATF2 extends GeneticHealthTestResult {
    disease: 'Neonatal Encephalopathy with Seizures, NEWS',
    gene: 'ATF2',
    genotype: 'TT',
  }
  
  export interface SLC13A1 extends GeneticHealthTestResult {
    disease: 'Osteochondrodysplasia, Skeletal Dwarfism',
    gene: 'SLC13A1',
    genotype: 'NN',
  }
  
  export interface PRCD_Exon_1 extends GeneticHealthTestResult {
    disease: 'Progressive Retinal Atrophy, prcd',
    gene: 'PRCD Exon 1',
    genotype: 'GG',
  }
  
  export interface VWF extends GeneticHealthTestResult {
    disease: 'Von Willebrand Disease Type 1',
    gene: 'VWF',
    genotype: 'GG',
  }
  
  export interface FGF4_char12 extends GeneticHealthTestResult {
    disease: 'Chondrodystrophy and Intervertebral Disc Disease',
    gene: 'FGF4 - chr12',
    genotype: 'N/N',
  }
  
  export interface HEXB_Exon_3 extends GeneticHealthTestResult {
    disease: 'GM2 Gangliosidosis',
    gene: 'HEXB (Exon 3)',
    genotype: 'NN',
  }
}

export namespace TraitTesting {
  export namespace Results {
    export enum A_Locus {
      ayat = 'ay/at',
      atat = 'at/at',
    }

    export enum K_Locus {
      kyky = 'ky/ky', // also n/n
    }

    export enum D_Locus {
      DD = 'DD',
    }

    export enum E_Locus {
      Eme = 'Eme',
      EE = 'EE',
    }

    export enum Furnishings {
      FF = 'FF',
    }

    export enum Curl {
      nn = 'n/n',

    }

    export enum Coat_Length {
      TT = 'TT',
      I1I1 = 'I1/I1',
    }

    export enum Shedding {
      CT = 'CT',
      nSD = 'n/SD',
    }
  }

  export namespace Descriptions {
    export enum K_Locus {
      kyky = 'More likely to have a patterned hair coat.', // also n/n
    }

    export enum A_Locus {
      ayat = 'Fawn sable coat color pattern.',
      atat = 'Dog has two copies fo the gene causing tan points.',
    }

    export enum D_Locus {
      DD = 'Dark areas of hair and skin are not lightened.',
    }

    export enum E_Locus {
      Eme = 'Can have a melanistic mask.',
      EE = 'Dog is negative for cream/yellow and negative for mask.'
    }

    export enum Furnishings {
      FF = 'Likely furnished (mustache, beard, and/or eyebrows).',
    }
    
    export enum Curl {
      nn = 'The dog is negative for the hair curl allele. The dog will have non-curly hair, and will always pass on the allele responsible for non-curly hair to any offspring',
    }
    
    export enum Coat_Length {
      TT = 'Likely long coat.',
      I1I1 = 'Two copies of the long-hair allele, dog will have longer than average hair per the breed standard.',
    }
    
    export enum Shedding {
      CT = 'Likely light shedding',
      nSD = 'Dog carries one copy of the shedding allele. The dog will have an average propensity towards shedding.',
    }
  }
}

export interface GeneticTesting {
  healthTesting: {
    SOD1: HealthTesting.SOD1,
    ATF2: HealthTesting.ATF2,
    SLC13A1: HealthTesting.SLC13A1,
    PRCD_Exon_1: HealthTesting.PRCD_Exon_1,
    VWF: HealthTesting.VWF,
    FGF4_chr12: HealthTesting.FGF4_char12,
    HEXB_Exon3: HealthTesting.HEXB_Exon_3,
  },
  traitTesting: {
    A_Locus: {
      result: TraitTesting.Results.A_Locus,
      desc: TraitTesting.Descriptions.A_Locus,
    },
    D_Locus: {
      result: TraitTesting.Results.D_Locus,
      desc: TraitTesting.Descriptions.D_Locus,
    },
    E_Locus: {
      result: TraitTesting.Results.E_Locus,
      desc: TraitTesting.Descriptions.E_Locus,
    },
    K_Locus: {
      result: TraitTesting.Results.K_Locus,
      desc: TraitTesting.Descriptions.K_Locus,
    },
    Furnishings: {
      result: TraitTesting.Results.Furnishings,
      desc: TraitTesting.Descriptions.Furnishings,
    },
    CoatLength: {
      result: TraitTesting.Results.Coat_Length,
      desc: TraitTesting.Descriptions.Coat_Length,
    },
    Shedding: {
      result: TraitTesting.Results.Shedding,
      desc: TraitTesting.Descriptions.Shedding,
    },
    Curl?: {
      result: TraitTesting.Results.Curl,
      desc: TraitTesting.Descriptions.Curl,
    },
  },
}