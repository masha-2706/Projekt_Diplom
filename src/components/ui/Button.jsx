export default function Button ({ text, className, onClick, disabled = false }) {
    
    return (
    <button onClick={onClick} className={className || ""}>
     {text}   
    </button>
    );
  }


  