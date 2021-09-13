import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-regular-svg-icons'
import { faPaintBrush, faCode } from '@fortawesome/free-solid-svg-icons'

// import { sp } from '../shared/media'
import bg from '../images/bg.png'
import tree from '../images/tree.jpg'
import building from '../images/building.jpg'
import lake from '../images/lake.jpg'
import sky from '../images/sky.jpg'

const SinglePage: React.VFC = () => {
  // const Idea = <FontAwesomeIcon icon="fa-regular fa-lightbulb" />
  return (
    <>
      <Body>
        <Header>
          <p className="site-title-sub">Web designer's portfolio</p>
          <h1 className="site-title">HI, MY NAME IS ...</h1>
          <p className="site-description">Check out some of my works</p>
          <div className="buttons">
            <Button href="#about">LEARN MORE</Button>
            <ButtonShowy href="#contact">SEND MESSAGE</ButtonShowy>
          </div>
        </Header>
        <About id="about">
          <h2 className="heading">ABOUT ME</h2>
          <p className="about-text">
            はじめまして．日本でWebデザイナーをしています．
            <br />
            デザインの専門学校を卒業し，制作会社での業務経験を経て，現在はフリーランスとして働いています.
          </p>
          <p className="about-text">
            このサイトは「HTML/CSS
            モダンコーディング」という書籍のサンプルとしてつくられた，架空のWebデザイナーのポートフォリオです．
            <br />
            このサンプルのようなサイトをいちからつくる過程を通して，HTMLとCSSの実践的なコーディングノウハウを学ぶことができます．
          </p>
        </About>
        <Works>
          <h2 className="heading">WORKS</h2>
          <WorksWrapper>
            <div className="work-box tree">
              <img className="work-image" src={tree} alt="制作事例1"></img>
              <div className="work-description">
                <div className="work-description-inner">
                  <p className="work-text">
                    1つ目の事例が入ります．
                    <br />
                    簡単な説明が入ります. <br />
                    使用ツール：********* <br />
                    <ButtonGhost>READ ME</ButtonGhost>
                  </p>
                </div>
              </div>
            </div>
            <div className="work-box building">
              <img className="work-image" src={building} alt="制作事例2"></img>
              <div className="work-description">
                <div className="work-description-inner">
                  <p className="work-text">
                    2つ目の事例が入ります．
                    <br />
                    簡単な説明が入ります. <br />
                    使用ツール：********* <br />
                    <ButtonGhost>READ ME</ButtonGhost>
                  </p>
                </div>
              </div>
            </div>
            <div className="work-box lake">
              <img className="work-image" src={lake} alt="制作事例3"></img>
              <div className="work-description">
                <div className="work-description-inner">
                  <p className="work-text">
                    3つ目の事例が入ります．
                    <br />
                    簡単な説明が入ります. <br />
                    使用ツール：********* <br />
                    <ButtonGhost>READ ME</ButtonGhost>
                  </p>
                </div>
              </div>
            </div>
            <div className="work-box sky">
              <img className="work-image" src={sky} alt="制作事例4"></img>
              <div className="work-description">
                <div className="work-description-inner">
                  <p className="work-text">
                    4つ目の事例が入ります．
                    <br />
                    簡単な説明が入ります. <br />
                    使用ツール：********* <br />
                    <ButtonGhost>READ ME</ButtonGhost>
                  </p>
                </div>
              </div>
            </div>
          </WorksWrapper>
        </Works>
        <Skills>
          <h2 className="heading">MY SKILLS</h2>
          <div className="skill-wrapper">
            <SkillBox>
              <FontAwesomeIcon className="skill-icon" icon={faLightbulb} />
              <div className="skill-title">IDEA</div>
              <p className="skill-text">
                何かを考えることが好きです．
                <br />
                新しいことを思いついて試しています.
                <br />
                ディレクションの経験もあります．
              </p>
            </SkillBox>
            <SkillBox>
              <FontAwesomeIcon className="skill-icon" icon={faPaintBrush} />
              <div className="skill-title">DESIGN</div>
              <p className="skill-text">
                見た目のきれいさだけじゃなくて,
                <br />
                使いやすさ，情報の伝わりやすさなど,
                <br />
                その先まで考えることを意識しています．
              </p>
            </SkillBox>
            <SkillBox>
              <FontAwesomeIcon className="skill-icon" icon={faCode} />
              <div className="skill-title">CODING</div>
              <p className="skill-text">
                HTML/CSSコーディングを行います． <br />
                正しく美しいマークアップへと， <br />
                今後の変更への強さを考慮しています．
              </p>
            </SkillBox>
          </div>
        </Skills>
        <Contact id="contact">
          <h2 className="heading">CONTACT</h2>
          <form className="contact-form">
            <input type="text" name="name" />
            <textarea name="message"></textarea>
            <input type="submit" value="SEND" />
          </form>
        </Contact>
        <Footer>Sample Site</Footer>
      </Body>
    </>
  )
}

export default SinglePage

const Body = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');
  font-size: 62.5%;
  box-sizing: border-box;
  background: #151515 url(${bg}) no-repeat fixed left bottom;
  background-size: cover;
  color: #fff;
  text-align: center;
  font-size: 1.4rem;
  font-family: 'Open Sans', 'Hiragino Kaku Gothic Pron', Meiryo, sans-serif;
  .heading {
    margin: 30px 0 15px;
    letter-spacing: 2px;
    font-size: 4rem;
  }
`

const Header = styled.header`
  padding: 170px 30px 80px;

  .site-title-sub {
    margin: 0 0 30px;
    letter-spacing: 1px;
    font-size: 2.2rem;
    &::before,
    &::after {
      content: '';
      display: inline-block;
      width: 140px;
      height: 2px;
      margin: 0 30px;
      background-color: #fff;
      vertical-align: middle;
    }
  }
  .site-title {
    margin: 50px 0 40px;
    font-size: 7.6rem;
  }
  .site-description {
    margin-bottom: 50px;
    color: #888;
    font-size: 1.6rem;
  }
`

const Button = styled.a`
  display: inline-block;
  width: 200px;
  margin: 10px;
  padding: 20px;
  border-radius: 4px;
  background-color: #afa58d;
  color: #fff;
  text-decoration: none;
  letter-spacing: 1px;
  font-size: 1.2rem;
  &:hover {
    opacity: 0.9;
  }
`

const ButtonShowy = styled(Button)`
  background-color: #f1b400;
`

const About = styled.section`
  padding: 80px 30px;
  background-color: #fff;
  color: #333;
  .heading {
    position: relative;
    display: inline-block;
    padding-bottom: 15px;
    &::before,
    &::after {
      content: '';
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      border-bottom: 1px solid #999;
    }
    &::before {
      bottom: 5px;
    }
  }
  .about-text {
    margin: 30px 0;
    line-height: 2.5;
  }
`

const Works = styled.section`
  background-color: #383634;
  padding: 80px 0;
`

const WorksWrapper = styled.div`
  display: table;
  width: 100%;
  margin-top: 60px;
  table-layout: fixed;
  .work-box {
    position: relative;
    display: table-cell;
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      height: 50%;
      background-size: 100% 100%;
      opacity: 0.2;
      transform: scaleY(-1);
    }
    &:nth-child(odd) .work-image {
      margin: 60% 0 0;
    }
    &:nth-child(odd) {
      .work-description,
      &::after {
        top: 0;
      }
    }
  }
  .tree::after {
    background-image: url(${tree});
  }
  .building::after {
    background-image: url(${building});
  }
  .lake::after {
    background-image: url(${lake});
  }
  .sky::after {
    background-image: url(${sky});
  }
  .work-image {
    display: block;
    width: 100%;
    margin: 0 0 60%;
  }
  .work-description {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 50%;
    z-index: 1;
  }
  .work-description-inner {
    display: table;
    width: 100%;
    height: 100%;
    padding: 20px;
  }
  .work-text {
    display: table-cell;
    vertical-align: middle;
    font-size: 1.2rem;
    line-height: 2;
  }
`

const ButtonGhost = styled(Button)`
  width: 60%;
  margin-top: 20px;
  padding: 3px;
  border: 1px solid #fff;
  background-color: rgba(255, 255, 255, 0.15);
`

const Skills = styled.section`
  padding: 80px 0;
  background-color: #fff;
  color: #333;
  .skill-wrapper {
    display: table;
    width: 80%;
    margin: 50px auto 0;
    table-layout: fixed;
  }
`

const SkillBox = styled.div`
  display: table-cell;
  .skill-title {
    margin: 0 20px 20px;
    font-size: 2rem;
  }
  .skill-text {
    margin: 0 20px;
    line-height: 2;
  }
  .skill-icon {
    width: 150px;
    height: 150px;
    margin-bottom: 30px;
    border: 4px solid;
    border-radius: 50%;
    padding: 30px;
    color: #f1b400;
    line-height: 142px;
  }
`

const Contact = styled.section`
  padding: 80px 0 150px;
  .contact-form {
    width: 50%;
    margin: 50px auto 0;
  }
  input[type='text'],
  textarea {
    display: block;
    width: 100%;
    margin-bottom: 10px;
    padding: 15px;
    outline: none;
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 0;
    background-color: rgba(255, 255, 255, 0.05);
    color: #fff;
    &:focus {
      box-shadow: 0 0 8px rgba(255, 255, 255, 0.5) inset;
    }
  }
  textarea {
    height: 150px;
  }
  input[type='submit'] {
    display: block;
    width: 200px;
    margin: 40px auto 0;
    padding: 15px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 5px;
    background-color: transparent;
    color: rgba(255, 255, 255, 0.6);
    cursor: pointer;
    &:hover {
      background-color: rgba(255, 255, 255, 0.05);
    }
  }
`

const Footer = styled.footer`
  padding: 12px 0;
  font-size: 1.3rem;
`
