import React from 'react'
import styled, { createGlobalStyle, css } from 'styled-components'

import { Clearfix } from '../../shared/Clearfix'
import bgHeader from '../../images/bg-header.gif'
import logo from '../../images/logo.png'
import hotTopic from '../../images/hot-topic.jpg'
import bgSlash from '../../images/bg-slash.gif'
import articleImage from '../../images/article.jpg'
import ranking from '../../images/ranking.jpg'
import arrow from '../../images/arrow.gif'

const StandardLayout = () => {
  return (
    <>
      <StandardStyle />
      <Layout>
        <Head>
          <Title>スタンダードレイアウト</Title>
        </Head>
        <Body>
          <Header>
            <Logo>
              <a>Sample Site</a>
            </Logo>
            <GlobalNav>
              <ul>
                <li className="nav-item active">
                  <a>HOME</a>
                </li>
                <li className="nav-item">
                  <a>ABOUT</a>
                </li>
                <li className="nav-item">
                  <a>NEWS</a>
                </li>
                <li className="nav-item">
                  <a>TOPICS</a>
                </li>
              </ul>
            </GlobalNav>
          </Header>
          <Wrapper>
            <Main>
              <Hidden>HOT TOPIC</Hidden>
              <HotTopic>
                <img
                  className="image"
                  src={hotTopic}
                  alt="コーディング画面"
                ></img>
                <div className="content">
                  <h3 className="title">
                    実務で使えるHTML/CSS
                    <br />
                    モダンコーディング
                  </h3>
                  <p className="desc">
                    Webフロントエンドの進化の勢いはとどまるところを知りません．
                    新しい要素が増えて大幅に表現力が広がったHTML5/CSS3を活用して...
                  </p>
                  <time className="date" dateTime="2021-08-28">
                    2021.08.28 Sat
                  </time>
                </div>
              </HotTopic>
              <Heading>NEWS</Heading>
              <ScrollList>
                <li className="scroll-item">
                  <a href="#">
                    <time className="date" dateTime="2021-08-23">
                      2021.08.23 SAT
                    </time>
                    <span className="category news">NEWS</span>
                    <span className="title">WORKSを更新しました</span>
                  </a>
                </li>
                <li className="scroll-item">
                  <a href="#">
                    <time className="date" dateTime="2021-08-12">
                      2021.08.12 SUN
                    </time>
                    <span className="category">TOPIC</span>
                    <span className="title">
                      CSSでここまでできる!?ホントに使えるCSSセレクタ
                    </span>
                  </a>
                </li>
              </ScrollList>
              <Hidden>ARTICLES</Hidden>
              <Articles>
                <a href="#" className="article-box">
                  <h3 className="title">
                    実務で使えるHTML/CSSモダンコーディングTIPS
                  </h3>
                  <p className="desc">
                    新しい要素が増えて大幅に表現力が広がったHTML5/CSS3を活用し，
                    モダンなコーディングにチャレンジしましょう
                  </p>
                  <time className="date" dateTime="2021-08-12">
                    2021.08.12 THE
                  </time>
                  <img
                    className="image"
                    src={articleImage}
                    alt="コーディング画面"
                  ></img>
                </a>
              </Articles>
            </Main>
            <SideMenu>
              <Ranking>
                <h2 className="heading">RANKING</h2>
                <ol className="ranking">
                  <li className="ranking-item">
                    <a href="#">
                      <img
                        className="image"
                        src={ranking}
                        alt="グラフの画像"
                      ></img>
                      <span className="order"></span>
                      <p className="text">
                        HTML/CSSコーディングと切っても切れないWebブラウザのシェア動向をチェックしよう
                      </p>
                    </a>
                  </li>
                  <li className="ranking-item">
                    <a href="#">
                      <img
                        className="image"
                        src={ranking}
                        alt="グラフの画像"
                      ></img>
                      <span className="order"></span>
                      <p className="text">
                        HTML/CSSコーディングと切っても切れないWebブラウザのシェア動向をチェックしよう
                      </p>
                    </a>
                  </li>
                </ol>
              </Ranking>
              <Documents>
                <h2 className="heading">DOCUMENTS</h2>
                <ul className="documents">
                  <li>
                    <h3 className="title">HTML5</h3>
                    <ul>
                      <li>
                        <a href="#">追加された要素</a>
                      </li>
                      <li>
                        <a href="#">削除された要素</a>
                      </li>
                      <li>
                        <a href="#">意味が変わった要素</a>
                      </li>
                      <li>
                        <a href="#">HTML5のコンテンツモデル</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h3 className="title">CSS3</h3>
                    <ul>
                      <li>
                        <a href="#">追加されたプロパティ</a>
                      </li>
                      <li>
                        <a href="#">追加されたセレクタ</a>
                      </li>
                      <li>
                        <a href="#">追加された単位</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h3 className="title">Javascript</h3>
                    <ul>
                      <li>
                        <a href="#">Javascriptの言語仕様</a>
                      </li>
                      <li>
                        <a href="#">ECMAScriptとは?</a>
                      </li>
                      <li>
                        <a href="#">jQueryとは？</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h3 className="title">Sass, Less, Stylus</h3>
                    <p>準備中</p>
                  </li>
                  <li>
                    <h3 className="titlle">Typescript</h3>
                    <p>準備中</p>
                  </li>
                </ul>
              </Documents>
              <SearchForm>
                <h2 className="hidden">SEARCH</h2>
                <form className="search-box">
                  <input
                    className="search-input"
                    type="text"
                    placeholder="SEARCH"
                  />
                  <input className="search-button" type="submit" value="検索" />
                  <p className="text">サイト内の文章を検索できます</p>
                </form>
              </SearchForm>
            </SideMenu>
          </Wrapper>
          <Footer>
            <ul className="horizontal-list">
              <li className="horizontal-item">
                <a href="#">ABOUT ME</a>
              </li>
              <li className="horizontal-item">
                <a href="#">SITE</a>
              </li>
              <li className="horizontal-item">
                <a href="#">SNS</a>
              </li>
              <li className="horizontal-item">
                <a href="#">CONTACT</a>
              </li>
            </ul>
          </Footer>
        </Body>
      </Layout>
    </>
  )
}
export default StandardLayout

const StandardStyle = createGlobalStyle`
            *, *::before, *::after {
                box-sizing: border-box;
}
            a {
    &:link, &:visited, &:hover, &:active{
                color: #d03c56;
            text-decoration: none;
    }
}
            `

const Layout = styled.div`
  font-size: 62.5%;
`

const Head = styled.head``

const Title = styled.title``

const Body = styled.body`
  color: #333;
  font-size: 1.2rem;
  font-family: 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif;
`
//**************************//
//**********header*********/
//*************************/
const Header = styled.header`
  width: 100%;
  padding: 28px 0 10px;
  background: url(${bgHeader}) repeat-x;
  box-shadow: 0 0 10px 1px #e3e3e3;
`

const Logo = styled.h1`
  width: 225px;
  height: 56px;
  margin: 0 auto;
  background: url(${logo}) no-repeat;
  overflow: hidden;
  text-indent: 100%;
  white-space: nowrap;
  a {
    display: block;
    width: 100%;
    height: 100%;
  }
`
const GlobalNav = styled.nav`
  margin-top: 15px;
  text-align: center;
  .nav-item {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    display: block;
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 8px;
    color: #666;
    font-size: 1.3rem;
    letter-spacing: 1px;
    transition: 0.15s;
  }
  .active a,
  a:hover {
    background-color: #d03c56;
    color: #fff;
  }
`

const Wrapper = styled.div`
  ${Clearfix}
  width: 970px;
  margin: 30px auto 40px;
`
//**************************//
//***********main***********/
//*************************/
const Main = styled.main`
  display: block;
  float: left;
  width: 660px;
  margin-right: 35px;
`

const Hidden = styled.h2`
  display: none;
`

const HotTopic = styled.a`
  ${Clearfix}
  display: block;
  height: 300px;
  margin-bottom: 30px;
  box-shadow: 0 6px 4px -4px rgba(0, 0, 0, 0.15);
  transition: opacity 0.15s;
  &:hover {
    opacity: 0.85;
  }
  .image {
    float: left;
    width: 50%;
    height: 100%;
  }
  .content {
    position: relative;
    float: left;
    width: 50%;
    height: 100%;
    padding: 105px 25px 0;
    background-color: #2d3d54;
    line-height: 1.6;
  }
  .title {
    margin-bottom: 15px;
    color: #fff;
    font-weight: normal;
    font-size: 2rem;
  }
  .desc {
    color: #ddc;
  }
  .date {
    position: absolute;
    top: 60px;
    left: 0;
    width: 140px;
    padding: 4px;
    background-color: #fff;
    color: #2d3d54;
    text-align: center;
    letter-spacing: 1px;
    font-weight: bold;
    font-size: 1.1rem;
    line-height: 1;
  }
`

const Heading = styled.h2`
  padding: 10px 12px;
  background: url(${bgSlash});
  letter-spacing: 1px;
  font-size: 1.6rem;
`

const ScrollList = styled.ul`
  max-height: 220px;
  overflow-y: auto;
  margin-bottom: 30px;
  list-style-type: none;

  .scroll-item {
    a {
      display: block;
      padding: 10px 15px;
      color: #333;
      transition: background-color 0.1s;
      &:hover {
        background-color: #fafaf8;
      }
    }
    &:nth-of-type(even) a {
      background: url(${bgSlash});
    }
  }

  .date {
    display: inline-block;
    width: 19%;
    letter-spacing: 1px;
    font-weight: bold;
    font-size: 1rem;
  }
  .category {
    display: inline-block;
    width: 8%;
    border-radius: 5px;
    background-color: #d03c56;
    color: #fff;
    text-align: center;
    letter-spacing: 1px;
    font-size: 1rem;
    line-height: 16px;
  }
  .news {
    background-color: #2c3c53;
  }
  .title {
    display: inline-block;
    width: 73%;
    padding-left: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 1.2rem;
  }
`
//********Articles**********/
const Articles = styled.div`
  ${Clearfix}
  .article-box {
    position: relative;
    display: block;
    width: 315px;
    height: 360px;
    margin-bottom: 30px;
    padding: 210px 15px 0;
    box-shadow: 6px 6px 8px -4px rgba(0, 0, 0, 0.15);
    transition: opacity 0.15s;
    &:hover {
      opacity: 0.8;
    }

    &:nth-of-type(odd) {
      float: left;
    }
    &:nth-of-type(even) {
      float: right;
    }
    .title {
      margin-top: 30px;
      color: #555;
      font-size: 1.4rem;
      line-height: 1.6;
    }
    .desc {
      margin-top: 5px;
      color: #333;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .date {
      position: absolute;
      right: 0;
      bottom: 15px;
      display: block;
      width: 160px;
      padding: 4px;
      background-color: #b5d264;
      color: #2d3d54;
      text-align: center;
      letter-spacing: 1px;
      font-weight: bold;
      font-size: 1.1rem;
    }
    .image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
    }
  }
`

//**************************//
//**********SideMenu***********/
//*************************/
const SideMenu = styled.div`
  width: 275px;
  float: right;
`
const RankContents = css`
  border: none;
  color: #fff;
  font-weight: normal;
  line-height: 18px;
`
const Ranking = styled.div`
  .ranking {
    margin-bottom: 30px;
    list-style-type: none;
    counter-reset: ranking;
  }
  .ranking-item {
    margin-top: 15px;
    a {
      display: block;
      font-size: 0;
      transition: opacity 0.15s;
    }
    a:hover {
      opacity: 0.8;
    }
    .image {
      width: 55px;
      height: 55px;
    }
    .text {
      display: inline-block;
      width: 182px;
      color: #000;
      vertical-align: top;
      font-size: 1.2rem;
      line-height: 1.5;
    }
    .order {
      display: inline-block;
      width: 18px;
      height: 18px;
      margin: 0 10px;
      border: 1px solid #ccc;
      color: #aaa;
      vertical-align: 20px;
      text-align: center;
      font-weight: bold;
      line-height: 16px;
      transform: rotate(45deg);
      &::before {
        content: counter(ranking);
        counter-increment: ranking;
        display: inline-block;
        font-size: 1rem;
        transform: rotate(-45deg);
      }
    }
    &:nth-of-type(1) .order {
      ${RankContents}
      background-color: #dab413;
    }
    &:nth-of-type(2) .order {
      ${RankContents}
      background-color: #6e7b84;
    }
    &:nth-of-type(3) .order {
      ${RankContents}
      background-color: #a0541a;
    }
  }
`

const Documents = styled.div`
  .documents {
    margin: 10px 10px 30px;
  }
  ul {
    list-style-type: none;
  }
  .documents > li .title {
    margin: 15px 0;
    padding-left: 8px;
    border-left: 5px solid #d03c56;
    font-size: 1.4rem;
    line-height: 1.2;
  }
  .documents > li + li {
    margin-top: 25px;
  }
  .documents > li ul {
    margin: 15px;
  }
  .documents > li ul > li {
    margin-bottom: 15px;
    padding-left: 10px;
    background: url(${arrow}) no-repaeat left center;
  }
  a:hover {
    text-decoration: underline;
  }
`

const SearchForm = styled.div`
  .search-box {
    padding: 15px;
    background-color: #ccc;
    font-size: 0;
    & > * {
      font-size: 1.2rem;
    }
    .search-input {
      width: 205px;
      height: 26px;
      padding: 0 10px;
      border: none;
    }
    .search-button {
      width: 40px;
      height: 26px;
      border: none;
      background-color: #d03c56;
      color: #fff;
      cursor: pointer;
    }
    .text {
      margin-top: 12px;
    }
  }
`
//**************************//
//**********Footer***********/
//*************************/
const Footer = styled.footer`
  .horizontal-list {
    width: 970px;
    margin: 0 auto;
    text-align: right;
    font-size: 0;
  }
  .horizontal-item {
    display: inline-block;
    padding: 0 15px;
    letter-spacing: 1px;
    & + .horizontal-item {
      border-left: 1px solid #bbb;
    }
  }
  a {
    border-bottom: 1px dashed #777;
    color: #bbb;
    font-size: 1.1rem;
    transition: color 0.15s;
    &:hover {
      color: #ddd;
    }
  }
`
