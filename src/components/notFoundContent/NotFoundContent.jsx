import React from "react";
import Button from "../ui/button/Button";
import s from "./NotFoundContent.module.css";
const cactusImage = "/media/notFound/cactus.png";
const fourImage = "/media/notFound/four.png";

export default function NotFoundContent() {
  return (
    <div>
      <div className={s.container404}>
        <div className={s.item}>
          <img className={s.image} src={fourImage} alt="404 page" />
        </div>
        <div className={s.itemImg}>
          <img className={s.imagek} src={cactusImage} alt="404 page" />
        </div>
        <div className={s.item}>
          <img className={s.image} src={fourImage} alt="404 page" />
        </div>
        
      </div>
      <div className={s.container}>
        <h2 className={s.title}>Page Not Found</h2>
        <p className={s.text}>
          We’re sorry, the page you requested could not be found.
        </p>
        <p className={s.text}>Please go back to the homepage.</p>
        <div className={s.buttonDiv}>
          <Button text="Go home" link="/" variant="linkButton" />
        </div>
      </div>
    </div>
  );
}
