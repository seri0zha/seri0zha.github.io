import {useEffect, useState} from 'react';
import Markdown from "react-markdown";
import wishlist from "../assets/wishlist.md";
import s from "./styles.module.scss";
import {Link} from "react-router-dom";

const Wishlist = () => {
  const [text, setText] = useState('');
  useEffect(() => {
    fetch(wishlist).then(res => res.text()).then(text => setText(text));
  }, []);

  if (!text) return null;

  return (
    <div className={s.wrapper}>
      <Link to="/">Домой</Link>
      <h1>Wishlist</h1>
      <p>Обновлено 1 октября 2024 года</p>
      <div className={s.inner}>
        <Markdown>{text}</Markdown>
      </div>
    </div>
  );
};

export default Wishlist;