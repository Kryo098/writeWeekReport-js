const writeWeekReport = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const date = now.getDate();
  const day = now.getDay();
  const monday = new Date(year, month, date - day + 1);
  const friday = new Date(year, month, date - day + 5);
  const weekMonday = monday.getMonth() + 1 + "月" + monday.getDate() + "日";
  const weekFriday = friday.getMonth() + 1 + "月" + friday.getDate() + "日";
  const week = weekMonday + "~" + weekFriday;
  const write = "の週報書け";

  console.log(week + write);
};

writeWeekReport();
