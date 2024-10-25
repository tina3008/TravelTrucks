import React from 'react';
import css from './Location.module.css';

export function Location({ onFilterChange }) {
  const handleLocationChange = (e) => {
    onFilterChange('location', e.target.value);
  };

  return (
    <div className={css.location}>
      <h6 className={css.title}>Location</h6>
      <div className={css.inputLocation}>     
        <span className={css.icon}>
          <svg width="20" height="20">
            <use href="/sprite.svg#icon-Map"></use>
          </svg>
        </span>
        <input
          className={css.locationField}
          type="text"
          placeholder="Kyiv, Ukraine"
          onChange={handleLocationChange}
        />
      </div>
    </div>
  );
}