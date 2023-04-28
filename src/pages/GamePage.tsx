import React from "react";
import s from "../styles/GamePage.module.scss";
import ResultBar from "../components/ResultBar";
import backgrounCoins from "../images/backGround/backgrounCoins.png";
import backgroundCookies from "../images/backGround/backgroundCookies.jpg";
import backgroundTrees from "../images/backGround/backgroundTrees.png";
import ItemsField from "../components/ItemsField";
import Modal from "../components/Modal";

type GamePageProps = {
  children: React.ReactNode;
  valueRange?: string;
};

const GamePage = ({ children, valueRange }: GamePageProps) => {
  const backGroundArr: string[] = [
    // backgrounCoins,
    // backgroundCookies,
    // backgroundTrees,
  ];

  const background =
    backGroundArr[Math.floor(Math.random() * backGroundArr.length)];

  return (
    <main
      className={s.wrapper}
      style={{ backgroundImage: `url(${background})` }}
    >
      <Modal />
      {/* <ItemsField backGround={background} />
      <ResultBar backGround={background} valueRange={valueRange} /> */}
    </main>
  );
};

export default GamePage;
