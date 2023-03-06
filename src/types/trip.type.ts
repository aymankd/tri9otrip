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
  pictures: (File | undefined)[];
}
