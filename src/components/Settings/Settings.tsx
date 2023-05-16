import React, { FC, useState } from "react";
import s from "./Setting.module.scss";
import Range from "../../ui/Range/Range";
import Button from "../../ui/Button/Button";
import { useRouter } from "next/router";

const AMOUNT = ["2", "3", "4", "5"];
const GAMEVAR = ["9", "19", "50", "99", "999"];

const Settings: FC = () => {
  const [valueRange, setValueRange] = useState<string>("5");
  const [varRange, setVarRange] = useState<string>("6");
  const [gameVariant, setGameVariant] = useState<string>("999");
  const [asc_active, setAsc] = useState<boolean>(true);
  const [des_active, setDes] = useState<boolean>(false);
  const [dir, setDir] = useState<string>("asc");
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    if (target.name === "asc") {
      setAsc(true);
      setDes(false);
      setDir("asc");
      return target.name;
    } else if (target.name === "des") {
      setAsc(!true);
      setDes(!false);
      setDir("des");
      return target.name;
    }
  };

  const rangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueRange(e.target.value);
  };
  const rangeVar = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVarRange(e.target.value);
    setGameVariant(GAMEVAR[+e.target.value - 1]);
  };

  const startGame = () => {
    router.push(`/${dir}?amount+${valueRange}?var${gameVariant}`);
  };

  return (
    <div className={s.wrapper}>
      <div className={s.inner}>
        <Range
          text={"Кол-во предметов"}
          small={true}
          optionList={AMOUNT}
          rangeHandler={rangeAmount}
          value={valueRange}
        />
        <Range
          text={"Кол-во предметов"}
          small={false}
          rangeHandler={rangeVar}
          optionList={GAMEVAR}
          value={varRange}
        />
        <div className={s.buttonWrapper}>
          <Button
            text={"Значения"}
            des={false}
            des_active={false}
            asc={true}
            asc_active={asc_active}
            play={false}
            again={false}
            handler={handleClick}
            name="asc"
          ></Button>
          <Button
            text={"По убыванию"}
            des={true}
            des_active={des_active}
            asc={false}
            asc_active={false}
            play={false}
            again={false}
            handler={handleClick}
            name="des"
          ></Button>
        </div>
        <Button
          text={"Играть"}
          des={false}
          des_active={false}
          asc={false}
          asc_active={false}
          play={true}
          again={false}
          handler={startGame}
          name="play"
        ></Button>
      </div>
    </div>
  );
};

export default Settings;
