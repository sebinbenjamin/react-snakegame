import React from 'react';
import style from "./Fruit.module.css"

class Fruit extends React.Component {
  render() {
    return (
      <div className={style.Fruit}>
        Fruit
      </div>
    );
  }
}

export default Fruit;
