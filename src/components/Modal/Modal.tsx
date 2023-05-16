import React from "react";
import s from "./Modal.module.scss";
import Button from "../../ui/Button/Button";
import starSmall from "../../../public/image/items/startSmall.png"
import starLarge from "../../../public/image/items/starLarge.png"
import clsx from "clsx";
import Image from "next/image";
import Link from 'next/link';


const Modal = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.inner}>
        <p className={s.title}>Победа!</p>
        <p className={s.text}>Молодец! Ты успешно справился с заданием!</p>
        <Link href='/'>
        <Button
          text={"Заново"}
          des={false}
          des_active={false}
          asc={false}
          asc_active={false}
          play={false}
          again={true}
          handler={()=>{}}
          name="again"
        ></Button>
        </Link>
        <Image className={clsx(s.star, s.star__upLeft)} src={starSmall} alt="star"/>
        <Image className={clsx(s.star, s.star__donwRight)} src={starSmall} alt="star" />
        <Image className={clsx(s.star, s.star__downLeft)} src={starLarge} alt="star" />
        <Image className={clsx(s.star, s.star__upRight)} src={starLarge} alt="star" />
      </div>
    </div>
  );
};

export default Modal;
