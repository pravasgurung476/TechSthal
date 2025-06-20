// src/components/Categories.js
import React from 'react';
import CategoryBox from './CategoryBox';
import categories from './CategoryData';

function Categories() {
  return (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
      {categories.map((cat, index) => (
        <CategoryBox key={index} icon={cat.icon} label={cat.label} />
      ))}
    </div>
  );
}

export default Categories;
