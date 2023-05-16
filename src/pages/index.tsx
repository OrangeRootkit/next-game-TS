import s from "../styles/Home.module.scss";
import Settings from "../components/Settings/Settings";

export default function Home() {
  return (
    <main className={s.home}>
      <Settings />
    </main>
  );
}
