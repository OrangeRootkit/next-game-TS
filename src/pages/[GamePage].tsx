import React from "react";
import s from "../styles/GamePage.module.scss";
import ResultBar from "../components/ResultBar";
import backgrounCoins from "../../public/image/background/backgrounCoins.png";
import backgroundCookies from "../../public/image/background/backgroundCookies.jpg";
import backgroundTrees from "../../public/image/background/backgroundTrees.png";
import ItemsField from "../components/ItemsField";
import Modal from "../components/Modal";
import Image from "next/image";
import { useRouter } from "next/router";
// import { backGroundArr } from "@/kit/items/background";
import { backGroundArr } from "@/kit/background";


type GamePageProps = {
  children: React.ReactNode;
  valueRange?: string;
};

// type Settings = {
//   dir: string;
//   amount: string;
//   variant: string ;
// };

const GamePage = ({ children, valueRange }: GamePageProps) => {
  const router = useRouter();

  const dir = router.query.GamePage;
  console.log(dir);
  const amount = router.asPath.substring(
    router.asPath.indexOf("+") + 1,
    router.asPath.indexOf("+") + 2
  );

  const variant = router.asPath.substring(router.asPath.indexOf("var") + 3);
  const settings = { dir, amount, variant };
  const background =
    backGroundArr[Math.floor(Math.random() * backGroundArr.length)];

  return (
    <main className={s.wrapper}>
      <Image src={background} alt="bk" fill className={s.background} />
      {/* <Modal /> */}
      <ItemsField backGround={background} settings={settings} />
      {/* <ResultBar backGround={background} settings ={settings}  /> */}
    </main>
  );
};

export default GamePage;
