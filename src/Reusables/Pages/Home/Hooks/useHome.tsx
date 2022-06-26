import moment from "moment";
import { BestSellingSKU } from "src/Reusables/Mock/DataDummy/best-selling-sku";
import { TopCompetitorSKU } from "src/Reusables/Mock/DataDummy/top-competitor-sku";

const useHome = () => {
  const dateFormat = "DD-MM-YYYY";
  const onFetchData = (start, end) => {
    const starting = start;
    starting.setDate(starting.getDate() - 1);
    const groupingDataBestSelling = {};
    const groupingDataTopCompetitor = {};
    BestSellingSKU.filter((item) => {
      const endDate = moment(end, dateFormat);
      const startDate = moment(start, dateFormat);
      if (
        endDate.diff(moment(item.date, dateFormat), "days") >= 0 &&
        moment(item.date, dateFormat).diff(startDate, "days") >= 0
      ) {
        if (groupingDataBestSelling[item.key]) {
          const copyData = { ...groupingDataBestSelling[item.key] };
          copyData.quantitySell = copyData.quantitySell + item.quantitySell;
          groupingDataBestSelling[item.key] = copyData;
        } else {
          groupingDataBestSelling[item.key] = item;
        }
        return item;
      }
    });
    TopCompetitorSKU.filter((item) => {
      const endDate = moment(end, dateFormat);
      const startDate = moment(start, dateFormat);
      if (
        endDate.diff(moment(item.date, dateFormat), "days") >= 0 &&
        moment(item.date, dateFormat).diff(startDate, "days") >= 0
      ) {
        if (groupingDataTopCompetitor[item.key]) {
          const copyData = { ...groupingDataTopCompetitor[item.key] };
          copyData.quantitySell = copyData.quantitySell + item.quantitySell;
          groupingDataTopCompetitor[item.key] = copyData;
        } else {
          groupingDataTopCompetitor[item.key] = item;
        }
        return item;
      }
    });
    const newDataBestSelling = Object.keys(groupingDataBestSelling)
      .map(function (key) {
        return groupingDataBestSelling[key];
      })
      .sort((a, b) =>
        a.quantitySell > b.quantitySell
          ? -1
          : b.quantitySell > a.quantitySell
          ? 1
          : 0
      );
    const newDataTopCompetitor = Object.keys(groupingDataTopCompetitor)
      .map(function (key) {
        return groupingDataTopCompetitor[key];
      })
      .sort((a, b) =>
        a.quantitySell > b.quantitySell
          ? -1
          : b.quantitySell > a.quantitySell
          ? 1
          : 0
      );
    return {
      bestSelling: newDataBestSelling,
      topCompetitor: newDataTopCompetitor,
    };
  };

  return {
    onFetchData,
  };
};

export default useHome;
