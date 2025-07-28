export type Data = [
  {
    name: string;
    location: string;
    incidents: [
      {
        type: string;
        tsStart: Date;
        tsEnd: Date;
        thumbnailUrl: string;
        resolved: boolean;
      }
    ];
  }
];
