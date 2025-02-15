export default function ButtonDiscount ({ text, className, onClick, disabled = false }) {
    
    return (
    <button onClick={onClick} className={className || ""}>
     {text}   
    </button>
    );
  }


  