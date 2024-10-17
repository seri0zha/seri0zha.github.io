import s from "./Main.module.scss";

const Main = () => {
  return (
    <div className={s.main}>
      <div className={s.inner}>
        <div className={s.rect}/>
        <div className={s.info}>
          Здесь пока ничего нет. Зато вы можете перейти в мой вишлист
        </div>
      </div>
    </div>
  );
};

export default Main;