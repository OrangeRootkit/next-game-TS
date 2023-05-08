import React from "react";
import resulSweets from "../images/backGround/resulSweets.png";
import ResultBrown from "../../public/image/background/resultBrown.png";
import ResultSnow from "../../public/image/background/resultSnow.png";
import Maskgroup from "../../public/image/background/Maskgroup.png";
import s from "../components/ResultBar.module.scss";
import asc from "../../public/image/items/asc.png";
import des from "../../public/image/items/des.png";
import Image from "next/image";
import { coinsArr } from "../kit/items";
import { cookieArr } from "../kit/items";
import { toyArr } from "../kit/items";

type ResultBarProps = {
  backGround: any;
  settings: any;
};

const ResultBar = ({ backGround, settings }: ResultBarProps) => {
  const bar =
    backGround.src.indexOf("backgroundCookies") > -1
      ? Maskgroup
      : backGround.src.indexOf("backgrounCoins") > -1
      ? ResultBrown
      : ResultSnow;

  const resultArr =
    bar === Maskgroup ? cookieArr : ResultBrown ? coinsArr : toyArr;

  const result = [resultArr[0]];

  const { dir, amount, variant } = settings;

  const arr = [];
  for (let i = 0; i < amount; i++) {
    arr.push(amount);
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
        <div className={bar === Maskgroup ? s.wrapperSweet : s.wrapper}>
          <Image
            src={
              bar === ResultBrown
                ? ResultBrown
                : bar === ResultSnow
                ? ResultSnow
                : ""
            }
            alt="asc"
            className={s.image}
          />
          <div className={s.wrapperScore}>
            {arr.map((el, i) => (
              <div key={i} className={s.scorePlace}></div>
            ))}
            {result.map((el, i) => (
              <div className={s.scorePlace}>
                <Image src={result[i]} alt="pic" key={i} />
                <span className={s.gameText}>{i}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultBar;
