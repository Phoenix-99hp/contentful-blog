import { createGlobalStyle } from "styled-components";
import MontserratBold from "../../fonts/Montserrat-BoldItalic.ttf";
import MontserratSemi from "../../fonts/Montserrat-SemiBoldItalic.ttf";
import MontserratAltReg from "../../fonts/MontserratAlternates-Regular.ttf";
import MontserratAltSemi from "../../fonts/MontserratAlternates-SemiBold.ttf";
import MontserratAltLight from "../../fonts/MontserratAlternates-Light.ttf";
import MontserratReg from "../../fonts/Montserrat-Regular.ttf";
import MontserratRegSemi from "../../fonts/Montserrat-SemiBold.ttf";

const GlobalStyle = createGlobalStyle`

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

html,
body {
  height: 100%;
  width: 100%;
}

@font-face {
  font-family: MontserratBold;
  src: url(${MontserratBold});
}

@font-face {
  font-family: MontserratSemi;
  src: url(${MontserratSemi});
}

@font-face {
  font-family: MontserratAltReg;
  src: url(${MontserratAltReg});
}

@font-face {
  font-family: MontserratAltSemi;;
  src: url(${MontserratAltSemi});
}

@font-face {
  font-family: MontserratAltLight;;
  src: url(${MontserratAltLight});
}

@font-face {
  font-family: MontserratReg;;
  src: url(${MontserratReg});
}

@font-face {
  font-family: MontserratRegSemi;
  src: url(${MontserratRegSemi});
}
`;

MontserratAltSemi;

export default GlobalStyle;
