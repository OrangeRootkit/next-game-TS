import React from "react";
import s from "../styles/GamePage.module.scss";
import ItemsField from "../components/ItemsField/ItemsField";
import Image from "next/image";
import { useRouter } from "next/router";
import { backGroundArr } from "@/kit/background";

const GamePage = () => {
  const router = useRouter();
  const dir: any = router.query.GamePage;
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
      <ItemsField backGround={background.src} settings={settings} />
    </main>
  );
};

export default GamePage;
