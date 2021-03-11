import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';

// import styles from './style.css';

interface CardProps extends React.HTMLAttributes<Element> {
  content: string;
  title: string;
  comment: string;
  color: string;
}

function getColorClassName(color: string): string {
  return `theme-color-common-${color}`;
}

const Card = ({ content, title, comment, color }: CardProps) => {
  // const componentStyles = {
  //   cardTitle: classNames(
  //     styles['card-title'],
  //     styles['theme-color-common-green'],
  //     styles['theme-color-font-white']
  //   ),
  //   cardTitleText: classNames(styles['cart-title-text']),
  //   cardTitleAction: classNames(styles['card-title-action']),
  //   cardContent: classNames(styles['card-content']),
  //   commentSmall: classNames(styles['comment-small']),
  //   iconSetting: classNames('icon', styles['font-icon-setting']),
  // };

  return (
    <div className="card">
      <div className={`card-title ${getColorClassName(color)}`}>
        <span className="card-title-text">{title}</span>
        <span className="card-title-action">
          <svg
            d="1615190835530"
            className="icon font-icon-setting"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            // p-id="3479"
            width="200"
            height="200"
          >
            <path
              d="M827.733333 554.666667c0-12.8 4.266667-25.6 4.266667-42.666667s0-29.866667-4.266667-42.666667l89.6-68.266666c8.533333-4.266667 8.533333-17.066667 4.266667-25.6l-85.333333-149.333334c-4.266667-8.533333-17.066667-12.8-25.6-8.533333l-106.666667 42.666667c-21.333333-17.066667-46.933333-29.866667-72.533333-42.666667l-17.066667-115.2c4.266667-8.533333-8.533333-17.066667-17.066667-17.066667h-170.666666c-8.533333 0-21.333333 8.533333-21.333334 17.066667l-17.066666 115.2c-25.6 8.533333-46.933333 25.6-72.533334 42.666667l-106.666666-42.666667c-8.533333-4.266667-17.066667 0-25.6 8.533333l-85.333334 149.333334c-4.266667 4.266667 0 17.066667 8.533334 25.6L196.266667 469.333333c0 12.8-4.266667 25.6-4.266667 42.666667s0 29.866667 4.266667 42.666667l-89.6 68.266666c-8.533333 4.266667-8.533333 17.066667-4.266667 25.6l85.333333 149.333334c4.266667 8.533333 12.8 12.8 25.6 8.533333l106.666667-42.666667c21.333333 17.066667 46.933333 29.866667 72.533333 42.666667l17.066667 110.933333c0 8.533333 8.533333 17.066667 21.333333 17.066667h170.666667c12.8 0 21.333333-8.533333 21.333333-17.066667l17.066667-110.933333c25.6-12.8 51.2-25.6 72.533333-42.666667l106.666667 42.666667c8.533333 4.266667 21.333333 0 25.6-8.533333l85.333333-149.333334c4.266667-8.533333 4.266667-21.333333-4.266666-25.6L827.733333 554.666667zM512 661.333333c-81.066667 0-149.333333-68.266667-149.333333-149.333333s68.266667-149.333333 149.333333-149.333333 149.333333 68.266667 149.333333 149.333333-68.266667 149.333333-149.333333 149.333333z"
              // p-id="3480"
              fill="#cfdde2"
            />
          </svg>
        </span>
      </div>
      <div className="card-content">
        <span>{content}</span>
        <span className="comment-small">{comment}</span>
      </div>
    </div>
  );
  // return <div className="card">{text}</div>;
};

Card.defaultProps = {
  // text: '卡片',
  title: '卡片',
  content: '内容',
  comment: '副内容',
  color: 'green',
};

Card.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  comment: PropTypes.string,
  color: PropTypes.string,
};

export default Card;
