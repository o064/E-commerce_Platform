import React from "react";

type buttonProps ={
  children : React.ReactNode;
}
function Button({children}:buttonProps) {

  return (
    <button>
      {children}
    </button>
  );
}

export default Button;
