export type YbsGuideDataType = {
  id: number;
  busNo: string;
  routeColor: string;
  startPoint: string;
  endPoint: string;
};

export type NotiHeaderType = {
  id: number;
  title: string;
};

export type NotiType = {
  id: number;
  date: string;
  type: string;
  title: string;
  content: string;
};
