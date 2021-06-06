import React, { useState } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { FaQuoteLeft } from "react-icons/fa";
import { people } from "../data";

const Review = () => {
  const [index, setIndex] = useState(0);
  const length = people.length;

  const { name, image, job, review } = people[index];

  const nextRev = () => {
    setIndex(index >= length - 1 ? 0 : index + 1);
  };

  const prevRev = () => {
    setIndex(index <= 0 ? length - 1 : index - 1);
  };

  const randomRev = () => {
      setIndex(Math.floor(Math.random() * (length)));
  }

  console.log(index);

  return (
    <>
      <article className="review">
        <div className="img-container">
          <img src={image} alt="Personal avatar" className="person-img" />
          <span className="quote-icon">
            <FaQuoteLeft />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{review}</p>
        <div className="button-container">
          <AiFillCaretLeft onClick={prevRev} className='prev-btn'/>
          <AiFillCaretRight onClick={nextRev} className='next-btn'/>
        </div>
        <button className='random-btn' onClick={randomRev}>Surprise Me</button>
      </article>
    </>
  );
};

export default Review;
