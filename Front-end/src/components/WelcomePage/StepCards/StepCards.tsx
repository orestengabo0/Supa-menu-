import React, { ReactNode, cloneElement } from "react";
import styles from './StepCards.module.css'

interface Props {
  icon: ReactNode,
  heading: string,
  description: string,
  iconColor?: string,
  iconSize?: number | string
}

const StepCards = ({icon, heading, description, iconColor = "orange", iconSize = 50}:Props) => {
  const iconWithProps = cloneElement(icon as React.ReactElement, {
    color: iconColor,
    size: iconSize
  })
  return (
    <div className={`card ${styles['card']}`}>
      <div className="d-flex justify-content-center mt-4">
        {iconWithProps}
      </div>
      <div className="card-body">
        <h4 className="text-center text-black fw-bold">{heading}</h4>
        <p className="card-text text-center text-black">{description}</p>
      </div>
    </div>
  );
};

export default StepCards;
