import React, { FC } from "react";
import clsx from "clsx";
import s from "./ItemsFiels.module.scss";
import Image from "next/image";
import { coinsArr } from "../kit/items";
import { cookieArr } from "../kit/items";
import { toyArr } from "../kit/items";
import ResultBar from "../components/ResultBar";

type ItemsFieldProps = {
  valueRange?: string;
  backGround: any;
  settings: any;
};

const ItemsField: FC<ItemsFieldProps> = ({
  backGround,
  settings,
}: ItemsFieldProps) => {
  console.log(settings);

  const { dir, amount, variant } = settings;
  console.log(dir);
  console.log(amount);
  console.log(variant);

  const itemsVariant =
    backGround.src.indexOf("backgroundCookies") > -1
      ? cookieArr
      : backGround.src.indexOf("backgrounCoins") > -1
      ? coinsArr
      : toyArr;

  console.log(s);

  return (
    <>
      <div className="wrapper">
        {itemsVariant.map((el, i) => (
          <div className={clsx("itemWrapper", `itemWrapper__${i + 1}`)}>
            <Image src={el} alt="pic" />
            <span className={clsx("gameText", `gameText__${i + 1}`)}>{i}</span>
          </div>
        ))}
      </div>
      <ResultBar backGround={backGround} settings={settings} />
    </>
  );
};

export default ItemsField;
