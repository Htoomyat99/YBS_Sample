import { ImageSourcePropType } from "react-native";

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

export type SuggestedPlaceType = {
  id: number;
  name: string;
  image: ImageSourcePropType;
};

export type AvailableRoutesType = {
  id: number;
  busNo: string;
  scheduleTime: string;
  time: string; // TODO: 20 min is what time ??
  cost: number;
  fromRoute: string;
};

export type BusRoutesType = {
  id: number;
  route: string;
  isNearest?: boolean;
};
