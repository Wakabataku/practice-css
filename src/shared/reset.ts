import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
html, body, div, span, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
abbr, address, cite, code,
del, dfn, em, img, ins, kbd, q, samp,
small, strong, sub, sup, var,
b, i,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, figcaption, figure,
footer, header, hgroup, menu, nav, section, summary,
time, mark, audio, video {
    margin:0;
    padding:0;
    border:0;
    outline:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
}
body {
    line-height:1;
}
article,aside,details,figcaption,figure,
footer,header,hgroup,menu,nav,section {
    display:block;
}
nav ul {
    list-style:none;
}
blockquote, q {
    quotes:none;
}
blockquote:before, blockquote:after,
q:before, q:after {
    content:'';
    content:none;
}
a {
    margin:0;
    padding:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
}
/* change colours to suit your needs */
ins {
    background-color:#ff9;
    color:#000;
    text-decoration:none;
}
/* change colours to suit your needs */
mark {
    background-color:#ff9;
    color:#000;
    font-style:italic;
    font-weight:bold;
}
del {
    text-decoration: line-through;
}
abbr[title], dfn[title] {
    border-bottom:1px dotted;
    cursor:help;
}
table {
    border-collapse:collapse;
    border-spacing:0;
}
/* change border colour to suit your needs */
hr {
    display:block;
    height:1px;
    border:0;
    border-top:1px solid #cccccc;
    margin:1em 0;
    padding:0;
}
input, select {
    vertical-align:middle;
}

html {
    font-size: 62.5%;
  }
  body {
    padding: 30px;
    background-color: #f6f7fb;
    color: #333;
    font-size: 1.2rem;
    font-family: "Hiragino Kaku Gothic ProN",  Meiryo,  sans-serif;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
  a:link, a:visited, a:hover, a:active {
    color: #7C5119;
    text-decoration: none;
  }
  
  
  /* --------------------------------
   * item
   * -------------------------------- */
  .item {
    width: 180px;
    margin-bottom: 4px;
    padding: 8px;
    border-bottom: 3px solid;
    border-radius: 5px;
    background-color: #fff;
  }
  .item .image {
    display: block;
    width: 100%;
    height: 109px;
  }
  .item .category {
    margin: 15px 9px 10px;
    color: #aaa;
    letter-spacing: 1px;
    font-family: "Trebuchet MS", "Hiragino Kaku Gothic ProN",  Meiryo,  sans-serif;
  }
  .item .category::before {
    content: '';
    display: inline-block;
    width: 19px;
    height: 19px;
    margin-right: 5px;
    border: 2px solid;
    border-radius: 50%;
    vertical-align: -5px;
  }
  .item .description {
    margin: 10px;
    line-height: 1.5;
  }
  .item > a {
    display: block;
    margin: -8px -8px -11px;
    padding: 8px 8px 11px;
    border-radius: inherit;
    color: #777;
    transition: all 0.3s;
  }
  .item > a:hover {
    box-shadow: 0 0 6px -1px rgba(0, 0, 0, 0.3);
    opacity: 0.8;
  }
  .item-maindish,
  .item-maindish .category::before {
    border-color: #FFC0CB;
  }
  .item-appetizer,
  .item-appetizer .category::before {
    border-color: #76C047;
  }
  .item-column,
  .item-column .category::before {
    border-color: #FFF100;
  }
  .item-breaktime,
  .item-breaktime .category::before {
    border-color: #C1EFFF;
  }
  .item-m {
    width: 364px;
  }
  .item-m .image {
    height: 146px;
  }
  .item-l {
    width: 732px;
  }
  .item-l .image {
    height: 403px;
  }
  
  
  /* --------------------------------
   * header
   * -------------------------------- */
  .header {
    padding: 25px 0;
    border-bottom: none;
    text-align: center;
  }
  .logo {
    width: 136px;
    height: 136px;
    transition: -webkit-transform 0.3s;
    transition: transform 0.3s;
  }
  .logo:hover {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
  .nav {
    margin: 35px auto 10px;
  }
  .nav-item {
    margin-top: 20px;
    text-align: center;
    letter-spacing: 1px;
    font-weight: bold;
    font-size: 1.3rem;
  }
  .nav-item a {
    display: inline-block;
  }
  .nav-item a::after {
    content: '';
    display: block;
    width: 0;
    margin: 6px auto 0;
    border-bottom: 1px solid #7C5119;
    transition: width 0.3s ease-in-out;
  }
  .nav-item a:hover::after {
    width: 100%;
  }

`