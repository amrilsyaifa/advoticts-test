import React, { useRef, useState, useEffect } from "react";
import { IoChevronDownOutline, IoCloseOutline } from "react-icons/io5";
import Styles from "./DateRangePicker.module.scss";
import { IListPeriod, ListPeriod } from "./DateRangePickerConstant";
import DatePicker from "react-datepicker";
import UseOnClickOutside from "src/Hooks/useOnClickOutside";
import { format } from "src/Reusables/Helpers/DateHelper";
import moment from "moment";

interface IDateRangePicker {
  startDate: Date;
  endDate: Date;
  onChange: (e: [Date, Date]) => void;
}
interface IMenuDatePicker {
  startDate: Date;
  endDate: Date;
  onChange: (e: [Date, Date]) => void;
  onCLose: () => void;
  onApply: () => void;
  isShow: boolean;
  selectedData: IListPeriod | null;
  setSelectedData: (e: IListPeriod) => void;
}

const minDate = new Date();
minDate.setMonth(minDate.getMonth() - 6);
const maxDate = new Date();
maxDate.setDate(maxDate.getDate() - 1);

const DateRangePicker: React.FC<IDateRangePicker> = ({
  startDate,
  endDate,
  onChange,
}) => {
  const [startDateState, setStartDateState] = useState<Date>(new Date());
  const [endDateState, setEndDateState] = useState<Date>(new Date());
  const [isShow, setIsShow] = useState<boolean>(false);
  const [selectedData, setSelectedData] = useState<IListPeriod | null>(null);

  const { useOnClickOutside } = UseOnClickOutside();

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setStartDateState(startDate);
    setEndDateState(endDate);
    findPeriodType(startDate, endDate);
  }, [startDate, endDate]);

  useOnClickOutside(ref, () => setIsShow(false));

  const onChangeState = (dates: [Date, Date]) => {
    const [start, end] = dates;
    setStartDateState(start);
    setEndDateState(end);

    findPeriodType(start, end);
  };

  const findPeriodType = (start: Date, end: Date) => {
    const today = new Date();
    const valueStart = today.getDate() - start?.getDate();
    const valueEnd = today.getDate() - end?.getDate();
    const result = ListPeriod.find(
      (item: IListPeriod) =>
        item.value.start === valueStart && item.value.end === valueEnd
    );
    setSelectedData(result ? result : ListPeriod[5]);
  };

  const onCLose = () => {
    setIsShow(false);
    setStartDateState(startDate);
    setEndDateState(endDate);
  };

  const onApply = () => {
    const todayDate = moment().format("MMMM-DD-YYYY");
    const selectStartDate = moment(startDateState).format("MMMM-DD-YYYY");
    const selectEndDate = moment(endDateState).format("MMMM-DD-YYYY");
    console.log("todayDate ", todayDate);
    console.log("selectStartDate ", selectStartDate);
    if (!(todayDate === selectStartDate && todayDate === selectEndDate)) {
      onChange([startDateState, endDateState]);
    }
    onCLose();
  };

  const onOpen = () => {
    setIsShow(!isShow);
  };

  const onSelectData = (e: IListPeriod) => {
    const startValue = e.value.start;
    const endValue = e.value.end;

    const start = new Date();
    start.setDate(start.getDate() - startValue);

    const end = new Date();
    end.setDate(end.getDate() - endValue);

    setStartDateState(start);
    setEndDateState(end);
    setSelectedData(e);
  };

  return (
    <div className={Styles["container"]} ref={ref}>
      <div className={Styles["custom-input-container"]} onClick={onOpen}>
        <img
          className={Styles["icon-calendar"]}
          src="/assets/images/calendar@2x.png"
          alt="icon-calendar"
        />
        <div className={Styles["text-period"]}>Period</div>
        <div className={Styles["text-date"]}>
          {format(startDateState, "DD MMMM YYYY")}
          {" - "}
          {format(endDateState, "DD MMMM YYYY")}
        </div>
        <IoChevronDownOutline className={Styles["chevron-icon"]} />
      </div>
      <MenuDatePicker
        isShow={isShow}
        startDate={startDateState}
        endDate={endDateState}
        onChange={onChangeState}
        onCLose={onCLose}
        onApply={onApply}
        selectedData={selectedData}
        setSelectedData={onSelectData}
      />
    </div>
  );
};

const MenuDatePicker: React.FC<IMenuDatePicker> = ({
  startDate,
  endDate,
  onChange,
  isShow,
  onCLose,
  onApply,
  selectedData,
  setSelectedData,
}) => {
  return (
    <div
      className={`${Styles["wrapper-card"]} ${!isShow && Styles["is-hidden"]}`}
    >
      <div className={Styles["card-menu"]}>
        <button className={Styles["button-close"]} onClick={onCLose}>
          <IoCloseOutline className={Styles["button-icon"]} />
        </button>
        <div className={Styles["content"]}>
          <div className={Styles["row-text"]}>
            <img
              className={Styles["icon-calendar"]}
              src="/assets/images/calendar@2x.png"
              alt="icon-calendar"
            />
            <div className={Styles["title"]}>Period</div>
          </div>
          <div className={Styles["row"]}>
            <div className={Styles["content-list"]}>
              {ListPeriod.map((item: IListPeriod) => {
                return (
                  <div
                    onClick={() => setSelectedData(item)}
                    key={item.key}
                    className={`${Styles["list"]} ${
                      selectedData?.key === item.key && Styles["active"]
                    }`}
                  >
                    {item.label}
                  </div>
                );
              })}
              <button className={Styles["button-apply"]} onClick={onApply}>
                Apply
              </button>
            </div>
            <div className={Styles["divider"]} />
            <DatePicker
              selected={startDate}
              startDate={startDate}
              endDate={endDate}
              onChange={onChange}
              selectsRange
              inline
              monthsShown={2}
              minDate={minDate}
              maxDate={maxDate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateRangePicker;

// react-datepicker__day react-datepicker__day--030
// react-datepicker__day react-datepicker__day--010 react-datepicker__day--disabled
