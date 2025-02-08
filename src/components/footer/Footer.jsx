import style from "./Footer.module.css";
import iconInstagramm from "../../media/icons/ic-instagram.svg";
import iconWhatsapp from "../../media/icons/ic-whatsapp.svg";

function Footer() {
  {/* url адреса на /Google map вынесен в константу */}
  const mapAdress =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4089985786927!2d13.372748476191973!3d52.50793693712319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851cbdeaf3909%3A0xe189201578bb3535!2sLinkstra%C3%9Fe%202%2FOG%2C%2010%2C%2010785%20Berlin!5e0!3m2!1sde!2sde!4v1739045210090!5m2!1sde!2sde";

  return (
    <div className={style.footer_wrapper}>
      {/* Блок-обертка для отступа от края страницы */}
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
        {/*  Блок-карта */}
        <iframe
          className={style.footer_contact_map}
          src={mapAdress}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Footer;
