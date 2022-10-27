import { Pie } from "react-chartjs-2";
import { records } from "../../data/MockData";
import checkPercentage from "../../data/MockData";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

let percentageData = [checkPercentage(records), 100 - checkPercentage(records)];
export const data = {
  labels: ["Edited Records", "Total Records"],
  datasets: [
    {
      data: percentageData,
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
      borderWidth: 1,
    },
  ],
};

export default function Piechart() {
  return <Pie data={data} />;
}
