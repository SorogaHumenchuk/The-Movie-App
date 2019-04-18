import React from 'react';
import { NavLink } from 'react-router-dom';
import CircularProgressbar from 'react-circular-progressbar';
import Loader from 'react-loader-spinner';
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
                <div className={styles.CircularProgressbar__container}>
                  <CircularProgressbar
                    percentage={el.vote_average * 10}
                    variant="determinate"
                    text={`${el.vote_average}`}
                    background
                    backgroundPadding={5}
                    styles={{
                      background: {
                        fill: 'transparent',
                      },
                      text: {
                        fill:
                          el.vote_average < 5
                            ? 'orangered'
                            : el.vote_average < 8
                            ? '#55dd44'
                            : 'blue',
                        fontSize: '25px',
                        transform: 'translate(-18px, 6px)',
                        fontWeight: '700',
                      },
                      path: {
                        stroke:
                          el.vote_average < 5
                            ? 'orangered'
                            : el.vote_average < 8
                            ? '#55dd44'
                            : 'blue',
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
          <Loader type="Oval" color="#ff4400" height="150" width="150" />
        </div>
      )}
    </ul>
  );
};

export default MoviesView;
