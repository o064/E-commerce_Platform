import React from "react";
import { Link } from "react-router";

type buttonProps ={
  children : React.ReactNode;
  to? : string;
  disabled?: boolean;
  onClick? : () => void;
}
function Button({children , to , onClick ,disabled }:buttonProps) {
  if(!children) return null;
  if(to ){
    return(
      <Link to={to}>
        {children}
      </Link>
    )
  }
  if(onClick){
    return(
      <button onClick={onClick} disabled={disabled}>
        {children}
      </button>
    )
  }
  return (
    <button disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
