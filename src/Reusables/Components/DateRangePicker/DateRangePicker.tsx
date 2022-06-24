import React, { useRef, useState } from "react";
import { IoChevronDownOutline, IoCloseOutline } from "react-icons/io5";
import Styles from "./DateRangePicker.module.scss";
import { IListPeriod, ListPeriod } from "./DateRangePickerConstant";
import DatePicker from "react-datepicker";
import UseOnClickOutside from "src/Hooks/useOnClickOutside";

interface IMenuDatePicker {
  startDate: Date | null;
  endDate: Date | null;
  onChange: (e: [Date | null, Date | null]) => void;
  onCLose: () => void;
  onApply: () => void;
  isShow: boolean;
}

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [isShow, setIsShow] = useState<boolean>(false);

  const { useOnClickOutside } = UseOnClickOutside();

  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => setIsShow(false));

  const onChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const onCLose = () => {
    setIsShow(false);
  };

  const onApply = () => {
    onCLose();
  };

  const onOpen = () => {
    setIsShow(true);
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
          11 September 2018 - 14 September 2018
        </div>
        <IoChevronDownOutline className={Styles["chevron-icon"]} />
      </div>
      <MenuDatePicker
        isShow={isShow}
        startDate={startDate}
        endDate={endDate}
        onChange={onChange}
        onCLose={onCLose}
        onApply={onApply}
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
              {ListPeriod.map((item: IListPeriod) => (
                <div key={item.key} className={Styles["list"]}>
                  {item.label}
                </div>
              ))}
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
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateRangePicker;
