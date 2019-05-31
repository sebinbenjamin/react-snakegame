import React from 'react';
import style from './Attribution.module.css';

const Attribution = () => {
  return (
    <div className={style.Attribution}>
      Icons made by &nbsp;
      <a href="https://www.freepik.com/" title="Freepik">Freepik</a> 
      &nbsp; from  &nbsp;
      <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> 
      &nbsp; is licensed by 
      <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">
      &nbsp;CC 3.0 BY &nbsp;
      </a>
    </div>
  );
}

export default Attribution;
