import { useState } from "react";
import { IconButton, ButtonGroup } from "@material-tailwind/react";
// import { ArrowRightIcon, ArrowLeftIcon } from "react-icons/hi";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";

const Pagination = () => {
  const [active, setActive] = useState(1);

  const getItemProps = (index) => ({
    className: active === index ? "bg-gray-100 text-gray-900" : "",
    onClick: () => setActive(index),
  });

  const next = () => {
    if (active === 5) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  return (
    <ButtonGroup variant="outlined">
      <IconButton onClick={prev}>
        <HiArrowLeft strokeWidth={2} className="w-4 h-4" />
      </IconButton>
      <IconButton {...getItemProps(1)}>1</IconButton>
      <IconButton {...getItemProps(2)}>2</IconButton>
      <IconButton {...getItemProps(3)}>3</IconButton>
      <IconButton {...getItemProps(4)}>4</IconButton>
      <IconButton {...getItemProps(5)}>5</IconButton>
      <IconButton onClick={next}>
        <HiArrowRight strokeWidth={2} className="w-4 h-4" />
      </IconButton>
    </ButtonGroup>
  );
};

export default Pagination;
