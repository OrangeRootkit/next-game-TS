import React from "react";
import s from "../components/Modal.module.scss";
import Button from "../ui/Button/Button";
import starSmall from "../images/items/startSmall.png"
import starLarge from "../images/items/starLarge.png"
import clsx from "clsx";


const Modal = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.inner}>
        <p className={s.title}>Победа!</p>
        <p className={s.text}>Молодец! Ты успешно справился с заданием!</p>
        <Button
          text={"Заново"}
          des={false}
          des_active={false}
          asc={false}
          asc_active={false}
          play={false}
          again={true}
          handler={()=>(console.log())}
          name="again"
        ></Button>
        {/* <img className={clsx(s.star, s.star__upLeft)} src={starSmall} alt="star" />
        <img className={clsx(s.star, s.star__donwRight)} src={starSmall} alt="star" />
        <img className={clsx(s.star, s.star__downLeft)} src={starLarge} alt="star" />
        <img className={clsx(s.star, s.star__upRight)} src={starLarge} alt="star" /> */}
      </div>
    </div>
  );
};

export default Modal;
