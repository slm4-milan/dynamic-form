import React from 'react';

const Select = () => {
  return (
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Gender
        </label>
        <select>
          <option>Male</option>
          <option>Female</option>
        </select>
      </div>
  );
};

export default Select;
