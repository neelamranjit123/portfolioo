import React from 'react';
import './skills.css';
import UIDesign from '../../assets/UX.jpg';
import WebsiteDesign from '../../assets/website.png';
import AppDesign from '../../assets/app.jpg';

const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTittle">What I do</span>
        <span className="skillDesc">I am passionate about the web designing and 
        have a good understanding of design and a keen eye for detail. 
        </span>
        <div className="skillBars">

            <div className="skillBar">
                <img src={UIDesign} alt='UIDesign' className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>"I specialize in designing visually appealing and user-friendly interfaces while optimizing the overall user experience<br/>
                        to ensure digital products are intuitive, efficient, and enjoyable to use.".</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={WebsiteDesign} alt='WebsiteDesign' className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>Website Design</h2>
                    <p>"I create and design websites to deliver engaging and effective online experiences."</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={AppDesign} alt='AppDesign' className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>"I design mobile and web applications to provide user-friendly and visually appealing digital experiences."</p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Skills;
