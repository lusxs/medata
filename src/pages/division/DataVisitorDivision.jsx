import DefaultLayout from "../../layout/DefaultLayout";
// import BarSkeleton from "../../components/skeleton/BarSkeleton";
import { dataWithTimestamps } from "../../utils/data";
import Table from "../../components/table/Table";

const DataVisitorDivision = () => {
  const division = "Rehabilitas Sosial";
  const tableHead = ["Name", "Email", "Bidang", "Status", "Aksi"];

  const dataFiltered = dataWithTimestamps.filter(
    (item) => item.division === division
  );
  return (
    <DefaultLayout>
      {/* <BarSkeleton count={20} /> */}
      <h2 className="mb-8 text-2xl font-bold">Data Pengunjung</h2>
      <div>
        <Table head={tableHead} body={dataFiltered} />
      </div>
    </DefaultLayout>
  );
};

export default DataVisitorDivision;
