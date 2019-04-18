import React from 'react';
import { NavLink } from 'react-router-dom';
import CircularProgressbar from 'react-circular-progressbar';
import styles from './Movies.module.css';

const MoviesView = ({ movies }) => {
  return (
    <ul className={styles.list}>
      {movies &&
        movies.map(el => (
          <li className={styles.item} key={el.id}>
            <NavLink className={styles.moreInfo} to={`/movieId/${el.id}`}>
              <div className={styles.topInfo}>
                <div className={styles.titleContainer}>
                  <h2 className={styles.title}> {el.title}</h2>
                  <p>{el.release_date}</p>
                </div>
                <div style={{ width: '60px' }}>
                  <CircularProgressbar
                    percentage={el.vote_average * 10}
                    text={`${el.vote_average}`}
                    background
                    backgroundPadding={5}
                    styles={{
                      background: {
                        fill: '#343434',
                      },
                      text: {
                        fill: '#efefef',
                        fontSize: '20px',
                      },
                      path: {
                        stroke: '#efefef',
                      },
                      trail: { stroke: 'transparent' },
                    }}
                  />
                </div>
              </div>
              <img
                src={`https://image.tmdb.org/t/p/w300${el.poster_path}`}
                alt=""
              />
              {/* <p className={styles.overview}>{el.overview}</p> */}
            </NavLink>
          </li>
        ))}
      {movies && movies.length ? null : (
        <div className={styles.notFounded__container}>
          <h1 className={styles.notFounded}>Movies not found!!!</h1>
          <h2> Try another query.</h2>
          <p>404</p>
        </div>
      )}
    </ul>
  );
};

export default MoviesView;
