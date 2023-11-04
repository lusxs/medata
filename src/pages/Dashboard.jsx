import DefaultLayout from "../layout/DefaultLayout";
import ProductList from "../components/product/ProductList";

const Dashboard = () => {
  return (
    <>
      <DefaultLayout>
        <h2>Dashboard</h2>
        <ProductList />
      </DefaultLayout>
    </>
  );
};

export default Dashboard;
