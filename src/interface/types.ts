type Incidents = {
  id? : number,
  type: string;
  tsStart: Date;
  tsEnd: Date;
  thumbnailUrl: string;
  resolved: boolean;
};

export type Data = {
  name: string;
  location: string;
  incidents: Incidents[];
}[];
