import React from "react";

interface Props {
  cardHeading: string;
  cardNumber: number;
}

const OverviewCard = ({ cardHeading, cardNumber }: Props) => {
  return (
    <div className="card p-2">
      <h3 className="text-secondary text-center fs-4">{cardHeading}</h3>
      <h1 className="text-center fs-3">{cardNumber}</h1>
    </div>
  );
};

export default OverviewCard;
