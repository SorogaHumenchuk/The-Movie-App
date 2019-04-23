import React from 'react';
import { NavLink } from 'react-router-dom';
import YouTube from 'react-youtube';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import myPhoto from '../img/my.jpg';
import styles from './MoviePage.module.css';

const MoviePageView = ({
  movieById,
  recommendations,
  trailers,
  actors,
  choseOption,
  option,
}) => {
  const arr =
    trailers &&
    trailers.results.map(el => (
      <YouTube className={styles.video} videoId={el.key} />
    ));
  const responsive = {
    0: { items: 0 },
    600: { items: 2 },
    1023: { items: 3 },
    1439: { items: 4 },
    1679: { items: 5 },
  };
  const responsiveVideos = {
    0: { items: 0 },
    767: { items: 1 },
  };
  return (
    <>
      {movieById && (
        <div>
          <div
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${
                movieById.backdrop_path
              })`,
            }}
            className={styles.background__container}
          >
            <div className={styles.shadow}>
              <NavLink to="/" className={styles.btnComeBack}>
                ← Back to main
              </NavLink>
              <div>
                <h1>{movieById.title}</h1>
                <h3>{movieById.tagline}</h3>
              </div>
              <p className={styles.overview}>{movieById.overview}</p>
            </div>
          </div>
        </div>
      )}
      <div className={styles.content__container}>
        <h2 className={styles.title_container}>Top Billed Cast</h2>
        <ul className={styles.actors__list}>
          {actors &&
            actors.cast.slice(0, 10).map(el => (
              <li key={el.credit_id}>
                <NavLink
                  to={`/actor/${el.credit_id}`}
                  className={styles.actor__navlink}
                >
                  <h4>{el.name}</h4>
                  <h5>{el.character}</h5>
                  {el.profile_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w200${el.profile_path}`}
                      alt=""
                    />
                  ) : (
                    <img src={myPhoto} alt="" />
                  )}
                </NavLink>
              </li>
            ))}
        </ul>
        <div className={styles.video__container}>
          <h2 className={styles.title_container}>Videos</h2>

          <AliceCarousel
            className={styles.carusel}
            items={arr}
            responsive={responsiveVideos}
            fadeOutAnimation
            mouseDragEnabled
            buttonsDisabled
          />
        </div>
        <div className={styles.btn__container}>
          <button
            className={
              option === 'recommendations'
                ? styles.btnOption__after
                : styles.btnOption__afterTransparent
            }
            type="button"
            data-partUrl="recommendations"
            onClick={choseOption}
          >
            Recommendations
          </button>
          <button
            className={
              option === 'similar'
                ? styles.btnOption__after
                : styles.btnOption__afterTransparent
            }
            type="button"
            data-partUrl="similar"
            onClick={choseOption}
          >
            Similar
          </button>
        </div>
        {recommendations && (
          <div className={styles.video__container}>
            <AliceCarousel
              className={styles.carusel}
              items={recommendations.map(el => (
                <div className={styles.recommend__item} key={el.id}>
                  <NavLink to={`/movieId/${el.id}`}>
                    <img
                      src={`https://image.tmdb.org/t/p/w300${el.poster_path}`}
                      alt=""
                    />
                  </NavLink>
                </div>
              ))}
              responsive={responsive}
              fadeOutAnimation
              mouseDragEnabled
              buttonsDisabled
              autoPlayInterval={3000}
              autoPlayDirection="lrt"
              autoPlay
            />
          </div>
        )}
      </div>
    </>
  );
};

export default MoviePageView;
