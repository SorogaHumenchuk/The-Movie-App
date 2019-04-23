import React from 'react';
import { NavLink } from 'react-router-dom';
import CircularProgressbar from 'react-circular-progressbar';
import Loader from 'react-loader-spinner';
import styles from './Movies.module.css';
import myPhoto from './img/my.jpg';

const color = el => {
  if (el < 5) return 'orangered';
  if (el < 8) return '#55dd44';
  return 'blue';
};

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
                        fill: color(el.vote_average),
                        fontSize: '25px',
                        transform: 'translate(-18px, 6px)',
                        fontWeight: '700',
                      },
                      path: {
                        stroke: color(el.vote_average),
                      },
                      trail: { stroke: 'transparent' },
                    }}
                  />
                </div>
              </div>
              {el.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w300${el.poster_path}`}
                  alt=""
                />
              ) : (
                <img className={styles.myPhoto} src={myPhoto} alt="" />
              )}

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
