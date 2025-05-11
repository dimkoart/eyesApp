export const formatChartData = (prices: [number, number][]) => {
  const dayMap = new Map<string, number>();

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  for (let [timestamp, price] of prices) {
    const date = new Date(timestamp);
    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const label = `${day} ${month}`;

    dayMap.set(label, price);
  }

  const labels = Array.from(dayMap.keys()).slice(3);
  const data = Array.from(dayMap.values());

  return {
    labels,
    datasets: [
      {
        data,
      },
    ],
  };
};
