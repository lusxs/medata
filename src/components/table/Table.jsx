import { Card, Typography, Input } from "@material-tailwind/react";
import { ImSearch } from "react-icons/im";
import Pagination from "../pagination/Pagination";
import PropTypes from "prop-types";

const Table = ({ head, body }) => {
  return (
    <>
      <Card className="w-full h-full p-4 overflow-scroll">
        <div className="flex justify-end w-full mb-4">
          <div className="w-72">
            <Input label="Cari" icon={<ImSearch />} />
          </div>
        </div>
        <table className="w-full text-left table-auto min-w-max">
          <thead>
            <tr>
              {head.map((headItem) => (
                <th
                  key={headItem}
                  className="p-4 border-b border-blue-gray-100 bg-blue-gray-50"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none text-center opacity-70"
                  >
                    {headItem}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {body
              .slice(0, 10)
              .map(({ name, email, division, status }, index) => {
                const isLast = index === body.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={name}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {name}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal text-center"
                      >
                        {email}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal text-center"
                      >
                        {division}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal text-center"
                      >
                        {status}
                      </Typography>
                    </td>
                    <td className={`${classes} grid grid-cols-3`}>
                      <Typography
                        as="a"
                        href="#"
                        variant="small"
                        color="blue-gray"
                        className="font-medium hover:underline"
                      >
                        Selesai
                      </Typography>
                      <Typography
                        as="a"
                        href="#"
                        variant="small"
                        color="blue-gray"
                        className="font-medium hover:underline"
                      >
                        Batal
                      </Typography>
                      <Typography
                        as="a"
                        href="#"
                        variant="small"
                        color="blue-gray"
                        className="font-medium hover:underline"
                      >
                        Detail
                      </Typography>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <div className="flex justify-center mt-4">
          <Pagination />
        </div>
      </Card>
    </>
  );
};

Table.propTypes = {
  head: PropTypes.arrayOf(PropTypes.string).isRequired,
  body: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Table;
