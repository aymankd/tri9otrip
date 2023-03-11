export interface TripDto {
  _id?: string;
  name: string;
  emoji: string;
  description: string;
  steps: TripStep[];
}

export interface TripStep {
  locationName: string;
  isTent: boolean;
  pictures: (string | undefined)[];
  nextStepInfo?: NextStepInfo;
}

export interface NextStepInfo {
  budget: number;
  transport: TransportTypes;
}

export interface TransportTypes {
  car?: true;
  train?: true;
  walk?: true;
  bike?: true;
  bus?: true;
  airplane?: true;
}
