export default function GreenButton ({ text, w, h, className }) {
    
    return (
    <button  width={w} height={h} className={className || ""}>
     {text}   
    </button>
    );
  }
