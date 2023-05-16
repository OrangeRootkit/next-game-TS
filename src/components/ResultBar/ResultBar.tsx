import React from "react";
import ResultBrown from "../../../public/image/background/resultBrown.png";
import ResultSnow from "../../../public/image/background/resultSnow.png";
import ResultSweet from "../../../public/image/background/resultSweet.jpg";
import s from "./ResultBar.module.scss";
import asc from "../../../public/image/items/asc.png";
import des from "../../../public/image/items/des.png";
import Image from "next/image";
import clsx from "clsx";

type ResultBarProps = {
  backGround: string;
  settings:  {dir: string, amount: string, variant: string};
  firstNumber: number;
  result: number[];
  itemsVariant: any;
  resultNumbers: number[];
};

const ResultBar = ({
  backGround,
  settings,
  result,
  itemsVariant,
  resultNumbers,
}: ResultBarProps) => {

  const bar =
    backGround.indexOf("backgroundCookies") > -1
      ? ResultSweet
      : backGround.indexOf("backgrounCoins") > -1
      ? ResultBrown
      : ResultSnow;

  const { dir, amount } = settings;

  const arr = [];
  for (let i = 0; i < +amount; i++) {
    arr.push(0);
  }

  let tempResult = [...result];
  for (let i = 0; i < +amount - result.length; i++) {
    tempResult.push(-1);
  }

  return (
    <>
      <div className={s.wrapperBar}>
        <div className={dir === "asc" ? s.topBar__asc : s.topBar__des}>
          {dir === "asc" && (
            <div className={s.arrowWrapper}>
              <span className={s.arrowWrapper__textAsc}>По возрастанию</span>
              <Image src={asc} alt="asc" width={358} height={69} />
            </div>
          )}
          {dir !== "asc" && (
            <div className={s.arrowWrapper}>
              <span className={s.arrowWrapper__textDes}>По убыванию</span>
              <Image src={des} alt="des" width={358} height={69} />
            </div>
          )}
        </div>

        <div
          className={
            bar === ResultSweet
              ? clsx(s.wrapperBg, s.wrapperBg_sweet)
              : bar === ResultBrown
              ? clsx(s.wrapperBg, s.wrapperBg_gold)
              : clsx(s.wrapperBg, s.wrapperBg_snow)
          }
        >
          <div className={s.wrapperScore}>
            {arr.map((el, i) => (
              <div key={i} className={s.scorePlace}></div>
            ))}
          </div>
          <div className={s.wrapperResult}>
            {tempResult.map((el, i) => (
              <div
                className={
                  el === -1 ? s.scorePlace__result_empty : s.scorePlace__result
                }
                key={i}
              >
                <Image
                  src={itemsVariant[i]}
                  alt="pic"
                  key={i}
                  className={s.result__image}
                />
                <span className={s.resultNumbers}>{resultNumbers[i]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultBar;
