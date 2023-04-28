import React from "react";
import resulSweets from "../images/backGround/resulSweets.png";
import resultBrown from "../images/backGround/resultBrown.png";
import resultSnow from "../images/backGround/resultSnow.png";
import Maskgroup from "../images/backGround/Maskgroup.png";
import s from "../components/ResultBar.module.scss";
import asc from "../images/items/asc.png";
import des from "../images/items/des.png";

type ResultBarProps = {
  backGround: string;
  valueRange: any;
};

const ResultBar = ({ backGround, valueRange }: ResultBarProps) => {
  console.log(backGround);
  console.log(backGround.indexOf("backgroundCookies"));

  const bar =
    backGround.indexOf("backgroundCookies") > -1
      ? Maskgroup
      : backGround.indexOf("backgrounCoins") > -1
      ? resultBrown
      : resultSnow;

  const arr = [1, 1, 1];

  const destination = "asc";

  return (
    <>
      <div className={s.wrapperBar}>
        <div className={destination === "asc" ? s.topBar__asc : s.topBar__des}>
          {destination === "asc" && (
            <div className={s.arrowWrapper__des}>
              <span className={s.arrowWrapper__textAsc}>По возрастанию</span>
              <img src={asc} alt="asc" />
            </div>
          )}
          {destination !== "asc" && (
            <div className={s.arrowWrapper__des}>
              <img src={des} alt="des" />
              <span className={s.arrowWrapper__textDes}>По убыванию</span>
            </div>
          )}
        </div>
        <div
          className={bar === Maskgroup ? s.wrapperSweet : s.wrapper}
          style={{ backgroundImage: `url(${bar})` }}
        >
          {arr.map((el) => (
            <div className={s.scorePlace}></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ResultBar;
