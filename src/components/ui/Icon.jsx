export default function Icon({ id, w, h, className }) {
    

  {/* кнопка для изменения темы (день /ночь) небходимы функции для переключения для этого необходимо ( в компонент icon кот находит в ui) необходимо передать  classname , id ) id -передано интерполяцией и это id иконка  из sprite ( in pablic) передана  (  <use href={`/images/sprite.svg#${id}`} />) Брала с https://icomoon.io/app/#/select  )Convert SVG Icons to Export as Icon Font, SVG, PNG, PDF ...*/}
    return (
      <div>
        <svg width={w} height={h} className={className || ""}>
          <use href={`/images/sprite.svg#${id}`} />
        </svg>
      </div>
    );
  }