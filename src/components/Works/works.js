import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/all.png';
import Portfolio2 from '../../assets/C#image.png';
import Portfolio3 from '../../assets/pythonimg.png';
import Portfolio4 from '../../assets/backend.jpg';
import Portfolio5 from '../../assets/mobileapp.png';
import Portfolio6 from '../../assets/frontend.png';

const Works = () => {
  return (
    <section id="works">
        <h2 className="worksTitle">My Learning Journey </h2>
        <span className="worksDesc"> I take pride on paying attention to the smallest details.</span>
        <br/>
        <br/>
        <br/>
        <div className="worksImgs">
            <img src={Portfolio1} alt="" className="worksImg" />
            <img src={Portfolio2} alt="" className="worksImg" />
            <img src={Portfolio3} alt="" className="worksImg" />
            <img src={Portfolio4} alt="" className="worksImg" />
            <img src={Portfolio5} alt="" className="worksImg" />
            <img src={Portfolio6} alt="" className="worksImg" />
        </div>
    </section>
  )
}

export default Works
