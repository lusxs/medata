import LineChart from "../../components/chart/LineChart";
import DefaultLayout from "../../layout/DefaultLayout";

const StatisticsAdmin = () => {
  const chartData = [12, 19, 3, 5, 2, 3, 7];
  const chartDataWeekly = [12, 19, 3, 5];
  const chartDataMonthly = [12, 19, 3, 5, 6, 7];
  const chartDataYearly = [12, 19, 3, 5, 6, 12, 19, 3, 5, 6];

  return (
    <DefaultLayout>
      <div className="">
        <label
          htmlFor=""
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Bidang
        </label>
        <select
          name=""
          id=""
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full max-w-lg p-2.5 "
        >
          <option value="">Rehabilitas Sosial</option>
          <option value="">Perlindungan dan Jaminan Sosial</option>
          <option value="">
            Pemberdayaan Sosial dan Penanganan Fakir Miskin
          </option>
        </select>
      </div>
      <div className="grid grid-cols-2 gap-8 mt-8">
        <LineChart data={chartData} />
        <LineChart data={chartDataWeekly} />
        <LineChart data={chartDataMonthly} />
        <LineChart data={chartDataYearly} />
      </div>
    </DefaultLayout>
  );
};

export default StatisticsAdmin;
