import React from 'react';
import './FinanceCourses.css';
import financeImage from './assets/file.png';

const FinanceCourses = () => {
  return (
    <div className="finance-courses">
      <div className="image-container">
        <img src={financeImage} alt="Personal Finance" />
      </div>
      <div className="text-container">
        <h2>ა(ა)იპ ქ. ბათუმის წმინდა ანდრია პირველწოდებულის სახელობის გიმნაზია<br /></h2>
        <h1>დირექტორი</h1>
        <h1>დეკანოზი იაკობი (ბენიძე)</h1>
        <h1>+995-593-27-12-34</h1>
        <a href="http://batumi-gimnazia.edu.ge/wp-content/uploads/2022/07/%E1%83%93%E1%83%94%E1%83%99%E1%83%90%E1%83%9C%E1%83%9D%E1%83%96%E1%83%98-%E1%83%98%E1%83%90%E1%83%99%E1%83%9D%E1%83%91%E1%83%98-%E1%83%91%E1%83%94%E1%83%9C%E1%83%98%E1%83%AB%E1%83%94-%E2%80%93-CV.pdf" target="_blank" rel="noopener noreferrer">
          <button>Read More</button>
        </a>
      </div>
    </div>
  );
};

export default FinanceCourses;
