import {Link} from "react-router-dom";
import s from "./styles.module.scss";

const Home = () => {
  return (
    <div className={s.home}>
      <div className={s.image}>
        :(
      </div>
      <div>На данный момент здесь пусто.</div>
      <div>Зато не пусто в моём <Link to="/wishlist">вишлисте.</Link></div>
    </div>
  );
};

export default Home;