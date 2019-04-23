import React from 'react';
import { NavLink } from 'react-router-dom';
import CircularProgressbar from 'react-circular-progressbar';
import myPhoto from '../Movies/img/my.jpg';
import styles from './Actor.module.css';

import Header from '../Header/HeaderContainer/HeaderContainer';

const color = el => {
  if (el < 5) return 'orangered';
  if (el < 8) return '#55dd44';
  return 'blue';
};

const ActorView = ({ actor }) => {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        {actor && (
          <div className={styles.container}>
            <div className={styles.actor__topInfo}>
              <h1 className={styles.actor__name}>{actor.name}</h1>
              <img
                className={styles.actor__img}
                src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
                alt=""
              />
            </div>
            <section className={styles.moives__section}>
              <h2 className={styles.moives__section__title}>Known For</h2>
              <ul className={styles.list}>
                {actor.known_for.map(el => (
                  <li className={styles.item} key={el.id}>
                    <NavLink
                      className={styles.item__navlink}
                      to={`/movieId/${el.id}`}
                    >
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
                          src={`https://image.tmdb.org/t/p/w200${
                            el.poster_path
                          }`}
                          alt=""
                        />
                      ) : (
                        <img className={styles.myPhoto} src={myPhoto} alt="" />
                      )}

                      {/* <p className={styles.overview}>{el.overview}</p> */}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        )}
      </div>
    </>
  );
};
export default ActorView;
