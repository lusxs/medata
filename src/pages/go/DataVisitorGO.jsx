import DefaultLayout from "../../layout/DefaultLayout";
import { dataWithTimestamps } from "../../utils/data";
import Table from "../../components/table/Table";

const DataVisitorGO = () => {
  const tableHead = ["Name", "Email", "Bidang", "Status", "Aksi"];

  return (
    <DefaultLayout>
      <h2 className="mb-8 text-2xl font-bold">Data Pengunjung</h2>
      <div>
        <Table head={tableHead} body={dataWithTimestamps} />
      </div>
    </DefaultLayout>
  );
};

export default DataVisitorGO;
