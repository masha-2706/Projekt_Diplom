import style from "./Footer.module.css";
import iconInstagramm from "../../media/icons/ic-instagram.svg";
import iconWhatsapp from "../../media/icons/ic-whatsapp.svg";

function Footer() {
  return (
    <div className={style.footer_wrapper}>
      <h2 className={style.footer_title}>Contact</h2>

      <div className={style.footer_container}>
        <div className={style.footer_contact_phone}>
          <p className={style.footer_contact_title}>Phone</p>
          <p className={style.footer_contact_description}>+49 999 999 99 99</p>
        </div>

        <div className={style.footer_contact_socials}>
          <p className={style.footer_contact_title}>Socials</p>
          <img src={iconInstagramm} alt="#" />
          <img src={iconWhatsapp} alt="#" />
        </div>

        <div className={style.footer_contact_address}>
          <p className={style.footer_contact_title}>Address</p>
          <p className={style.footer_contact_description}>
            Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland
          </p>
        </div>

        <div className={style.footer_contact_workingHours}>
          <p className={style.footer_contact_title}>Working Hours</p>
          <p className={style.footer_contact_description}>24 hours a day</p>
        </div>

        <div className={style.footer_contact_map}>
          <p>MAP</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
