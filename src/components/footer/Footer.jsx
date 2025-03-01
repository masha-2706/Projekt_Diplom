import style from "./Footer.module.css";

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
          <a href={instagramLink}>
            {/* <img src={iconInstagramm} alt="instagram" /> */}
            <svg width="43" height="44" viewBox="0 0 43 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M31.5 3H12.5C7.27546 3 3 7.27361 3 12.5V31.5C3 36.7245 7.27546 41 12.5 41H31.5C36.7245 41 41 36.7245 41 31.5V12.5C41 7.27361 36.7245 3 31.5 3ZM22 29.9164C17.6271 29.9164 14.0832 26.3709 14.0832 22C14.0832 17.6271 17.6271 14.0832 22 14.0832C26.3709 14.0832 29.9168 17.6271 29.9168 22C29.9168 26.3709 26.3709 29.9164 22 29.9164ZM32.2918 14.0832C30.9789 14.0832 29.9168 13.0196 29.9168 11.7082C29.9168 10.3967 30.9789 9.33318 32.2918 9.33318C33.6047 9.33318 34.6668 10.3967 34.6668 11.7082C34.6668 13.0196 33.6047 14.0832 32.2918 14.0832Z" fill="#FFFFF1"/>
</svg>

          </a>
          <a href={whatsappLink}>
            {/* <img src={iconWhatsapp} alt="whatsapp" /> */}
            <svg width="39" height="38" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.959 0C9.48239 0 0.958984 8.52279 0.958984 19C0.958984 22.6862 2.01598 26.24 4.02236 29.3263L1.06165 36.2348C0.857552 36.7098 0.963932 37.2628 1.33008 37.6289C1.57253 37.8714 1.89661 38 2.22565 38C2.39388 38 2.56396 37.9666 2.72477 37.8973L9.6333 34.936C12.7189 36.9436 16.2728 38 19.959 38C30.4362 38 38.959 29.4772 38.959 19C38.959 8.52279 30.4362 0 19.959 0ZM29.7113 25.8009C29.7113 25.8009 28.1317 27.8271 26.99 28.3008C24.088 29.502 19.9911 28.3008 15.324 23.635C10.6581 18.9678 9.45641 14.871 10.6581 11.969C11.1319 10.826 13.1581 9.24766 13.1581 9.24766C13.7073 8.81966 14.5608 8.87285 15.0531 9.36517L17.3452 11.6573C17.8376 12.1496 17.8376 12.9561 17.3452 13.4484L15.9066 14.8858C15.9066 14.8858 15.324 16.6349 18.8234 20.1355C22.3229 23.635 24.0732 23.0523 24.0732 23.0523L25.5105 21.6137C26.0029 21.1214 26.8094 21.1214 27.3017 21.6137L29.5938 23.9059C30.0861 24.3982 30.1393 25.2505 29.7113 25.8009Z" fill="#FFFFF1"/>
</svg>

          </a>
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
