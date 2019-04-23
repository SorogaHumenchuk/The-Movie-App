import React from 'react';
import { NavLink } from 'react-router-dom';
import MenuButton from '../MenuButton/MenuButton';
import Menu from '../Menu/Menu';
import s from './Header.module.css';
import logo from '../Logo/logo.svg';

const sortArr = [
  { name: 'Popularity', sortUrl: 'popularity.desc' },
  { name: 'Top rated', sortUrl: 'vote_count.desc' },
  { name: 'Latest', sortUrl: 'release_date.desc' },
  { name: 'Now playing', sortUrl: 'revenue.desc' },
];

const Header = ({
  genres,
  search,
  handleSubmit,
  handleChange,
  handleMenuClick,
  menuOpen,
  getId,
}) => {
  const menuItemsSort = sortArr.map(el => (
    <NavLink
      key={el.name}
      className={s.link}
      onClick={() => {
        handleMenuClick();
        getId(el.id);
      }}
      to={`/movie/${el.sortUrl}`}
    >
      {el.name}
    </NavLink>
  ));

  const menuGenres = genres.map(el => (
    <NavLink
      key={el.id}
      className={s.link}
      onClick={() => {
        handleMenuClick();
        getId(el.id);
      }}
      to={`/genre/${el.id}`}
    >
      {el.name}
    </NavLink>
  ));

  return (
    <>
      <div className={s.container}>
        <MenuButton
          open={menuOpen}
          onClick={() => handleMenuClick()}
          color="white"
        />
        <a href="/The-Movie-App/" className={s.logo}>
          <img src={logo} alt="" />
        </a>
      </div>
      <Menu
        open={menuOpen}
        search={search}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      >
        {
          <div className={s.categories__container}>
            <div className={s.categories__sort}>
              {' '}
              <h3>Sort By:</h3>
              {[...menuItemsSort]}
            </div>
            <div className={s.categories__sort}>
              <h3>Genres:</h3>
              {[...menuGenres]}
            </div>
          </div>
        }
      </Menu>
    </>
  );
};

export default Header;
