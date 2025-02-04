export default function Icon({ id, w, h, className }) {
    
    return (
      <div>
        <svg width={w} height={h} className={className || ""}>
          <use href={`/images/sprite.svg#${id}`} />
        </svg>
      </div>
    );
  }