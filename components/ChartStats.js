import Pie from "../components/charts/pie";
import Bar from "../components/charts/bar";
import Line from "../components/charts/line";

export const ChartStats = () => {
  const piedata = {
    labels: ["Female", "Other", "Male"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };
  const linedata = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
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
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  return (
    <div
      style={{ fontFamily: "Montserrat" }}
      className="px-10 min-h-screen mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-16 lg:px-3 lg:py-0"
    >
      <div className="grid items-center grid-cols-1 row-gap-8 md:grid-cols-2">
        <div className=" mr-7    text-center mb-5">
          <Pie name="GENDER RATIO" data={piedata} width="auto" />
        </div>
        <div className=" mr-7    text-center  mb-5">
          <Line name="REGISTRATIONS" data={linedata} width="auto" />
        </div>
      </div>
    </div>
  );
};
