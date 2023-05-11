import React, { FC,useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import { coinsArr } from "../kit/items";
import { cookieArr } from "../kit/items";
import { toyArr } from "../kit/items";
import ResultBar from "../components/ResultBar";
import { makeRandomArray } from "@/helper/makeRandomArray";

type ItemsFieldProps = {
  valueRange?: string;
  backGround: any;
  settings: any;
};

const ItemsField: FC<ItemsFieldProps> = ({
  backGround,
  settings,
}: ItemsFieldProps) => {
  const { dir, amount, variant } = settings;
  const tempArray = makeRandomArray(+amount + 1, 0, variant);

  const [minNumber, setMinNumber] = useState(Math.min(...tempArray));
  const [randomArray, setRandomArray] = useState(
    tempArray.filter((el: any) => el !== minNumber)
  );
  const [tempRandomArray, setTempRandomArray] = useState(
    tempArray.filter((el: any) => el !== minNumber)
  );
  const [addMinArr, setAddMinArr] = useState<any>([]);

  let itemsVariant =
    backGround.src.indexOf("backgroundCookies") > -1
      ? cookieArr
      : backGround.src.indexOf("backgrounCoins") > -1
      ? coinsArr
      : toyArr;

  itemsVariant = itemsVariant.slice(0, +amount);

  const handleClick = (e: any) => {
    const chosenNumber = +e.currentTarget.children[1].innerText;
    if (chosenNumber === Math.min(...tempRandomArray)) {
      setAddMinArr([randomArray.indexOf(chosenNumber), ...addMinArr]);
      setTempRandomArray(
        tempRandomArray.filter((el: any) => el !== chosenNumber)
      );
    }
  };

  return (
    <>
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
        minNumber={minNumber}
      />
    </>
  );
};

export default ItemsField;
