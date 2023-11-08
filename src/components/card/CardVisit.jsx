import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const CardVisit = ({ children, sum, description }) => {
  return (
    <>
      <Card className="mt-6 w-80">
        <CardBody>
          {children}
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {description}
          </Typography>
          <Typography>{sum}</Typography>
        </CardBody>
      </Card>
    </>
  );
};

export default CardVisit;
