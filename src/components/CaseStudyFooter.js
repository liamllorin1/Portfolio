import React from "react"
import { Link } from "gatsby"
import { css, cx } from 'emotion'
import "../styles/fonts.css"
import spacing from '../styles/spacingConstants.js'
import ButtonBold from '../components/ButtonBold'

export default function CaseStudyFooter(props) {
  return(
    <div className = {styles.footerSection}>
      <div class = 'spacer'></div>
      <div>
        <h5 style = {{color: 'rgb(160,160,160)'}}>Thanks for viewing</h5>
        <div style = {{display: 'flex'}}>
          <h2 style = {{margin: 0, marginRight: '50px'}} class = 'light'>Back to my projects.</h2>
          <Link to = {'/'} style = {{textDecoration: 'none'}}>
            <ButtonBold title = 'Portfolio' buttonColor = 'rgb(245,245,245)' titleColor= 'rgb(15,15,15)'/>
          </Link>
        </div>
      </div>
      <div class = 'spacer'></div>
    </div>
  )
}

const styles = {
  footerSection:css`
    background-image: linear-gradient(80deg, rgb(30, 30, 30), rgb(50, 50, 50), rgb(90, 90, 90));
    padding: 150px 0;
    display: grid;
    grid-template-columns: ${spacing.desktop.mediumMargin} auto ${spacing.desktop.mediumMargin};
  `,
}
