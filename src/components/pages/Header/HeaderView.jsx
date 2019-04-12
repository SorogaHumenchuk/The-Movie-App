import React from 'react';
// import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const sortArr = [
  { name: 'Popularity', sortUrl: 'popularity.desc' },
  { name: 'Top rated', sortUrl: 'vote_count.desc' },
  { name: 'Latest', sortUrl: 'release_date.desc' },
  { name: 'Now playing', sortUrl: 'revenue.desc' },
];

const HeaderView = ({ genres }) => {
  return (
    <nav>
      <ul>
        {sortArr.map(el => (
          <li key={el.sortUrl}>
            <NavLink to={`/movie/${el.sortUrl}`}>{el.name}</NavLink>
          </li>
        ))}
      </ul>
      <ul>
        {genres &&
          genres.map(el => (
            <li key={el.id}>
              <NavLink to={`/genre/${el.id}`}>{el.name}</NavLink>
              {/* {console.log(`/movie/${() => getId(el.id)}`)} */}
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default HeaderView;
