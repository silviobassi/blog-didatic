import P from 'prop-types';

import './style.css';

export const PostCard = ({ id, title, body, cover }) => (
  <div className="post">
    <img src={cover} alt={title} />
    <div className="post-content">
      <h1>{title}</h1>
      <p>id: {id}</p>
      <p>{body}</p>
    </div>
  </div>
);
PostCard.propTypes = {
  cover: P.string.isRequired,
  title: P.string.isRequired,
  id: P.number.isRequired,
  body: P.string.isRequired,
};
