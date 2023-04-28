import Image from "next/image";
import { Inter } from "next/font/google";
import Button from "../ui/Button/Button";
import s from "../styles/Home.module.scss";
import SettingPage from "./SettingPage";
import Settings from "@/components/Settings";
import background from "../../public/image/background/settingBackgroung.jpg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={s.home}>
      <SettingPage> </SettingPage>
    </div>
  );
}
