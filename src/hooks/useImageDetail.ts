import { Dog, dogs, LitterInfo, litters, puppies, Puppy } from '../dogInfo';
import imageDetailData from '../json/imageDetailDictionary.json';

export enum DetailRecordType {
  Dog = 'dog',
  Puppy = 'puppy',
  Litter = 'litter',
}

interface ImageDetailRecord {
  id: string,
  recordId: string,
  type: string,
}

export interface ImageDetail {
  detailId: string,
  type: DetailRecordType,
}

export interface DogImageDetail extends ImageDetail {
  dogId: string, // Dog.id (see dogInfo.ts)
  record?: Dog
  litters: LitterInfo[],
}

export interface PuppyImageDetail extends ImageDetail {
  puppyId: string, // Puppy.id (see dogInfo.ts)
  record?: Puppy,
  litter?: LitterInfo,
}

export interface LitterImageDetail extends ImageDetail {
  litterId: string, // LitterInfo.id (see dogInfo.ts)
  record?: LitterInfo
}

const getImageDetail = (imageDetailId: string): DogImageDetail | PuppyImageDetail | LitterImageDetail | undefined => {
  const imageDetailRecord: ImageDetailRecord | undefined = imageDetailData.find((imageDetail) => imageDetail.id === imageDetailId);
  
  if(!imageDetailRecord) return;

  const imageDetail = 
    imageDetailRecord.type === DetailRecordType.Dog ? generateDogImageDetail(imageDetailRecord) : 
    imageDetailRecord.type === DetailRecordType.Puppy ? generatePuppyImageDetail(imageDetailRecord) :
    imageDetailRecord.type === DetailRecordType.Litter ? generateLitterImageDetail(imageDetailRecord) :
    undefined;

  return imageDetail;
}

const generateDogImageDetail = (imageDetailRecord: ImageDetailRecord): DogImageDetail => {
  const detail = {
    detailId: imageDetailRecord.id,
    type: imageDetailRecord.type as DetailRecordType,
    dogId: imageDetailRecord.recordId,
    record: dogs.find((dog) => dog.id === imageDetailRecord.recordId),
    litters: litters.filter((litter) => 
      litter.dam.id === imageDetailRecord.recordId ||
      litter.sire.id === imageDetailRecord.recordId  
    ),
  }

  return detail;
};

const generatePuppyImageDetail = (imageDetailRecord: ImageDetailRecord): PuppyImageDetail => {
  const detail = {
    detailId: imageDetailRecord.id,
    type: imageDetailRecord.type as DetailRecordType,
    puppyId: imageDetailRecord.recordId,
    record: puppies.find((puppy) => puppy.id === imageDetailRecord.recordId),
    litter: litters.find((litter) => litter.puppies?.map((puppy) => puppy.id).includes(imageDetailRecord.recordId)),
  }
  return detail
}

const generateLitterImageDetail = (imageDetailRecord: ImageDetailRecord): LitterImageDetail => {
  const detail = {
    detailId: imageDetailRecord.id,
    type: imageDetailRecord.type as DetailRecordType,
    litterId: imageDetailRecord.recordId,
    record: litters.find((litter) => litter.id === imageDetailRecord.recordId),
  };
  return detail;
}

export default function useImageDetail() {
  return {
    getImageDetail,
  }
}