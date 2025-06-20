// src/components/CategoryBox.js
import '../CssComponents/CategoryBox.css'; // Ensure you have this CSS file for styling

function CategoryBox({ icon, label }) {
  return (
    <div className="category-box">
      <div className="category-icon">
      <img src={icon} alt={label} className="category-icon" />
      </div>
      <p className="category-label">{label}</p>
    </div>
  );
}

export default CategoryBox;
