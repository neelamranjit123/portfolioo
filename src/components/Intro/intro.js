import React from 'react';
import './intro.css';
import bg from '../../assets/mypicture.jpg';
import btnImg from '../../assets/hireme.webp';
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">
                    I'm
                    <span className="introName"> Neelam Ranjit,</span> 
                        <br/> Website Designer.</span> 
                        <br/>
            <p className="introPara"> I'm a designer, <br/>
            who's all about making websites look great and easy to use. <br/>
            I create websites with awesome user experiences, <br/>
            so people not only enjoy visiting them but find them super useful too.</p>         

            <Link><button className="btn" onClick={() => {
            document.getElementById('contact').scrollIntoView({behaviour: 'smooth'});
            }}>
            <img src={btnImg} alt="Hire" className="btnImg" />Hire Me</button></Link>


            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    );
    
}

export default Intro;
