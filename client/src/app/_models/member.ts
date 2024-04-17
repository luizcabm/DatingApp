import { Photo } from "./photo";


export interface Member {
    country: any;
    id: number;
    userName: string;
    photoUrl: string;
    age: number;
    knownAs: string;
    created: string;
    lastActive: string;
    gender: string;
    introduction: string;
    lookingFor: string;
    interests: string;
    city: string;
    photos: Photo[];
  }