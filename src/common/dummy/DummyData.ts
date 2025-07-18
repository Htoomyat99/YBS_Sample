import { BusRoutesType, DestinationType } from "./dummyType";

export const YbsGuideData = [
  {
    id: 1,
    busNo: "1",
    routeColor: "#146BED",
    startPoint: "လှည်းကူးစျေး",
    endPoint: "ဇဝန",
  },
  {
    id: 2,
    busNo: "2",
    routeColor: "#D72638",
    startPoint: "ယုဇနဉယာဉ်",
    endPoint: "အောင်မင်္ဂလာအဝေးပြေး",
  },
  {
    id: 3,
    busNo: "3",
    routeColor: "#D72638",
    startPoint: "ယုဇနဉယာဉ်",
    endPoint: "တာမွေ",
  },
  {
    id: 4,
    busNo: "4",
    routeColor: "#D72638",
    startPoint: "ရတနာနှင်းဆီအိမ်ယာ",
    endPoint: "ဆူးလေ",
  },
  {
    id: 5,
    busNo: "5",
    routeColor: "#D72638",
    startPoint: "ဒဂုံဆိပ်ကမ်း​ (၁၆၈ ရပ်ကွက်)",
    endPoint: "ညောင်တန်း",
  },
  {
    id: 6,
    busNo: "6",
    routeColor: "#D72638",
    startPoint: "ဒဂုံဆိပ်ကမ်း​ (၈၉ လမ်းဆုံ)",
    endPoint: "ဒဂုံအိမ်ယာအဝေးပြေး",
  },
  {
    id: 7,
    busNo: "7",
    routeColor: "#D72638",
    startPoint: "တောင်ဒဂုံ",
    endPoint: "ဆူးလေ",
  },
  {
    id: 8,
    busNo: "8",
    routeColor: "#6750A4",
    startPoint: "ဒဂုံဆိပ်ကမ်း​ (၁၆၈ ရပ်ကွက်)",
    endPoint: "လသာ",
  },
  {
    id: 9,
    busNo: "6",
    routeColor: "#D72638",
    startPoint: "ဒဂုံဆိပ်ကမ်း​ (၈၉ လမ်းဆုံ)",
    endPoint: "ဒဂုံအိမ်ယာအဝေးပြေး",
  },
  {
    id: 10,
    busNo: "7",
    routeColor: "#D72638",
    startPoint: "တောင်ဒဂုံ",
    endPoint: "ဆူးလေ",
  },
  {
    id: 11,
    busNo: "8",
    routeColor: "#6750A4",
    startPoint: "ဒဂုံဆိပ်ကမ်း​ (၁၆၈ ရပ်ကွက်)",
    endPoint: "လသာ",
  },
];

export const NotiHeaderData = [
  { id: 1, title: "General" },
  { id: 2, title: "(Trip/Journey)" },
  { id: 3, title: "Bus Service" },
  { id: 4, title: "System" },
];

export const NotiData = [
  {
    id: 1,
    date: "26.7.25",
    type: "General",
    title: "Some bus line are being stopped.",
    content:
      "Some bus services have been suspended due to an emergency. Please be careful when traveling. Hang belaying guns guns chase nest black. To rum coxswain jack killick line. Quarterdeck tender nest seven coxswain measured fluke piracy piracy sheet. Gunwalls hands no red fluke bounty mizzen davy. Shrouds chandler gaff down aft. Or spot crack fer coxswain yawl pinnace hands crack. Round spirits hands grog tender seven piracy warp heave the. Me aft sloop no coast man. A nipperkin bilged rum shrouds.",
  },
  {
    id: 2,
    date: "26.7.25",
    type: "General",
    title: "A special program",
    content:
      "Specail promotion for YBS card users. See details in the app. User can get 10 percent off on all bus fares. And also, you can get 5 percent off on all bus fares if you use YBS card. This is a limited time offer, so don't miss out! Promotion will end on 26.8.25.",
  },
  {
    id: 3,
    date: "26.7.25",
    type: "(Trip/Journey)",
    title: "The stop will soon be reached.",
    content:
      "You will arrive your destination soonn. Please be ready to get off the bus.",
  },
  {
    id: 4,
    date: "26.7.25",
    type: "(Trip/Journey)",
    title: "Arrived at the destination.",
    content:
      "You have reached your destination. Please be careful when getting off the bus.",
  },
  {
    id: 5,
    date: "26.7.25",
    type: "(Trip/Journey)",
    title: "The trip is over.",
    content:
      "The trip is over. Thank you for using YBS. We hope you had a pleasant journey. If you have any feedback, please let us know.",
  },
  {
    id: 6,
    date: "26.7.25",
    type: "Bus Service",
    title: "New bus lines emerge.",
    content:
      "A new bus route (6) has been introduced. It runs from Dagon Port (89 Street) to Dagon Port (168 Ward). The bus will run every 15 minutes during peak hours and every 30 minutes during off-peak hours. The bus will stop at all major bus stops along the route.",
  },
  {
    id: 7,
    date: "26.7.25",
    type: "Bus Service",
    title: "Route changes or closures",
    content:
      "Route (6) has temporarily changed ites route due to road construction. The bus will now run from Dagon Port (89 Street) to Dagon Port (168 Ward) via Dagon Port (89 Street). The bus will stop at all major bus stops along the route. The bus will run every 15 minutes during peak hours and every 30 minutes during off-peak hours.",
  },
  {
    id: 8,
    date: "26.7.25",
    type: "System",
    title: "System maintenance",
    content:
      "The YBS app will be undergoing system maintenance on 26.7.25 from 12:00 AM to 6:00 AM. During this time, the app will be unavailable. We apologize for any inconvenience this may cause.",
  },
  {
    id: 9,
    date: "26.7.25",
    type: "System",
    title: "New app update released",
    content:
      "A new version of the YBS app is available. The update includes bug fixes and performance improvements. Please update the app to the latest version to enjoy the best experience.",
  },
];

export const SuggestedPlace = [
  {
    id: 1,
    name: "City Mall (Seint John)",
    image: require("@/assets/images/city-mall.png"),
  },
  {
    id: 2,
    name: "Junction City",
    image: require("@/assets/images/junction-city.png"),
  },
  {
    id: 3,
    name: "Time City",
    image: require("@/assets/images/time-city.png"),
  },
];

export const AvailableRoutes = [
  {
    id: 1,
    busNo: "78",
    scheduleTime: "09:45",
    time: "20",
    cost: 400,
    fromRoute: "Seik Pyoe Yay",
  },
  {
    id: 2,
    busNo: "37",
    scheduleTime: "09:55",
    time: "20",
    cost: 400,
    fromRoute: "Seik Pyoe Yay",
  },
  {
    id: 3,
    busNo: "105",
    scheduleTime: "10:05",
    time: "20",
    cost: 400,
    fromRoute: "Seik Pyoe Yay",
  },
  {
    id: 4,
    busNo: "106",
    scheduleTime: "10:15",
    time: "20",
    cost: 400,
    fromRoute: "Seik Pyoe Yay",
  },
];

export const BusRoutes: BusRoutesType[] = [
  { id: 1, route: "Hledan - U Tun Lin Chang St" },
  { id: 2, route: "Seik Pyoe Yay", isNearest: true },
  { id: 3, route: "Han Thar Waddy Awaine" },
  { id: 4, route: "Mahar Myaing" },
  { id: 5, route: "Mayenigone" },
  { id: 6, route: "Helpin" },
];

export const Destination: DestinationType[] = [
  { id: 1, route: "" },
  { id: 2, route: "Seik Pyoe Yay" },
  { id: 3, route: "Han Thar Waddy Awaine" },
  { id: 4, route: "Mahar Myaing" },
  { id: 5, route: "Maynigone" },
  { id: 6, route: "Helpin" },
  { id: 7, route: "Bago Club" },
  { id: 8, route: "City Mall" },
];

export const markersGoogle = [
  {
    coordinates: { latitude: 16.80528, longitude: 96.15611 },
    title: "Yangon",
    snippet: "Yangon",
    draggable: true,
  },
  {
    coordinates: { latitude: 49.259133, longitude: -123.10079 },
    title: "49th Parallel Café & Lucky's Doughnuts - Main Street",
    snippet: "49th Parallel Café & Lucky's Doughnuts - Main Street",
    draggable: true,
  },
  {
    coordinates: { latitude: 49.268034, longitude: -123.154819 },
    title: "49th Parallel Café & Lucky's Doughnuts - 4th Ave",
    snippet: "49th Parallel Café & Lucky's Doughnuts - 4th Ave",
    draggable: true,
  },
  {
    coordinates: { latitude: 49.286036, longitude: -123.12303 },
    title: "49th Parallel Café & Lucky's Doughnuts - Thurlow",
    snippet: "49th Parallel Café & Lucky's Doughnuts - Thurlow",
    draggable: true,
  },
  {
    coordinates: { latitude: 49.311879, longitude: -123.079241 },
    title: "49th Parallel Café & Lucky's Doughnuts - Lonsdale",
    snippet: "49th Parallel Café & Lucky's Doughnuts - Lonsdale",
    draggable: true,
  },
  {
    coordinates: {
      latitude: 49.27235336018808,
      longitude: -123.13455838338278,
    },
    title: "A La Mode Pie Café - Granville Island",
    snippet: "A La Mode Pie Café - Granville Island",
    draggable: true,
  },
];

export const polylineCoordinates = [
  { latitude: 49.259122, longitude: -123.10079 },
  { latitude: 49.268011, longitude: -123.154819 },
  { latitude: 49.286055, longitude: -123.12303 },
  { latitude: 49.311866, longitude: -123.079241 },
];
