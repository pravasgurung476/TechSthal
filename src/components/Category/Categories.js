// src/components/Categories.js
import React from 'react';
import CategoryBox from './CategoryBox';
import categories from './CategoryData';

function Categories() {
  return (
    <div>
      <div style={{ textAlign: '', margin: '20px 0px 0px 30px' }}>
        <h5 className="BaseFont">
          Categories
        </h5>
        <h2 className='BaseFont'>
          Browse by categories
        </h2>
      </div>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {categories.map((cat, index) => (
            <CategoryBox key={index} icon={cat.icon} label={cat.label} />
          ))}
        </div>
    </div>
  );
}

export default Categories;
