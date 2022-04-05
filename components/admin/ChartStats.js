import Pie from "../charts/pie";
import Line from "../charts/line";

export const ChartStats = ({gender_stats, signups_count}) => {
  const piedata = {
    labels: ["Male", "Female", "Others", "Not assigned"],
    datasets: [
      {
        data: [gender_stats.male ?? 0, gender_stats.female ?? 0, gender_stats.other ?? 0, gender_stats.na ?? 0],
        backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56", "#3AEB34"],
        hoverBackgroundColor: ["#36A2EB", "#FF6384", "#FFCE56", "#3AEB34"],
      },
    ],
  };

  const linedata = {
    labels: Object.keys(signups_count),
    datasets: [
      {
        label: "Registrations",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: Object.values(signups_count),
      },
    ],
  };

  const linechart_options = {
    scaleLabel : "<%= value + ' + two = ' + (Number(value) + 2)   %>",

    scaleOverride: true,
    scaleSteps: 10,
    scaleStepWidth: Math.ceil(100 / 10),
    scaleStartValue: 0
  }

  return (
    <div
      style={{ fontFamily: "Montserrat" }}
      className="px-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-16 lg:px-3 lg:py-0"
    >
      <div className="grid items-center grid-cols-1 row-gap-8 md:grid-cols-2">
        <div className=" mr-7 text-center mb-5">
          <Pie name="GENDER RATIO" data={piedata} width="auto" />
        </div>
        <div className=" mr-7    text-center  mb-5">
          <Line name="REGISTRATIONS" data={linedata} options={linechart_options} width="auto" />
        </div>
      </div>
    </div>
  );
};
