import moment from "moment";

export interface IListPeriod {
  id: number;
  label: string;
  value: IValue;
  isCustom: boolean;
  key: string;
}

interface IValue {
  start: number;
  end: number;
}

const today = moment().format("YYYY-MM-DD");
const date = new Date(today);
date.setDate(date.getDate() - 1);

export const ListPeriod: IListPeriod[] = [
  {
    id: 1,
    label: "Today",
    value: { start: 0, end: 0 },
    isCustom: false,
    key: "today",
  },
  {
    id: 2,
    label: "Yesterday",
    value: { start: 1, end: 1 },
    isCustom: false,
    key: "yesterday",
  },
  {
    id: 3,
    label: "Last 7 days",
    value: { start: 7, end: 1 },
    isCustom: false,
    key: "last7Day",
  },
  {
    id: 4,
    label: "Last 30 days",
    value: { start: 30, end: 1 },
    isCustom: false,
    key: "last30Day",
  },
  {
    id: 5,
    label: "This Month",
    value: { start: date.getDate(), end: 1 },
    isCustom: false,
    key: "thisMonth",
  },
  {
    id: 6,
    label: "Custom",
    value: { start: 8, end: 1 },
    isCustom: true,
    key: "custom",
  },
];
