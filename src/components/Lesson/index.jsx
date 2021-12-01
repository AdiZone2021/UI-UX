import React from "react";
import {Link} from "react-router-dom";
import "./Lesson.css"

export const Lessons = ({name}) => {

    return (
      <div className="lessons" >
          <div className="title" >
              <h1>Кош келдиниз! {name}</h1>
              <Link to="/" ><button className="btn" >Чыгуу</button></Link>
          </div>
          <iframe className="less"
              src="https://www.youtube.com/embed/UfDK4_2zB3w" 
              title="YouTube video player" frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
          </iframe>
      </div>
    );
};