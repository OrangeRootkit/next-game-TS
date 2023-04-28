import React from 'react'
import background from '../../public/image/background/settingBackgroung.jpg'
import s from '../styles/SettingPage.module.scss'
import Settings from "../components/Settings";
import { useRouter } from "next/router";

type SettingPageProps = {
  children: React.ReactNode;
}

const SettingPage = ({children} : SettingPageProps ) => {

  const route = useRouter()
  console.log(route)

  return (
    <main className={s.wrapper} style={{backgroundImage: `url(${background})`}}>
      <Settings/>

    </main>
  )
}

export default SettingPage