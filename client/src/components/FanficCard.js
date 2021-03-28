import React from "react";
import styles from './styles.module.css';

const FanficCard = ({ fanfics }) => {
  return (
    <div className="form">
      {fanfics.map((fanfic) => {
        return (
        
          <div className={styles.wrapperCenter}>
            <h2 className={styles.title}>{fanfic.title}</h2>
            <div className={styles.genre}>Genre: {fanfic.genre}</div>
            <div className="auther">Author: {fanfic.authorName}</div>
            <div className="shortDescription">
              Description: {fanfic.shortDescription}
            </div>
            <button type="button" className={styles.button}>Open</button>
          </div>
        
        );
      })}
       
    </div>
  );
};

export default FanficCard;
