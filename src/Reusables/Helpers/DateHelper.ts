import moment from "moment";
import {
  IListPeriod,
  ListPeriod,
} from "../Components/DateRangePicker/DateRangePickerConstant";

moment.locale("LLLL");

export const format = (d: Date, formatStr: string) =>
  moment(d).format(formatStr);

export const findPeriodList = (start: Date, end: Date) => {
  const todays = moment();
  const starting = moment(start);
  const ending = moment(end);
  const valueStart = todays.diff(starting, "days");
  const valueEnd = todays.diff(ending, "days");
  const result = ListPeriod.find(
    (item: IListPeriod) =>
      item.value.start === valueStart && item.value.end === valueEnd
  );
  return result;
};
