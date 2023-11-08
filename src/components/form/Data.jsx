import { useState } from "react";
import { Input, Typography, Button } from "@material-tailwind/react";
import AlertError from "../alert/AlertError";
import ModalSuccess from "../modal/ModalSuccess";
import ModalError from "../modal/ModalError";
import Form from "../../services/Form";

function Data() {
  const dataService = new Form();
  const [data, setData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    profession: "",
    address: "",
    division: "",
    purpose: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(0);

  const handleAddData = async (e) => {
    e.preventDefault();
    try {
      let isError = false;
      Object.keys(data).forEach((key) => {
        if (data[key] === "") {
          isError = true;
        }
      });

      if (isError) {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 2500);
      } else {
        setLoading(true);
        const isSuccess = await dataService.createData(data);

        if (isSuccess) {
          setData({
            name: "",
            email: "",
            phoneNumber: "",
            profession: "",
            address: "",
            division: "",
            purpose: "",
          });

          setLoading(false);
          setSuccess(1);
          setTimeout(() => {
            setSuccess(0);
          }, 2500);
        } else {
          setLoading(false);
          setData({
            name: "",
            email: "",
            phoneNumber: "",
            profession: "",
            address: "",
            division: "",
            purpose: "",
          });
          setSuccess(2);
          setTimeout(() => {
            setSuccess(0);
          }, 2500);
        }
      }
    } catch (error) {
      console.log("Terjadi kesalahan:", error);
      setSuccess(2);
      setTimeout(() => {
        setSuccess(0);
      }, 2500);
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    setData({
      name: "",
      email: "",
      phoneNumber: "",
      profession: "",
      address: "",
      division: "",
      purpose: "",
    });
  };

  return (
    <>
      {success === 0 ? "" : ""}
      {success === 1 ? <ModalSuccess /> : ""}
      {success === 2 ? <ModalError /> : ""}
      <div className="flex items-center justify-center w-screen h-screen bg-gray-100">
        <form
          onSubmit={handleAddData}
          className="flex flex-col items-center justify-center p-6 space-y-4 bg-white rounded shadow-md w-96"
        >
          <h2 className="text-2xl text-center">Form Pengisian Data</h2>
          <Input
            type="text"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            color="lightBlue"
            size="regular"
            outline={true}
            label="Nama"
          />
          <Input
            type="text"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            color="lightBlue"
            size="regular"
            outline={true}
            label="Email"
          />
          <Input
            type="text"
            value={data.phoneNumber}
            onChange={(e) => setData({ ...data, phoneNumber: e.target.value })}
            color="lightBlue"
            size="regular"
            outline={true}
            label="Nomor kontak"
          />
          <Input
            type="text"
            value={data.profession}
            onChange={(e) => setData({ ...data, profession: e.target.value })}
            color="lightBlue"
            size="regular"
            outline={true}
            label="Pekerjaan"
          />
          <Input
            type="text"
            value={data.address}
            onChange={(e) => setData({ ...data, address: e.target.value })}
            color="lightBlue"
            size="regular"
            outline={true}
            label="Alamat"
          />
          <Input
            type="text"
            value={data.division}
            onChange={(e) => setData({ ...data, division: e.target.value })}
            color="lightBlue"
            size="regular"
            outline={true}
            label="Divisi"
          />
          <Input
            type="text"
            value={data.purpose}
            onChange={(e) => setData({ ...data, purpose: e.target.value })}
            color="lightBlue"
            size="regular"
            outline={true}
            label="Tujuan"
          />

          {error ? <AlertError /> : ""}
          <div className="grid w-full grid-cols-2 gap-x-4">
            <Button variant="outlined" className="" onClick={handleReset}>
              Bersihkan
            </Button>
            <Button variant="filled" className="btn btn-primary" type="submit">
              {loading ? (
                <div role="status">
                  <span className="text-white sr-only">Loading...</span>
                </div>
              ) : (
                <span>Simpan</span>
              )}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Data;
