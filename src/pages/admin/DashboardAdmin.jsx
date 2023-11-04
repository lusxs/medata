import CardVisit from "../../components/card/CardVisit";
import DefaultLayout from "../../layout/DefaultLayout";
import { FaUserFriends } from "react-icons/fa";
import { HiMiniBuildingOffice } from "react-icons/hi2";

const DashboardAdmin = () => {
  return (
    <DefaultLayout>
      <div className="grid grid-cols-2 gap-8">
        <CardVisit sum={10} description="Jumlah Kunjungan Hari ini">
          <FaUserFriends size={80} />
        </CardVisit>
        <CardVisit sum={10} description="Jumlah Kunjungan Hari ini">
          <FaUserFriends size={80} />
        </CardVisit>
        <CardVisit sum={10} description="Jumlah Kunjungan Hari ini">
          <FaUserFriends size={80} />
        </CardVisit>
        <CardVisit sum={10} description="Jumlah Kunjungan Hari ini">
          <FaUserFriends size={80} />
        </CardVisit>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-12">
        <CardVisit sum={10} description="Jumlah Kunjungan Hari ini">
          <HiMiniBuildingOffice size={80} />
        </CardVisit>
        <CardVisit sum={10} description="Jumlah Kunjungan Hari ini">
          <HiMiniBuildingOffice size={80} />
        </CardVisit>
        <CardVisit sum={10} description="Jumlah Kunjungan Hari ini">
          <HiMiniBuildingOffice size={80} />
        </CardVisit>
      </div>
    </DefaultLayout>
  );
};

export default DashboardAdmin;
