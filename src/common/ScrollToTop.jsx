import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

export const ScrollToTop = (props) => {
  const scrollLocation = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [scrollLocation]);

  return <>{props.children}</>;
};
