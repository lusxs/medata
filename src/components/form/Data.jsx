import { useState } from "react";
import Form from "../../services/Form";
import AlertError from "../alert/AlertError";
import ModalSuccess from "../modal/ModalSuccess";
import ModalError from "../modal/ModalError";

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
      // Membuat variabel untuk mengecek keadaan error
      let isError = false;

      // Memeriksa setiap field data
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
        console.log(isSuccess);

        if (isSuccess) {
          // Mengosongkan data setelah berhasil
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
          // Menangani error dari permintaan pembuatan data
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
          console.log("Gagal membuat data");
          setSuccess(2);
          setTimeout(() => {
            setSuccess(0);
          }, 2500);
        }
      }
    } catch (error) {
      // Menangani error dari blok try-catch
      console.log("Terjadi kesalahan:", error);
      setSuccess(2);
      setTimeout(() => {
        setSuccess(0);
      }, 2500);
    }
  };

  const handleReset = (e) => {
    try {
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
    } catch (error) {
      console.log(error);
    }
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
          <input
            type="text"
            placeholder="Masukan nama Anda"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            className="w-full input input-bordered"
          />
          <input
            type="text"
            placeholder="Masukan email Anda"
            value={data.email}
            className="w-full input input-bordered"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <input
            type="text"
            placeholder="Masukan nomor kontak Anda"
            value={data.phoneNumber}
            onChange={(e) => setData({ ...data, phoneNumber: e.target.value })}
            className="w-full input input-bordered"
          />
          <input
            type="text"
            placeholder="Masukan pekerjaan Anda"
            value={data.profession}
            onChange={(e) => setData({ ...data, profession: e.target.value })}
            className="w-full input input-bordered"
          />
          <input
            type="text"
            placeholder="Masukan alamat Anda"
            value={data.address}
            onChange={(e) => setData({ ...data, address: e.target.value })}
            className="w-full input input-bordered"
          />
          <input
            type="text"
            placeholder="Masukan tujuan Anda"
            value={data.division}
            onChange={(e) => setData({ ...data, division: e.target.value })}
            className="w-full input input-bordered"
          />
          <input
            type="text"
            placeholder="Masukan maksud tujuan Anda"
            value={data.purpose}
            onChange={(e) => setData({ ...data, purpose: e.target.value })}
            className="w-full input input-bordered"
          />
          {error ? <AlertError /> : ""}
          <div className="grid w-full grid-cols-2 gap-x-4">
            <button className="btn" onClick={handleReset}>
              Bersihkan
            </button>
            <button className="btn btn-primary" type="submit">
              {loading ? (
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="inline w-6 h-6 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                <span>Simpan</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Data;
