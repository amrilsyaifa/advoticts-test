import moment from "moment";

moment.locale("LLLL");

export const format = (d: Date, formatStr: string) =>
  moment(d).format(formatStr);
