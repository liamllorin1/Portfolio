import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import $ from 'jquery';
import Image from "../components/image"
import SEO from "../components/seo"

let lastId;
let cur = [];
const highlightTextStyle = {"color": "rgb(30,30,30)"};
const dormantTextStyle = {"color": "rgb(230,230,230)"};
const highlightTabStyle = {"background-color": "rgb(230,230,230)"};
const dormantTabStyle = {"background-color": "rgb(30,30,30)"};
//const initialStyles = [highlightStyle, 4 x dormantStyle]

const scrollFunction = function(e) {
  e.preventDefault();
  let section = e.currentTarget.getAttribute('href');
  $("html, body").animate({
      scrollTop: $(section).offset().top + 1
  });
}

export default function NavBar(props) {//THIS ENTIRE BLOCK IS RE-RENDERED ON SETSTATE
  let { navLinks } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", event => {
      let mainNavLinks = document.querySelectorAll("nav a");
      let mainSections = document.querySelectorAll("section");
      let fromTop = window.pageYOffset;
      mainNavLinks.forEach((link, index) => {
        if (!link.hash) return;
        let section = document.querySelector(link.hash);
        if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
          //we are in that section => it should be highlighted
          if (activeIndex !== index) {//if it's not already highlighted
            setActiveIndex(index);
          }
        }
      });
    });
  }, [activeIndex]);

  return (
  <nav className = {styles.navBarContainer}>
    {navLinks.map((navLink, index) => {
      return (
        <a href = {navLink.href} className = {styles.navLink} onClick = {scrollFunction}>
          <div className = {styles.navTab} style = {activeIndex === index ? highlightTabStyle : dormantTabStyle}>
            <h6 className = {styles.navTabText}style = {activeIndex === index ? highlightTextStyle : dormantTextStyle}>{navLink.tabTitle}</h6>
          </div>
        </a>
      )
    })}
  </nav>)
}

const styles = {
  navBarContainer:css`
  position: fixed;
  top: 25px;
  right: 25px;
  background-color: rgb(30,30,30);
  z-index: 100;
  box-shadow: 0px 0px 5px rgb(0,0,0, .1);
  `,
  navTab:css`
    min-width: 150px;
    padding-left: 25px;
    height: 50px;
    margin: 0;
  `,
  navTabText:css`
  line-height: 50px;
  margin-block-start: 0em;
  margin-block-end: 0em;
  `,
  navLink:css`
    text-decoration: none;
    :hover & {
      text-decoration: none;
    }
    :visited & {
      text-decoration: none;
    }
  `
}