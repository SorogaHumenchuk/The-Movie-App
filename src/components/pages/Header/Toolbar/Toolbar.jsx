import React from 'react';
import { NavLink } from 'react-router-dom';
import Select from 'react-dropdown-select';
import styles from './Toolbar.module.css';
import logo from './Logo/logo.svg';

const sortArr = [
  { name: 'Popularity', sortUrl: 'popularity.desc' },
  { name: 'Top rated', sortUrl: 'vote_count.desc' },
  { name: 'Latest', sortUrl: 'release_date.desc' },
  { name: 'Now playing', sortUrl: 'revenue.desc' },
];

const Toolbar = ({ genres }) => {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <div className={styles.navigation__mobile}>
          <button type="button" className={styles.btn__openMenu}>
            <div className={styles.btnOpenMenu__line} />
            <div className={styles.btnOpenMenu__line} />
            <div className={styles.btnOpenMenu__line} />
          </button>
          <div className={styles.logo}>
            <a href="/">
              <span>My TV</span>
              <img src={logo} alt="" />
            </a>
          </div>
        </div>
        <div className={styles.navigation__elements}>
          <div className={styles.sortBy}>
            <h3>Sort by :</h3>
            <ul className={styles.navigation__itemsSort}>
              {sortArr.map(el => (
                <li key={el.sortUrl}>
                  <NavLink className={styles.link} to={`/movie/${el.sortUrl}`}>
                    {el.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.sortBy}>
            <h3>Sort by genres :</h3>
            <ul className={styles.navigation__itemsGenres}>
              {genres &&
                genres.map(el => (
                  <li key={el.id}>
                    <NavLink className={styles.link} to={`/genre/${el.id}`}>
                      {el.name}
                    </NavLink>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Toolbar;
