import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

type linkbuttonProps = {
  children : React.ReactNode;
  to : string;
}
function LinkButton({ children , to }:linkbuttonProps) {
  const navigate = useNavigate();

  if (to === '-1')
    return (
      <button  onClick={() => navigate(-1)}>
        {children}
      </button>
    );

  return (
    <Link to={to}>
      {children}
    </Link>
  );
}

export default LinkButton;
