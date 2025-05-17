import { Link, useLocation } from 'react-router-dom';
import css from './GoBackBtn.module.css';
import { useRef } from 'react';

const GoBackBtn = () => {
  const location = useLocation();
  const backLinkRef = useRef(location.state ?? '/country');

  return (
    <Link to={backLinkRef.current} className={css.link}>
      GoBackBtn
    </Link>
  );
};

export default GoBackBtn;
