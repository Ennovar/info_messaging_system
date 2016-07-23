/**
*
* PostPreview
*
*/

import React, { PropTypes } from 'react';

import styles from './styles.css';
import phone from '../../assets/iphone.png';

function PostPreview({ body, image, title }) {
  return (
    <div className={styles.image} style={{ backgroundImage: `url(${phone})` }}>
      <div className={styles.bounds}>
        {title && <h4 className={styles.title}>{title}</h4>}
        {image !== '' &&
          <img className={styles.preview} src={image} width="94%" role="presentation" />
        }
        {body && <div className={`${styles.text}`} dangerouslySetInnerHTML={body} />}
      </div>
    </div>
  );
}

PostPreview.propTypes = {
  body: PropTypes.object,
  image: PropTypes.string,
  title: PropTypes.string,
};

export default PostPreview;
