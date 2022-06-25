export interface IListPeriod {
  key: number;
  label: string;
  value: IValue;
  isOneMonth: boolean;
  isCustom: boolean;
}

interface IValue {
  from: number;
  to: number;
}

export const ListPeriod: IListPeriod[] = [
  {
    key: 1,
    label: "Today",
    value: { from: 1, to: 1 },
    isOneMonth: false,
    isCustom: false,
  },
  {
    key: 2,
    label: "Yesterday",
    value: { from: 1, to: -1 },
    isOneMonth: false,
    isCustom: false,
  },
  {
    key: 3,
    label: "Last 7 days",
    value: { from: -1, to: -7 },
    isOneMonth: false,
    isCustom: false,
  },
  {
    key: 4,
    label: "Last 30 days",
    value: { from: -1, to: -30 },
    isOneMonth: false,
    isCustom: false,
  },
  {
    key: 5,
    label: "This Month",
    value: { from: 0, to: 0 },
    isOneMonth: true,
    isCustom: false,
  },
  {
    key: 6,
    label: "Custom",
    value: { from: 0, to: 0 },
    isOneMonth: false,
    isCustom: true,
  },
];
