(self.webpackChunkdavidjaimes_com=self.webpackChunkdavidjaimes_com||[]).push([[913],{7631:function(a,e,t){"use strict";t.r(e),t.d(e,{_frontmatter:function(){return r},default:function(){return i}});var n=t(9756),s=(t(7294),t(4983)),o=t(283),p=["components"],r={},c={_frontmatter:r},l=o.Z;function i(a){var e=a.components,t=(0,n.Z)(a,p);return(0,s.kt)(l,Object.assign({},c,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Time series analysis in search for eclipsing binary stars can be daunting. Sometimes, it takes hours--even days or months--to find a single eclipsing binary in a dataset. However, when you find one, it is exciting. The following is an example light curve for target Kepler Object of Interest (KOI) 3570."),(0,s.kt)("br",null),(0,s.kt)("br",null),(0,s.kt)("h2",null,"KOI-3570"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"KOI-3570")," (aliases: ",(0,s.kt)("strong",{parentName:"p"},"2MASS J19405783+4009273"),", ",(0,s.kt)("strong",{parentName:"p"},"KIC 5023948"),", and ",(0,s.kt)("strong",{parentName:"p"},"WISE J194057.82+400927.3"),") is an eclipsing binary star system. It is a member of the old open cluster NGC 6819. By analyzing the eclipse properties of this system, we can measure the mass and radius of each star. These measurements can be used to precisely determine the age of the stars."),(0,s.kt)("br",null),(0,s.kt)("br",null),(0,s.kt)("h2",null,"Getting the data: FITS file"),(0,s.kt)("p",null,"If you're familiar getting FITS files, then download the data from ",(0,s.kt)("a",{parentName:"p",href:"https://exoplanetarchive.ipac.caltech.edu"},"Nasa Exoplanet Archive"),". I downloaded the following batch file ",(0,s.kt)("code",{parentName:"p",className:"language-text"},"download_exoarch_27821.bat")," from the archive."),(0,s.kt)("div",{className:"gatsby-highlight","data-language":"bash"},(0,s.kt)("pre",{parentName:"div",className:"language-bash"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},(0,s.kt)("span",{parentName:"code",className:"command-line-prompt"},(0,s.kt)("span",{parentName:"span","data-user":"root","data-host":"localhost"})),(0,s.kt)("span",{parentName:"code",className:"token function"},"wget")," -v -O ",(0,s.kt)("span",{parentName:"code",className:"token string"},"'kplr005023948-2012060035710_slc_lc.tbl'")," ",(0,s.kt)("span",{parentName:"code",className:"token string"},"'http://exoplanetarchive.ipac.caltech.edu:80/data/ETSS//Kepler/005/756/03/kplr005023948-2012060035710_slc_lc.tbl'")))),(0,s.kt)("br",null),(0,s.kt)("p",null,"If you don't have the ",(0,s.kt)("code",{parentName:"p",className:"language-text"},"wget")," command installed in your system, then I recommend installing ",(0,s.kt)("a",{parentName:"p",href:"https://brew.sh/"},"Homebrew")," and using the following command:"),(0,s.kt)("div",{className:"gatsby-highlight","data-language":"bash"},(0,s.kt)("pre",{parentName:"div",className:"language-bash"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},(0,s.kt)("span",{parentName:"code",className:"command-line-prompt"},(0,s.kt)("span",{parentName:"span","data-user":"root","data-host":"localhost"})),"brew ",(0,s.kt)("span",{parentName:"code",className:"token function"},"install")," ",(0,s.kt)("span",{parentName:"code",className:"token function"},"wget")))),(0,s.kt)("br",null),(0,s.kt)("br",null),(0,s.kt)("h2",null,"Lightcurve"),(0,s.kt)("p",null,"Use ",(0,s.kt)("a",{parentName:"p",href:"https://www.astropy.org/"},"AstroPy")," to plot a lightcurve (flux vs time) for KOI-3570. I am using ",(0,s.kt)("code",{parentName:"p",className:"language-text"},"kplr005023948-2012060035710_slc.fits")," because it has the greatest amount of data points in any file on the batch list--over 40,000 points."),(0,s.kt)("div",{className:"gatsby-highlight","data-language":"python"},(0,s.kt)("pre",{parentName:"div",className:"language-python"},(0,s.kt)("code",{parentName:"pre",className:"language-python"},(0,s.kt)("span",{parentName:"code",className:"token keyword"},"from")," astropy",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"."),"io ",(0,s.kt)("span",{parentName:"code",className:"token keyword"},"import")," fits\n",(0,s.kt)("span",{parentName:"code",className:"token keyword"},"import")," matplotlib",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"."),"pyplot ",(0,s.kt)("span",{parentName:"code",className:"token keyword"},"as")," plt\n\nhdu ",(0,s.kt)("span",{parentName:"code",className:"token operator"},"=")," fits",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"."),(0,s.kt)("span",{parentName:"code",className:"token builtin"},"open"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"("),(0,s.kt)("span",{parentName:"code",className:"token string"},"'kplr005023948-2012060035710_slc.fits'"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},")"),"\ntime ",(0,s.kt)("span",{parentName:"code",className:"token operator"},"=")," hdu",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"["),(0,s.kt)("span",{parentName:"code",className:"token number"},"1"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"]"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"."),"data",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"["),(0,s.kt)("span",{parentName:"code",className:"token string"},"'TIME'"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"]"),"\nflux ",(0,s.kt)("span",{parentName:"code",className:"token operator"},"=")," hdu",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"["),(0,s.kt)("span",{parentName:"code",className:"token number"},"1"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"]"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"."),"data",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"["),(0,s.kt)("span",{parentName:"code",className:"token string"},"'SAP_FLUX'"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"]"),"\nplt",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"."),"plot",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"("),"time",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},",")," flux",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},",")," ",(0,s.kt)("span",{parentName:"code",className:"token string"},"'.'"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},",")," markersize",(0,s.kt)("span",{parentName:"code",className:"token operator"},"="),(0,s.kt)("span",{parentName:"code",className:"token number"},"1"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},")")))),(0,s.kt)("br",null),(0,s.kt)("p",null,(0,s.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"768px"}},"\n      ",(0,s.kt)("a",{parentName:"span",className:"gatsby-resp-image-link",href:"/static/4214051aa054f34b03fce3f41c36ba28/59ab2/koi-3570-lc.png",style:{display:"block"},target:"_blank",rel:"noopener"},"\n    ",(0,s.kt)("span",{parentName:"a",className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.66666666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAC4jAAAuIwF4pT92AAACu0lEQVQ4y62TW2sTURSF15lkknQml6a5XybTmaRJibU3tS3VUqGCCoqg/0BREbzVVufU5oopVhD1QUEQBPVFRLSdPV6giIgX8Ff4UyonTqUUH90vs2fPnI911joHABiAIIAUgAKAGIAeHxBy54oCRACEVaBXzIIyogBCcjDaq6qK6KNM9ke9EYEAZAC7mNfvheTxA1D1pY9HTYuu6JZzTrecCyZ3LuuWc8ngzpXCDZo3uLOoW8413aKrBn9naQtvLvrz1d7wxMku0AvA6JIT/R6hrrC8Ua0s2dMGp7Jh0cRQjUraDTJNToP5646+u0YDBqdKkVN2d+NDJXPhmQ4gALcE0ASQBZPMPiA0dfdHaqa9Vpy9RYnROg0cuW1nxhqkTbXIGK5TZm7F1sYbZE637dSBzvvS0PzzQlhYtLn5d8v9XXI0K+ABrfk1PlxbNwaWKGZyMidalNAtyuxapnx60Ynva1K6yClfXrJ7x9sftdTZJ6ntCj1bQDlpdLestb5Hx2pr+fJNihR5V1ncsCg5WqdccsGJTrYoVeSUcYH5nUCvm3AKYMUYEJm5/zM+237bf7BDsbEGGcfu2MmpNqXnVuz8ngbFj9+x0/uaVJjr2H2HVj9oI/NPM2EgvOkCJQDa9lC01re+keW3WpmvR4rczk8212KmRYnx+no2uUDRyeZ6osgpV+ZrkfHW+1zyzOOEWLelUHg4KBrmVwVQyb3YlA/f+xze29nwDS47oVMPvyiVxVeBE49+hHD6pXzqwYZa5W+U/aufvKdf/+qRZ8/7xDpsUxjopizSZiwnDrEis6QERBgQCgZ84rAHVZ8krFHCaqBPAlTxXZG7sxgYS0uBEHaWUJuQfAHxTP4Ji4nbUwKY1rWGSWkAw8JvV0SCeWS/m4MH/yrG2Fabda+jgFUZYz73veTalNnx//+v3wKnqVm3R8MCAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("img",{parentName:"a",className:"gatsby-resp-image-image",alt:"koi-3570-lightcurve",title:"koi-3570-lightcurve",src:"/static/4214051aa054f34b03fce3f41c36ba28/d1b73/koi-3570-lc.png",srcSet:["/static/4214051aa054f34b03fce3f41c36ba28/9e591/koi-3570-lc.png 192w","/static/4214051aa054f34b03fce3f41c36ba28/8cd98/koi-3570-lc.png 384w","/static/4214051aa054f34b03fce3f41c36ba28/d1b73/koi-3570-lc.png 768w","/static/4214051aa054f34b03fce3f41c36ba28/3cbba/koi-3570-lc.png 1152w","/static/4214051aa054f34b03fce3f41c36ba28/192f4/koi-3570-lc.png 1536w","/static/4214051aa054f34b03fce3f41c36ba28/59ab2/koi-3570-lc.png 1800w"],sizes:"(max-width: 768px) 100vw, 768px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n  "),"\n    ")),(0,s.kt)("br",null),(0,s.kt)("h2",null,"Phase Fold Lightcurve"),(0,s.kt)("p",null,"Arguably, one of the most important parameters to find for an eclipsing binary star system is the orbital period. There are many ways to find the period around the center of mass and the method I like to use is a multi-term Lomb-Scargle approach. For this system, I used the period published in Brewer et al. 2016. They found an orbital period of 3.649301 days. Phase folding the light curve with this orbital period yields the following plot. The secondary and primary eclipses are at about phase equal to 0.2 and 0.7, respectively."),(0,s.kt)("div",{className:"gatsby-highlight","data-language":"python"},(0,s.kt)("pre",{parentName:"div",className:"language-python"},(0,s.kt)("code",{parentName:"pre",className:"language-python"},"period ",(0,s.kt)("span",{parentName:"code",className:"token operator"},"=")," ",(0,s.kt)("span",{parentName:"code",className:"token number"},"3.649301"),"\nphase ",(0,s.kt)("span",{parentName:"code",className:"token operator"},"=")," ",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"("),"time ",(0,s.kt)("span",{parentName:"code",className:"token operator"},"-")," time",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"["),(0,s.kt)("span",{parentName:"code",className:"token number"},"0"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"]"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},")")," ",(0,s.kt)("span",{parentName:"code",className:"token operator"},"/")," period ",(0,s.kt)("span",{parentName:"code",className:"token operator"},"%")," ",(0,s.kt)("span",{parentName:"code",className:"token number"},"1"),"\nplt",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"."),"plot",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"("),"phase",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},",")," flux",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},",")," ",(0,s.kt)("span",{parentName:"code",className:"token string"},"'.'"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},",")," markersize",(0,s.kt)("span",{parentName:"code",className:"token operator"},"="),(0,s.kt)("span",{parentName:"code",className:"token number"},"1"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},")")))),(0,s.kt)("br",null),(0,s.kt)("p",null,(0,s.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"768px"}},"\n      ",(0,s.kt)("a",{parentName:"span",className:"gatsby-resp-image-link",href:"/static/7d151323018daeb866dc72055b546caf/5a8f6/koi-3570-pflc.png",style:{display:"block"},target:"_blank",rel:"noopener"},"\n    ",(0,s.kt)("span",{parentName:"a",className:"gatsby-resp-image-background-image",style:{paddingBottom:"74.47916666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAC4jAAAuIwF4pT92AAADTklEQVQ4y41UTWwTRxT+Zr27dtb2/sVx7bDBwbWNk0BICKWlQKSAEOLQpEiVQDk0PSA4oEjIsUmUmFASfqQEhdJQRFJVBYFQACU2Xm/+CioSIFr1zIkDElJOPXOAy6DZjEXggHjSzM7svP3me+99b4GKEULYXNnKAPbsaIOvtRM17d1o6TkNsX4bwnt+wrbe31yfvV2HsdZE01qFAqABWAdCYgB0AH42dEXWiWHpSm3SNCJ11ZAUVYkmTDO2sQaAYgT9Bvf1ATCIXCUxQDY1+Js65N3/U0R7fjm4vq9wM5YtDCZzs1112eKVWLZwrj5XvFTXVzgXyxbGN+QKp6wTd9vZM9Y3l1+fK43UHrl2DIDAAD0A4mzh+3I71PaeL6JZuzY+tJxsGl5sCPf/FU4OP9DbRpbDoYGHBlt/Nbocqh1Y3Nw6shSJDy7UWKP/hfR9x9dVAEUAKQBhgFiGAA3f/41DE+XAzpFyCrsegtIroPSuADwFQPF4Yc6bHnJSr54UZbYHDsECggCRK4B1cF9AqwrqKijFN6MLasuw06RlFtA3VRav37OlrrESKZeKQv90yRfrdxInp23f9LWrAqUUAd1UOZY7JdcUK/jDzCsk80v+hryT3n3WwcGL88RxHM+TpRKAZzg6acuR3Hz85O9l6WUL8O32NnBCLH1u3CEAAQCqT/EHkafY8vNiIDnopHB8Hmf+tD22bUun/yiB0hn0XLb9sQEn8fzRffHy1Sk3b4FAIFhhyKrM5MKkYFWHakz6epLsPW9rTflyI/AvJm8V5WKx6LsxM+uhL2eEHy+VzPRQOUXf3vFcnLopU0qJZVkGl6+rw8iakP37x5aQvvBPVePwYuLr3HVMvqFkZWVFyPceAbrG0TH2QI0OLCeQ/BWHb78gzc3N4Hr0VBimOV2JEMJE7tl6oFv+LjvB0iDs2NUuZjIZdruwf6Pu6cyM+7XuCXOqt1PcurNDWu0zoldCZqiq2ylAPQ89KIlCUFO8bifIsqxqmlbtrr0+TQsoJgCvbpjVkiQyIGVVdi65993MCxQFUMVHhABe3pph7scKGFUicYFfHhIEgX1rVnL4sTG2mwBs5h20BUArZ8+AG/meaSXB/Vr52SeN4PPsg7/UO/XpzdklwhCwAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("img",{parentName:"a",className:"gatsby-resp-image-image",alt:"koi-3570-phasefold",title:"koi-3570-phasefold",src:"/static/7d151323018daeb866dc72055b546caf/d1b73/koi-3570-pflc.png",srcSet:["/static/7d151323018daeb866dc72055b546caf/9e591/koi-3570-pflc.png 192w","/static/7d151323018daeb866dc72055b546caf/8cd98/koi-3570-pflc.png 384w","/static/7d151323018daeb866dc72055b546caf/d1b73/koi-3570-pflc.png 768w","/static/7d151323018daeb866dc72055b546caf/3cbba/koi-3570-pflc.png 1152w","/static/7d151323018daeb866dc72055b546caf/192f4/koi-3570-pflc.png 1536w","/static/7d151323018daeb866dc72055b546caf/5a8f6/koi-3570-pflc.png 1609w"],sizes:"(max-width: 768px) 100vw, 768px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n  "),"\n    ")),(0,s.kt)("br",null),(0,s.kt)("h2",null,"References"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"https://exoplanetarchive.ipac.caltech.edu"},"Nasa Exoplanet Archive")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"https://brew.sh/"},"Homebrew")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"https://www.astropy.org/"},"AstroPy"))))}i.isMDXComponent=!0},283:function(a,e,t){"use strict";t.d(e,{Z:function(){return l}});var n=t(7294),s=t(6187),o=t(994),p=t(7408);t(5414);var r=t(260),c=t(5216);function l(a){var e=a.children,t=a.pageContext.frontmatter,l=t.title,i=t.description;return n.createElement(n.Fragment,null,n.createElement("headSEO",null),n.createElement(r.Z,null),n.createElement(s.Z,{fluid:!0},n.createElement(o.Z,{className:"justify-content-center m-0"},n.createElement(p.Z,{style:{maxWidth:"768px"}},n.createElement("h1",{align:"center",style:{marginTop:"2em"}},l),n.createElement("p",{align:"center"},i),n.createElement("br",null),n.createElement("br",null),e))),n.createElement(c.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-eclipsing-binaries-index-mdx-ae31606091e190503acf.js.map