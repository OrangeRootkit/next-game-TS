import React, { FC } from "react";
import clsx from "clsx";
import coinLeft from "../images/items/coinLeft.png";
import coinRigth from "../images/items/coinRight.png";
import coinStraight from "../images/items/coinStraight.png";
import cookieChockolate from "../images/items/cookieChockolate.png";
import cookieDouble from "../images/items/cookieDouble.png";
import cookieStar from "../images/items/cookieStar.png";
import ballGreen from "../images/items/ballGreen.png";
import heartBlue from "../images/items/heartBlue.png";
import heartRed from "../images/items/heartRed.png";
import wheelOrange from "../images/items/wheelOrange.png";
import wheelPink from "../images/items/wheelPink.png";
import "./ItemsFiels.scss";

type ItemsFieldProps = {
  // children: React.ReactNode;
  valueRange?: string;
  backGround: string;
};
const ItemsField: any= () => {

// const ItemsField: FC<ItemsFieldProps> = ({ backGround }: ItemsFieldProps) => {
//   const coinsArr: string[] = [coinLeft, coinRigth, coinStraight];
//   const cookieArr: string[] = [cookieChockolate, cookieDouble, cookieStar];
//   const toyArr: string[] = [
//     ballGreen,
//     heartBlue,
//     heartRed,
//     wheelOrange,
//     wheelPink,
//   ];

//   // console.log(backGround);
//   const variant =
//     backGround.indexOf("backgroundCookies") > -1
//       ? cookieArr
//       : backGround.indexOf("backgrounCoins") > -1
//       ? coinsArr
//       : toyArr;

//   const gameText = ["1", "2", "3", "4", "5"];

//   return (
//     <div className="wrapper">
//       {variant.map((el, i) => (
//         <div className={clsx("itemWrapper", `itemWrapper__${i + 1}`)}>
//           <img src={el} alt="pic" />
//           <span className={clsx("gameText", `gameText__${i + 1}`)}>{i}</span>
//         </div>
//       ))}
//     </div>
//   );
};

export default ItemsField;
