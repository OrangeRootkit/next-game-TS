import React, { FC, useEffect, useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import { coinsArr } from "@/kit/items";
import { cookieArr } from "../../kit/items";
import { toyArr } from "../../kit/items";
import ResultBar from "../ResultBar/ResultBar";
import { makeRandomArray } from "@/helper/makeRandomArray";
import Modal from "../Modal/Modal";

type ItemsFieldProps = {
  backGround: string;
  settings: { dir: string; amount: string; variant: string };
};

const ItemsField: FC<ItemsFieldProps> = ({
  backGround,
  settings,
}: ItemsFieldProps) => {
  const { dir, amount, variant } = settings;
  const tempArray = makeRandomArray(+amount + 1, 0, +variant);
  const [resultNumbers, setResultNumbers] = useState<number[]>([]);

      const [firstNumber] = useState(dir !== "asc"? Math.min(...tempArray):Math.max(...tempArray) )


  const [randomArray] = useState(
    tempArray.filter((el: any) => el !== firstNumber)
  );
  const [tempRandomArray, setTempRandomArray] = useState(
    tempArray.filter((el: any) => el !== firstNumber)
  );


  const [addMinArr, setAddMinArr] = useState<number[]>([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (resultNumbers.length === tempArray.length - 1) {
      setModal(true);
    }
  }, [resultNumbers]);

  let itemsVariant =
    backGround.indexOf("backgroundCookies") > -1
      ? cookieArr
      : backGround.indexOf("backgrounCoins") > -1
      ? coinsArr
      : toyArr;

  itemsVariant = itemsVariant.slice(0, +amount);

  const handleClick = (e: any) => {
    const chosenNumber = +e.currentTarget.children[1].innerText;
    if (dir === "asc") {
      if (chosenNumber === Math.min(...tempRandomArray)) {
        setAddMinArr([randomArray.indexOf(chosenNumber), ...addMinArr]);
        setTempRandomArray(
          tempRandomArray.filter((el: any) => el !== chosenNumber)
        );
        setResultNumbers([...resultNumbers, chosenNumber]);
      }
    } else {
      if (chosenNumber === Math.max(...tempRandomArray)) {
        setAddMinArr([randomArray.indexOf(chosenNumber), ...addMinArr]);
        setTempRandomArray(
          tempRandomArray.filter((el: any) => el !== chosenNumber)
        );
        setResultNumbers([...resultNumbers, chosenNumber]);
      }
    }
  };

  return (
    <>
      {modal && <Modal />}
      <div className="wrapper">
        {itemsVariant.map((el, i) => (
          <div
            id={`${randomArray[i]}`}
            key={i}
            className={
              addMinArr.includes(i)
                ? clsx(
                    "itemWrapper",
                    `itemWrapper__${i + 1}`,
                    `itemWrapper__right`
                  )
                : clsx("itemWrapper", `itemWrapper__${i + 1}`)
            }
            onClick={(e) => handleClick(e)}
          >
            <Image src={el} alt="pic" />
            <span className={clsx("gameText", `gameText__${i + 1}`)}>
              {randomArray[i]}
            </span>
          </div>
        ))}
      </div>
      <ResultBar
        backGround={backGround}
        settings={settings}
        firstNumber={firstNumber}
        result={addMinArr}
        resultNumbers={resultNumbers}
        itemsVariant={itemsVariant}
      />
    </>
  );
};

export default ItemsField;
