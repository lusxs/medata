import DefaultLayout from "../../layout/DefaultLayout";
import BarSkeleton from "../../components/skeleton/BarSkeleton";

const DataAccount = () => {
  return (
    <DefaultLayout>
      <BarSkeleton count={20} />
    </DefaultLayout>
  );
};

export default DataAccount;
