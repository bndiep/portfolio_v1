(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{32:function(e,t,a){e.exports=a.p+"static/media/react-here.c15a2ad5.png"},33:function(e,t,a){e.exports=a.p+"static/media/tic-tac-toe.d9b44c81.png"},34:function(e,t,a){e.exports=a.p+"static/media/pig-latin.547efa0f.png"},35:function(e,t,a){e.exports=a.p+"static/media/rails-blog.714c8f60.png"},49:function(e,t,a){e.exports=a.p+"static/media/profilephoto_temp.5fc198f8.jpg"},50:function(e,t,a){e.exports=a.p+"static/media/robot.ea795c13.png"},51:function(e,t,a){e.exports=a.p+"static/media/illustrator.c03b5122.svg"},52:function(e,t,a){e.exports=a.p+"static/media/photoshop.b8b18a8e.svg"},53:function(e,t,a){e.exports=a.p+"static/media/postgresql.c9df0bf2.svg"},54:function(e,t,a){e.exports=a.p+"static/media/ruby-on-rails.fa4f3db7.svg"},55:function(e,t,a){e.exports=a.p+"static/media/zoom.4de98208.svg"},56:function(e,t,a){e.exports=a(71)},61:function(e,t,a){},62:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(18),o=a.n(r),i=(a(61),a(6)),c=a(7),s=a(8),u=a(9),m=(a(62),a(39),a(11)),p=a(75),d=a(76),h=a(12),b=a(10),g=a(23);function E(){var e=Object(m.a)(["\n    .navbar {\n        background-color: #FFD23F;\n        border: 4px solid black;\n        box-shadow: 0px 4px 2px -2px #C1C1C1;\n        width: 100%;\n        z-index: 9999;\n        position: fixed;\n    }\n\n    .navbar-brand, .navbar-nav .nav-link {\n        color: white;\n        &:focus {\n            color: #0EAD69;\n        }\n    }\n\n    .navbar toggle {\n        border: red;\n    }\n\n    .menu {\n        color: white;\n\n        &:active {\n            color: #0EAD69;\n        }\n    }\n"]);return E=function(){return e},e}var f=h.a.div(E()),x=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(f,null,l.a.createElement(p.a,{collapseOnSelect:!0,expand:"lg",id:"navbar"},l.a.createElement(p.a.Brand,{a:!0,href:"/"},l.a.createElement("img",{src:this.props.robot,height:"40px",alt:"robot logo"})),l.a.createElement(p.a.Toggle,{"aria-controls":"basic-navbar-nav"},l.a.createElement("span",null,l.a.createElement(b.a,{className:"menu",icon:g.b,alt:"hamburger icon"}))),l.a.createElement(p.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(d.a,{className:"ml-auto"},l.a.createElement(d.a.Item,null,l.a.createElement(d.a.Link,{a:!0,href:"#home"},"Home")),l.a.createElement(d.a.Item,null,l.a.createElement(d.a.Link,{a:!0,href:"#about"},"About")),l.a.createElement(d.a.Item,null,l.a.createElement(d.a.Link,{a:!0,href:"#skills"},"Skills")),l.a.createElement(d.a.Item,null,l.a.createElement(d.a.Link,{a:!0,href:"#projects"},"Projects"))))))}}]),a}(n.Component);function v(){var e=Object(m.a)(["\n    padding: 100px 0px;\n    display: flex;\n    flex-direction: column;\n\n    h2 {\n        font-size: 7vw;\n        text-align: right;\n        padding: 10px;\n    }\n\n    span {\n        text-decoration-line: underline;\n        text-decoration-style: wavy;\n        color: #3BCEAC;\n        &:hover {\n            color: #EE4266;\n        }\n    }\n\n    #headshot {\n        width: 30%;\n        height: auto;\n        border: 5px solid black;\n        outline: solid #EE4266; \n        box-shadow: 10px 10px #FFD23F;\n        padding: 10px;\n        display: block;\n        margin: auto;\n        }\n    }\n"]);return v=function(){return e},e}var y=h.a.div(v()),w=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{id:"home"},l.a.createElement(y,null,l.a.createElement("div",{id:"greeting"},l.a.createElement("h2",null,"WELCOME, FRIEND."),l.a.createElement("h2",null,"MY NAME IS ",l.a.createElement("span",{className:"name"},"BACH"),".")),l.a.createElement("br",null),l.a.createElement("img",{id:"headshot",src:this.props.headshot,alt:"3/4 portrait of Bach Diep"})))}}]),a}(n.Component),k=a(73),j=a(13);function O(){var e=Object(m.a)(["\n    span {\n            font-style: italic;\n            font-weight: bold;\n        }\n\n    .contact-links {\n        display: flex;\n        flex-wrap: flex;\n        justify-content: center;\n        }\n    }\n\n    .contact, .resume {\n        margin: 0px 5px;\n        background-color: #0EAD69;\n        border: none;\n        border-radius: 50px;\n        &:hover{\n            background-color: #FFD23F;\n            opacity: 80%\n        }\n    }\n\n    .copy {\n        font-size: 10px;\n    }\n\n    .linkedin {\n        margin: 0px 5px;\n        background-color: #000;\n        border: none;\n        border-radius: 100%;\n        \n    }\n\n    .twitter {\n        margin: 0px 5px;\n        padding: 5px 10.5px;\n        background-color: #000;\n        border: none;\n        border-radius: 100%;\n    }\n\n    .github-icon {\n        margin: 0px 5px;\n        padding: 5px 11px;\n        background-color: #000;\n        border: none;\n        border-radius: 100%\n    }\n"]);return O=function(){return e},e}var N=h.a.div(O()),C=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{id:"about"},l.a.createElement(N,null,l.a.createElement("h2",null,"who am i?"),l.a.createElement("div",{className:"blurb"},l.a.createElement("p",null,'"Bach"? The ',l.a.createElement("span",null,"composer"),"? The cluck of a ",l.a.createElement("span",null,"chicken"),"? Ahh, maybe the ",l.a.createElement("span",null,"terminator\u2019s")," signature phrase?"),l.a.createElement("p",null,"Nope, I'm just your everyday human being who goes by B\u1ea1ch, or \u2018'Bot' in close circles. I am a web developer based in San Diego, CA with a fascination for tech, art, and how those two concepts bridge connections between people. Web development is the culmination of those two very concepts: it\u2019s the challenge of making a digital product ",l.a.createElement("span",null,"tangible"),", and adding cool colors and effects to the user experience is the artistic flair.")),l.a.createElement("div",{className:"contact-links"},l.a.createElement(k.a,{className:"contact",a:!0,href:"mailto:bachdiep.dev@gmail.com"},"Contact Me"),l.a.createElement(k.a,{className:"linkedin",a:!0,href:"https://www.linkedin.com/in/bachdiep",target:"_blank"},l.a.createElement(b.a,{icon:j.g,size:"1x",alt:"linkedin logo"})),l.a.createElement(k.a,{className:"twitter",a:!0,href:"https://www.twitter.com/itsabach",target:"_blank"},l.a.createElement(b.a,{icon:j.j,size:"1x",alt:"twitter logo"})),l.a.createElement(k.a,{className:"github-icon",a:!0,href:"https://www.github.com/bndiep",target:"_blank"},l.a.createElement(b.a,{icon:j.d,size:"1x",alt:"github logo"})),l.a.createElement(k.a,{className:"resume",a:!0,href:"",target:"_blank"},"Resume"))))}}]),a}(n.Component);function T(){var e=Object(m.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    padding: 0px 20px;\n\n    #frontend, #backend, #version-control, #virtual-space, #design {\n        justify-content: center;\n        flex: 1 1 25%;\n        text-align: center;\n    }\n\n    .icons {\n        display: flex;\n        flex-wrap: wrap;\n    }\n    \n    ul {\n        margin: 0px;\n        padding: 0px;\n        justify-content: center;\n    }\n\n    li {\n        list-style: none;\n        color: #EE4266;\n        padding: 0px 10px;\n    }\n\n    p {\n        font-size: 12px;\n    }\n"]);return T=function(){return e},e}var R=h.a.div(T()),z=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.illustrator,a=e.photoshop,n=e.postgresql,r=e.rubyOnRails,o=e.zoom;return l.a.createElement("div",null,l.a.createElement("h2",{id:"skills"},"skills"),l.a.createElement(R,null,l.a.createElement("div",{id:"frontend"},l.a.createElement("h4",null,"frontend"),l.a.createElement("ul",{className:"icons"},l.a.createElement("li",null,l.a.createElement(b.a,{icon:j.e,size:"3x",alt:"HTML5 logo"}),l.a.createElement("p",null,"HTML")),l.a.createElement("li",null,l.a.createElement(b.a,{icon:j.a,size:"3x",alt:"CSS3 logo"}),l.a.createElement("p",null,"CSS")),l.a.createElement("li",null,l.a.createElement(b.a,{icon:j.f,size:"3x",alt:"JavaScript logo"}),l.a.createElement("p",null,"JavaScript")),l.a.createElement("li",null,l.a.createElement(b.a,{icon:g.a,size:"2x",alt:"Ruby logo"}),l.a.createElement("p",null,"Ruby")),l.a.createElement("li",null,l.a.createElement(b.a,{icon:j.h,size:"3x",alt:"React logo"}),l.a.createElement("p",null,"React")))),l.a.createElement("div",{id:"backend"},l.a.createElement("h4",null,"backend"),l.a.createElement("ul",{className:"icons"},l.a.createElement("li",null,l.a.createElement("img",{src:r,alt:"Ruby on Rails logo",height:"45px"}),l.a.createElement("p",null,"Ruby on Rails")),l.a.createElement("li",null,l.a.createElement("img",{src:n,alt:"PostgreSQL logo",height:"40px"}),l.a.createElement("p",null,"PostgreSQL")))),l.a.createElement("div",{id:"version-control"},l.a.createElement("h4",null,"version control"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(b.a,{icon:j.c,size:"3x",alt:"Git logo"}),l.a.createElement("p",null,"Git")))),l.a.createElement("div",{id:"virtual-space"},l.a.createElement("h4",null,"virtual communication"),l.a.createElement("ul",{className:"icons"},l.a.createElement("li",null,l.a.createElement(b.a,{icon:j.i,size:"3x",alt:"Slack logo"}),l.a.createElement("p",null,"Slack")),l.a.createElement("li",null,l.a.createElement("img",{src:o,alt:"Zoom Conferencing logo",height:"40px"}),l.a.createElement("p",null,"Zoom")))),l.a.createElement("div",{id:"design"},l.a.createElement("h4",null,"design"),l.a.createElement("ul",{className:"icons"},l.a.createElement("li",null,l.a.createElement(b.a,{icon:j.b,size:"3x",alt:"Figma logo"}),l.a.createElement("p",null,"Figma")),l.a.createElement("li",null,l.a.createElement("img",{src:a,alt:"Adobe PhotoShop logo",height:"40px"}),l.a.createElement("p",null,"Photoshop")),l.a.createElement("li",null,l.a.createElement("img",{src:t,alt:"Adobe Illustrator logo",height:"40px"}),l.a.createElement("p",null,"Illustrator"))))))}}]),a}(n.Component),F=a(77);function A(){var e=Object(m.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n\n    .card-body {\n        padding: 5px;\n    }\n    .card {\n        margin: 10px;\n        border: 5px solid black;\n        border-radius: 20px;\n        box-shadow: 8px 8px #FFD23F;\n    }\n\n    .card img {\n        border-radius: 20px 20px 0px 0px;\n        padding: 5px;\n    }\n\n    .github-button {\n        border: none;\n        border-radius: 30px;\n        background-color: #EE4266;\n        color: #fff;\n        float: left;\n    }\n\n    .demo {\n        border: none;\n        border-radius: 30px;\n        background-color: black;\n        color: #fff;\n        float: right;\n    }\n\n    span {\n        font-style: italic;\n    }\n"]);return A=function(){return e},e}var S=h.a.div(A()),I=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.thumbnail1,a=e.thumbnail2,n=e.thumbnail3,r=e.thumbnail4;return l.a.createElement("div",null,l.a.createElement("h2",{id:"projects"},"projects"),l.a.createElement(S,null,l.a.createElement(F.a,{className:"card",style:{width:"18rem"}},l.a.createElement(F.a.Img,{variant:"top",src:t,alt:"Artist E-40 displayed in a React application"}),l.a.createElement(F.a.Body,null,l.a.createElement(F.a.Title,null,"React Here, Tryna Function"),l.a.createElement(F.a.Text,null,"Created using React given a time frame of a day. An homage to E-40's song ",l.a.createElement("span",null,"Function"),", this party app allows the user to input their budget and number of guests to give them a list of typical party items they will need to purchase. Go over budget, and your guests will have to pitch in."),l.a.createElement(k.a,{className:"github-button",a:!0,href:"https://github.com/bndiep/party-app",target:"_blank"},"GitHub"),l.a.createElement(k.a,{className:"demo",a:!0,href:"https://react-here-tryna-function-app.netlify.app",target:"blank"},"Demo"))),l.a.createElement(F.a,{className:"card",style:{width:"18rem"}},l.a.createElement(F.a.Img,{variant:"top",src:a,alt:"Colorful tic-tac-toe board"}),l.a.createElement(F.a.Body,null,l.a.createElement(F.a.Title,null,"Tic-Tac-Toe"),l.a.createElement(F.a.Text,null,"Created in React. A simple implementation of Tic-Tac-Toe intended to be played by two users. The app will display the current player to keep track of the user's turns. There are three possible outcomes: X wins, O wins, or a cats game."),l.a.createElement(k.a,{className:"github-button",a:!0,href:"https://github.com/bndiep/tic-tac-toe-app",target:"_blank"},"GitHub"),l.a.createElement(k.a,{className:"demo",a:!0,href:"https://tictactoe-app.netlify.app",target:"_blank"},"Demo"))),l.a.createElement(F.a,{className:"card",style:{width:"18rem"}},l.a.createElement(F.a.Img,{variant:"top",src:n,alt:"Words that ready to be translated into Pig Latin"}),l.a.createElement(F.a.Body,null,l.a.createElement(F.a.Title,null,"Pig Latin"),l.a.createElement(F.a.Text,null,"Created in React. An app that allows the user to convert their English words into Pig Latin. Has the ability to translate words starting with 'qu' and words in which 'y' acts a vowel. Maybe you can use this app when sending secret messages!"),l.a.createElement(k.a,{className:"github-button",a:!0,href:"https://github.com/bndiep/pig-latin-app",target:"_blank"},"GitHub"),l.a.createElement(k.a,{className:"demo",a:!0,href:"https://react-pig-latin-app.netlify.app",target:"_blank"},"Demo"))),l.a.createElement(F.a,{className:"card",style:{width:"18rem"}},l.a.createElement(F.a.Img,{variant:"top",src:r,alt:"Front page of a blog that contains posts"}),l.a.createElement(F.a.Body,null,l.a.createElement(F.a.Title,null,"Blog App"),l.a.createElement(F.a.Text,null,"Created using Ruby on Rails. A simple blog app that demonstrates RESTful routes. The user is able to create, view, edit, and delete a blog post. Strong params exist to ensure the user includes all fields in their blog post submission."),l.a.createElement(k.a,{className:"github-button",a:!0,href:"https://github.com/bndiep/blog-app",target:"_blank"},"GitHub")))))}}]),a}(n.Component),B=a(74),D=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(B.a,null,this.props.children))}}]),a}(n.Component);function L(){var e=Object(m.a)(["\n    text-align: center;\n    background-color: #0EAD69;\n    color: white;\n    font-size: 11px;\n    width: 100%;\n    padding: 3px 0px;\n    margin-top: 20px;\n"]);return L=function(){return e},e}var _=h.a.div(L()),H=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(_,null,l.a.createElement("footer",null,'designed and built by Bach Diep && I hope you\'ll be "bach"!'))}}]),a}(n.Component),M=a(49),P=a.n(M),G=a(32),q=a.n(G),W=a(33),J=a.n(W),Q=a(34),Z=a.n(Q),X=a(35),Y=a.n(X),$=a(50),K=a.n($),U=a(51),V=a.n(U),ee=a(52),te=a.n(ee),ae=a(53),ne=a.n(ae),le=a(54),re=a.n(le),oe=a(55),ie=a.n(oe),ce=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={headshot:P.a,thumbnail1:q.a,thumbnail2:J.a,thumbnail3:Z.a,thumbnail4:Y.a,robot:K.a,illustrator:V.a,photoshop:te.a,postgresql:ne.a,rubyOnRails:re.a,zoom:ie.a},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.headshot,a=e.robot,n=e.illustrator,r=e.photoshop,o=e.postgresql,i=e.rubyOnRails,c=e.zoom;return l.a.createElement(l.a.Fragment,null,l.a.createElement(x,{robot:a}),l.a.createElement(D,null,l.a.createElement(w,{headshot:t}),l.a.createElement(C,null),l.a.createElement(z,{illustrator:n,photoshop:r,postgresql:o,rubyOnRails:i,zoom:c}),l.a.createElement(I,{thumbnail1:q.a,thumbnail2:J.a,thumbnail3:Z.a,thumbnail4:Y.a})),l.a.createElement(H,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[56,1,2]]]);
//# sourceMappingURL=main.1e4be3e6.chunk.js.map