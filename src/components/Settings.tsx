import React, { FC, useState } from "react";
import s from "./Setting.module.scss";
import Range from "../ui/Range/Range";
import Button from "../ui/Button/Button";
import Link from "next/link";

const Settings: FC = () => {
  const [valueRange, setValueRange] = useState<string>("");
  const [asc_active, setAsc] = useState<boolean>(true);
  const [des_active, setDes] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;

    if (target.name === "asc") {
      setAsc(true);
      setDes(false);
    } else if (target.name === "des") {
      setAsc(false);
      setDes(true);
    }
  };

  const rangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("hi");
    console.log(e.target.value);
    console.log(e.target);
    setValueRange(e.target.value);
  };

  return (
    <div className={s.wrapper}>
      <div className={s.inner}>
        <Range
          text={"Кол-во предметов"}
          small={true}
          optionList={["2", "3", "4", "5"]}
          rangeHandler={rangeHandler}
          // onChange={() => setValueRange(!valueRange)}
        />
        <Range
          text={"Кол-во предметов"}
          small={false}
          rangeHandler={rangeHandler}
          optionList={["A", "9", " 19", " 50", "99", "999"]}
        />
        <div className={s.buttonWrapper}>
          <Button
            text={"По возрастанию"}
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
            // onClick={(e) => chooseAsc(e)}
          ></Button>
        </div>
        <Link href={"/GamePage"}>
          <Button
            text={"Играть"}
            des={false}
            des_active={false}
            asc={false}
            asc_active={false}
            play={true}
            again={false}
            handler={handleClick}
            name="play"
          ></Button>
        </Link>
      </div>
    </div>
  );
};

export default Settings;
