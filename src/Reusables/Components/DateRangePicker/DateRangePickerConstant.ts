export interface IListPeriod {
  key: number;
  label: string;
  value: IValue;
  isCustom: boolean;
}

interface IValue {
  start: number;
  end: number;
}

const date = new Date();
date.setDate(date.getDate() - 1);

export const ListPeriod: IListPeriod[] = [
  {
    key: 1,
    label: "Today",
    value: { start: 0, end: 0 },
    isCustom: false,
  },
  {
    key: 2,
    label: "Yesterday",
    value: { start: 1, end: 1 },
    isCustom: false,
  },
  {
    key: 3,
    label: "Last 7 days",
    value: { start: 7, end: 1 },
    isCustom: false,
  },
  {
    key: 4,
    label: "Last 30 days",
    value: { start: 30, end: 1 },
    isCustom: false,
  },
  {
    key: 5,
    label: "This Month",
    value: { start: date.getDate(), end: 1 },
    isCustom: false,
  },
  {
    key: 6,
    label: "Custom",
    value: { start: 8, end: 1 },
    isCustom: false,
  },
];
