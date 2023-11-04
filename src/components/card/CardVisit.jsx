const CardVisit = ({ children, sum, description }) => {
  return (
    <>
      <div className="rounded-lg box__shadow__card__visit">
        <div className="grid grid-cols-2 p-4">
          <div>
            <h3 className="text-4xl font-bold">{sum}</h3>
            <p className="mt-2">{description}</p>
          </div>
          <div className="self-center">{children}</div>
        </div>
        <div className="h-10 bg-red-500 rounded-b-lg "></div>
      </div>
    </>
  );
};

export default CardVisit;
