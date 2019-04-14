import React from 'react';
import { NavLink } from 'react-router-dom';
import YouTube from 'react-youtube';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styles from './MoviePage.module.css';

const MoviePageView = ({ movieById, recommendations, trailers }) => {
  const arr =
    trailers &&
    trailers.results.map(el => (
      <YouTube className={styles.video} videoId={el.key} />
    ));
  const responsive = {
    0: { items: 0 },
    2048: { items: 1 },
  };
  return (
    <>
      <NavLink to="/" className={styles.btnComeBack} title="Go back">
        &#8249;
      </NavLink>
      {movieById && (
        <div>
          <h2>{movieById.title}</h2>
          <h3>{movieById.tagline}</h3>
          <p>{movieById.vote_average}</p>
          <img
            src={`https://image.tmdb.org/t/p/w300/${movieById.backdrop_path}`}
            alt=""
          />
          <p>{movieById.overview}</p>
        </div>
      )}
      <ul>
        <AliceCarousel
          className={styles.carusel}
          mouseDragEnabled
          items={arr}
          responsive={responsive}
          autoPlayInterval={2000}
          autoPlayDirection="rtl"
          // autoPlay={true}
          // fadeOutAnimation={true}
          // mouseDragEnabled={true}
          // playButtonEnabled={true}
          // disableAutoPlayOnAction={true}
        />
      </ul>
      <ul>
        {recommendations &&
          recommendations.map(el => (
            <li key={el.id}>
              <NavLink to={`/movieId/${el.id}`}>
                <h2>{el.title}</h2>
                <img
                  src={`https://image.tmdb.org/t/p/w300${el.poster_path}`}
                  alt=""
                />
              </NavLink>
            </li>
          ))}
      </ul>
    </>
  );
};

export default MoviePageView;
