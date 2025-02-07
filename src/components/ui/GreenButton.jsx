export default function GreenButton ({ text, className }) {
    
    return (
    <button className={className || ""}>
     {text}   
    </button>
    );
  }
