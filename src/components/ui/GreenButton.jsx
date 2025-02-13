export default function GreenButton ({ text, className, onClick }) {
    
    return (
    <button onClick={onClick} className={className || ""}>
     {text}   
    </button>
    );
  }
