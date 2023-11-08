import CardVisit from "../../components/card/CardVisit";
import DefaultLayout from "../../layout/DefaultLayout";
import { FaUserFriends } from "react-icons/fa";
import { HiMiniBuildingOffice } from "react-icons/hi2";
import { dataWithTimestamps } from "../../utils/data.js";
import { useEffect, useState } from "react";

const DashboardDivision = () => {
  const division = "Rehabilitas Sosial";
  const [dataCount, setDataCount] = useState(0);
  const [dataCountByRehabilitasSosial, setDataCountByRehabilitasSosial] =
    useState(0);

  function countData() {
    setDataCount(dataWithTimestamps.length);
  }

  function countDataByRehabilitasSosial() {
    const count = dataWithTimestamps.filter(
      (item) => item.division === "Rehabilitas Sosial"
    ).length;
    setDataCountByRehabilitasSosial(count);
  }

  useEffect(() => {
    countData();
    countDataByRehabilitasSosial();
  }, []);

  return (
    <DefaultLayout>
      <div className="grid grid-cols-4 gap-8">
        <CardVisit sum={dataCount} description="Jumlah Kunjungan Hari ini">
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
      <h3 className="">Maksud Tujuan</h3>
      <div className="grid grid-cols-3 gap-4 mt-12">
        <CardVisit
          sum={dataCountByRehabilitasSosial}
          description="Jumlah Kunjungan di Bidang Rehabilitas Sosial"
        >
          <HiMiniBuildingOffice size={80} />
        </CardVisit>
        <CardVisit
          sum={dataCountByRehabilitasSosial}
          description="Jumlah Kunjungan di Bidang Perlindungan Jaminan Sosial"
        >
          <HiMiniBuildingOffice size={80} />
        </CardVisit>
        <CardVisit
          sum={dataCountByRehabilitasSosial}
          description="Jumlah Kunjungan di Bidang Penanganan Sosial dan Fakir Miskin"
        >
          <HiMiniBuildingOffice size={80} />
        </CardVisit>
      </div>
    </DefaultLayout>
  );
};

export default DashboardDivision;
