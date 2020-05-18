import React, { Fragment } from "react";
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import "../style/home.css";

// import About from "../components/about";
// import Contact from "../components/contact";
// import Pricing from "../components/pricing";
// import Projects from "../components/projects";
// import Services from "../components/services";

import featureImg from "../img/feature.jpg";
import section from "../img/section.jpg";
import svgUndraw from "../img/undraw_helpful_sign_s6al.svg";
import section3 from "../img/section-3Img.jpg";
import ceo from "../img/ceo.jpg";
import review1 from "../img/review1.jpg";
import review2 from "../img/review2.jpg";
import blog from "../img/blog.png";
import blogFeatureImg from "../img/blogFeatureImg.jpg";
import blogFeatureImg2 from "../img/blogFeatureImg2.jpg";
import blogFeatureImg3 from "../img/blogFeatureImg3.jpg";

const Home = () => {
  return (
    <Fragment>
    <div className="wrapper">
    
   
  
  <div className="featureImg">
    
    <div className="featureImg__left">
      <h1 className="featureImg__h1">
        We are here to <br />
        Serve you with best
      </h1>
      <p className="featureImg__p">
        Generate maximum return from your online campaigns with <br />
        proactive support supplied by our online advertising specialists .
      </p>

      <a className="featureImg__getStart" href="#" ><span className="featureImg__href">Get Started ></span></a>
  
    </div>
  
    <div className="featureImg__right">
      <img className="featureImg__image" src={featureImg} alt="featureImg" />
    </div>
   
  </div>
 


  <div className="cards">
    <div className="cards__row">
      <div className="cards__one">
        <i className="far fa-thumbs-up cards__icons cards__icon1"></i>
        <h4 className="cards__h4">
          <span className="cards__span">Better</span>
          <br />
          Than Ever ROI
        </h4>
        <a className="cards__href" href="#">Read More</a>
      </div>
    </div>
    <div className="cards__row">
      <div className="cards__one">
        <i className="far fa-chart-bar cards__icons cards__icon2"></i>
        <h4 className="cards__h4">
          <span className="cards__span1">Competitive </span>
          <br />
          Edge to market
        </h4>
        <a className="cards__href" href="#">Read More</a>
      </div>
    </div>
    <div className="cards__row">
      <div className="cards__one">
        <i className="far fa-eye cards__icons cards__icon3"></i>
        <h4 className="cards__h4">
          <span className="cards__span2">Increased </span>
          <br />
          overall Visibility
        </h4>
        <a className="cards__href" href="#">Read More</a>
      </div>
    </div>

    <div className="cards__row">
      <div className="cards__one">
        <i className="fas fa-bolt cards__icons cards__icon4"></i>
        <h4 className="cards__h4">
          <span className="cards__span3">Boost Your</span>
          <br />
          Businesss Sales
        </h4>
        <a className="cards__href" href="#">Read More</a>
      </div>
    </div>
  </div>
  
  <div className="section">
    <div className="section__left">
      <img
        className="section__img"
        src={section}
        alt="section-Illustration-img"
      />
    </div>
    <div className="section__right">
      <h2 className="section__h2">
        Trusted Partners
        <br />
        & Reliable Product Supply
      </h2>
      <p className="section__prg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A impedit
        dicta maxime dolore
        <br />
        ipsum quos deleniti iste, dolores accusamus.dicta maxime dolore ipsum
        quos deleniti iste
        <br />
        , dolores accusamus deleniti iste.
      </p>
      <h3><i className="fas fa-search section__icons"></i>Research</h3>
      <p className="section__prg">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum aliquam
        aut at <br />
        reiciendis porro labore.adipisicing elit. Eum aliquam aut at
        reiciendis porro labore.
      </p>

      <h3>
        <i className="far fa-window-maximize section__icons"></i>Development
      </h3>
      <p className="section__prg">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum aliquam
        aut at <br />
        reiciendis porro labore.adipisicing elit. Eum aliquam aut at
        reiciendis porro labore.
      </p>

      <h3><i className="fas fa-rocket section__icons"></i>Launch</h3>
      <p className="section__prg">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum aliquam
        aut at <br />
        reiciendis porro labore.adipisicing elit. Eum aliquam aut at
        reiciendis porro labore.
      </p>
    </div>
  </div>
  
  <div className="section section1">
    <div className="section__left">
      <img
        className="section__img"
        src={svgUndraw}
        alt="section-Illustration-img"
      />
    </div>
    <div className="section__right">
      <a className="cards__href section__acolor" href="#"
        >No #1 Ranking at Google</a>
      <h2 className="section__h2">
        We develop digital strategies
        <br />
        products and services.
      </h2>
      <p className="section__prg section__2sectionp">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A impedit
        dicta maxime dolore
        <br />
        ipsum quos deleniti iste, dolores accusamus.dicta maxime dolore ipsum
        quos deleniti iste
        <br />
        , dolores accusamus deleniti iste.
      </p>
      <a className="featureImg__getStart section__bckgclr" href="#"
        ><span className="featureImg__href"> Our Services ></span></a>
    </div>
  </div>
 
  <div className="pricingButton">
    <a href="#" className="middle-button">See Pricing</a>
  </div>
  
  <div className="section2">
    <h3 className="section2__h3">Our Experience</h3>
    <h2 className="section2__h2">
      We have completed 130+ projects
      <br />
      successfully
    </h2>
    <div className="section2__row">
      <div className="section2__div">
        <i className="far fa-thumbs-up fa-3x section2__icons"></i>
        <h1 className="section2__h1">40 <span className="section2__span">+</span></h1>
        <p>Countries Served</p>
      </div>

      <div className="section2__div">
        <i className="fas fa-globe fa-3x section2__icons"></i>
        <h1 className="section2__h1">5 <span className="section2__span">K</span></h1>
        <p>Global Customer</p>
      </div>

      <div className="section2__div">
        <i className="fas fa-chart-line fa-3x section2__icons"></i>
        <h1 className="section2__h1">
          600 <span className="section2__span">+</span>
        </h1>
        <p>Potential Growth</p>
      </div>

      <div className="section2__div">
        <i className="far fa-heart fa-3x section2__icons"></i>
        <h1 className="section2__h1">300<span className="section2__span">%</span></h1>
        <p>Expert Employee</p>
      </div>
    </div>
  </div>
 
  <div className="section3">
    <h3 className="section2__h3">Our working Process</h3>
    <h2 className="section2__h2">
      We love to share our working
      <br />
      process
    </h2>
    <div className="section3__wrapper">
      <div className="section3__left">
        <div className="section3__div">
          <div className="section3__icon">
            <i className="fas fa-search fa-3x section3__icons"></i>
          </div>
          <h4 className="section3__h4">Research Project</h4>
          <p className="section3__p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div className="section3__div">
          <div className="section3__icon">
            <i className="fas fa-tachometer-alt fa-3x section3__icons"></i>
          </div>
          <h4 className="section3__h4">Start Optimize</h4>
          <p className="section3__p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div className="section3__div">
          <div className="section3__icon">
            <i className="far fa-lightbulb fa-3x section3__icons"></i>
          </div>
          <h4 className="section3__h4">Find Ideas</h4>
          <p className="section3__p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div className="section3__div">
          <div className="section3__icon">
            <i className="fas fa-chart-line fa-3x section3__icons"></i>
          </div>
          <h4 className="section3__h4">Reach Target</h4>
          <p className="section3__p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>

      <div className="section3__right">
        <img src={section3} alt="Section3-Img" />
      </div>
    </div>
  </div>
  
  <div className="section4">
    <a className="section4__a" href="#">Get Consultant</a>
    <h4 className="section4__h4">
      Want to get your site optimized and
      <br />
      <span className="section4__span">ranked in google?</span>
    </h4>
    <a className="featureImg__getStart section4__button" href="#"
      ><span className="featureImg__href section4__a1">Contact Us</span></a
    >
  </div>
 
  <div className="section5">
    <img className="section5__img" src={ceo} alt="CEO" />
    <h1 className="section5__h1">Reeta Sharma</h1>
    <p className="section5__p">
      Focus on engaging, reusable content that decrease the cost per leads
      while helps you to
      <br />
      increase profits margin.modern engaging websites that always latest
      responsive technologies.
    </p>
    <h3 className="section5__h3">CEO</h3>
  </div>
  
  <div className="section6">
    <h3 className="section2__h3">Love from Clients</h3>
    <h5 className="section2__h2 section6__h5">
      Honest Reviews from clients
      <br />
      working experience with us
    </h5>
    <div className="section6__reviews">
      <div className="section6__review">
        <i className="far fa-star fa-2x section6__icon"></i>
        <i className="far fa-star fa-2x section6__icon"></i>
        <i className="far fa-star fa-2x section6__icon"></i>
        <i className="far fa-star fa-2x section6__icon"></i>
        <i className="far fa-star fa-2x section6__icon"></i>
        <p className="section6__p">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
          commodi minima atque quaerat, nobis velit.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          ullam modi, nam accusamus harum numquam.
        </p>
        <img className="section6__img" src={review1} alt="clientsImg" /> 
        <h2 className="section6__h2">Ali Dhuniya</h2>
        
      </div>

      <div className="section6__review section6__review2">
        <i className="far fa-star fa-2x section6__icon"></i>
        <i className="far fa-star fa-2x section6__icon"></i>
        <i className="far fa-star fa-2x section6__icon"></i>
        <i className="far fa-star fa-2x section6__icon"></i>
        <i className="far fa-star fa-2x section6__icon"></i>
        <p className="section6__p">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
          commodi minima atque quaerat, nobis velit.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          ullam modi, nam accusamus harum numquam.
        </p>
        <img className="section6__img" src={review2} alt="clientsImg" />
        <h2 className="section6__h2">Aleena Sharma</h2>
      </div>
    </div>
  </div>
 
  <div className="section7">
    <h3 className="section2__h3">News article</h3>
    <div className="section7__dv">
    <h5 className="section2__h2 section6__h5 section7__h5">
      Our blog article to get good idea about marketing
    </h5>
  </div>
  </div>

  <div className="mainWrapper">
    
    <div className="posts">
      
      <div className="posts__post">
        <div className="posts__heading">
          <div className="posts__avatarImg">
            <img className="posts__img" src={blog} alt="writer"></img>
          </div>
          <div className="posts__avatarInfo">
            <h3 className="posts__h3">Nandu Singh</h3>
            <a className="posts__href" href="#">2 Days ago</a>
          </div>
        </div>
        <div className="posts__imgDiv">
          <a href="#">
          <img className="posts__featureImg" src={blogFeatureImg} alt=""></img>
        </a>
        </div>
        <div className="posts__title">
          <a href="#">
          <p className="posts__description">
            Simple Ways To Optimize Your Website For SEO
          </p>
        </a>
        </div>
      </div>
     </div>

      <div className="posts">
      
        <div className="posts__post">
          <div className="posts__heading">
            <div className="posts__avatarImg">
              <img className="posts__img" src={blog} alt="writer"></img>
            </div>
            <div className="posts__avatarInfo">
              <h3 className="posts__h3">Nandu Singh</h3>
              <a className="posts__href" href="#">3 Days ago</a>
            </div>
          </div>
          <div className="posts__imgDiv">
            <a href="#">
            <img className="posts__featureImg" src={blogFeatureImg2} alt=""></img>
          </a>
          </div>
          <div className="posts__title">
            <a href="#">
            <p className="posts__description">
              Top Best Strategy to be ahead your journey
            </p>
          </a>
          </div>
        </div>

        <div className="posts">
        
          <div className="posts__post">
            <div className="posts__heading">
              <div className="posts__avatarImg">
                <img className="posts__img" src={blog} alt="writer"></img>
              </div>
              <div className="posts__avatarInfo">
                <h3 className="posts__h3">Nandu Singh</h3>
                <a className="posts__href" href="#">7 Days ago</a>
              </div>
            </div>
            <div className="posts__imgDiv">
              <a href="#">
              <img className="posts__featureImg" src={blogFeatureImg3} alt=""></img>
            </a>
            </div>
            <div className="posts__title">
              <a href="#">
              <p className="posts__description">
                Rank your Affiliate Product of Amazon at Top
              </p>
            </a>
            </div>
          </div>
      </div>

  </div>
  

  <div className="ftr">
    <div className="ftr__wrapper">
      <div className="ftr__div1">
        <h1 className="ftr__h1"><span className="ftr__span">d</span>igg.com</h1>
        <p className="ftr__p">Lorem ipsum dolor sit amet consectetur adipisicing
          <br />
           elit. Quam, numquam!</p>
      </div>
      <div className="ftr__div2">
        <h4 className="ftr__h4">Location</h4>
        <p className="ftr__p1">Moon Street Light Avenue, 14/05 <br />Jupiter, JP 80630 </p>
        <p className="ftr__p2">digg@gmail.com</p>
        <p>P : (+977) 9811565320</p>
      </div>
      <div className="ftr__div3">
        <h4 className="ftr__h4">Subscribe</h4>
        <p className="ftr__p3">Don’t miss to subscribe to our new 
          <br />
          feeds, kindly fill the form below. </p>
        <input type="text" className="ftr__form" placeholder="Email Address" />
        <br />
        <div className="ftr__button"></div>
        <a className="featureImg__getStart" href="#"
        ><span className="featureImg__href">Subscribe</span></a>
        </div>
      </div>
    </div>
  </div>
  

  <div className="btmFooter">
    <div className="btmFooter__container">
      <div className="btmFooter__left">
        <p className="btmFooter__p">&copy;2020 reserved to <span className="btmFooter__span">Digg</span></p>
        <a className="btmFooter__a" href="https://twitter.com/DhuniyaAli">Developed by Ali Hussain Dhuniya</a>
      </div>
      <div className="btmFooter__right">
        <i className="fab fa-facebook-square fa-3x btmFooter__icons"></i>
        <i className="fab fa-twitter fa-3x btmFooter__icons"></i>
        <i className="fab fa-youtube fa-3x btmFooter__icons"></i>
        <i className="fab fa-pinterest-square fa-3x btmFooter__icons"></i>
      </div>
    </div>
  </div>
  </div>

    </Fragment>
  );
}

export default Home;
