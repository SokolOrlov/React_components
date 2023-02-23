import React from "react";
import sprite from "../../assets/sprite.svg";

type Props = {
  id: string;
};

export const Svg = ({ id }: Props) => {
  return (
    <svg>
      <use xlinkHref={`${sprite}#${id}`}></use>
    </svg>
  );
};