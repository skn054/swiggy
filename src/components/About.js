import { useEffect, useState } from "react";
// import { Link, Outlet } from "react-router-dom";
import food from '../images/burger-image.png'

const About = () => {
  // const [show, setShow] = useState(false);

  // useEffect(()=>{
  //   console.log("hello");
  //   const timer = setInterval(()=>{console.log("About timer")},1000);

  //   return(   // use effect will return a function which will be used as componentWillUnmount(to clear resources used in the component) -> called after 'About' component is unmounted from DOM.
  //     function(){
  //       clearInterval(timer);
  //     }
  //   )
  // })
  

  return (
    <div>
      <div className="about-container">
        <div className="about-left">
          <h1>
            Welcome to <br /> The world of <br />{" "}
            <span>Tasty & Fresh Food</span>
          </h1>
          <h4>
            "Better you will feel if you eat a Food<span>Fire</span> healthy
            meal"
          </h4>
        </div>
        <div className="about-right">
          <img src={food} alt="Food Image" />
        </div>
      </div>
    </div>
  );
};

export default About;