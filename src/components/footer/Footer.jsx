import style from "./Footer.module.css";
import Icon from "../ui/themeSwitchElement/Icon";

function Footer() {
  // url адреса на Google Maps вынесен в константу
  const mapAdress =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4089985786927!2d13.372748476191973!3d52.50793693712319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851cbdeaf3909%3A0xe189201578bb3535!2sLinkstra%C3%9Fe%202%2FOG%2C%2010%2C%2010785%20Berlin!5e0!3m2!1sde!2sde!4v1739045210090!5m2!1sde!2sde";
  const instagramLink = "https://www.instagram.com/"; // url адреса на Instagram вынесен в константу
  const whatsappLink = "https://www.whatsapp.com/"; // url адреса на Whatsapp вынесен в константу
  const iconInstagramm = "/media/footerImages/ic-instagram.svg"; // Изображение icon Instagram
  const iconWhatsapp = "/media/footerImages/ic-whatsapp.svg"; // Изображение icon Whatsapp

  return (
    <div className={style.footer_wrapper}>
      {/* Блок-обертка для отступа от края страницы */}
      <h2 className={style.footer_title}>Contact</h2>
      <div className={style.footer_container}>
        <article className={style.footer_contact_phone}>
          <p className={style.footer_contact_title}>Phone</p>
          <a
            href="tel:+49 999 999 99 99"
            className={style.footer_contact_description}
          >
            +49 999 999 99 99
          </a>
        </article>

        <article className={style.footer_contact_socials}>
          <p className={style.footer_contact_title}>Socials</p>
          
          <div className={style.iconsDiv}>
            <a className={style.iconsLink} href={instagramLink}>
              <Icon className={style.iconSocial} id="icon-instagram" />
            </a>
            <a className={style.iconsLink} href={whatsappLink}>
              <Icon className={style.iconSocial} id="icon-whatsapp" />
            </a>
          </div>
        </article>

        <article className={style.footer_contact_address}>
          <p className={style.footer_contact_title}>Address</p>
          <p className={style.footer_contact_description}>
            Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland
          </p>
        </article>

        <article className={style.footer_contact_workingHours}>
          <p className={style.footer_contact_title}>Working Hours</p>
          <p className={style.footer_contact_description}>24 hours a day</p>
        </article>
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
