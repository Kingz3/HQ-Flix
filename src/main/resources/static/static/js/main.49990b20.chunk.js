(this.webpackJsonphqflix=this.webpackJsonphqflix||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,a){e.exports={infocard:"FavoritesListDisplay_infocard__3eOlB",front:"FavoritesListDisplay_front__11RyM",back:"FavoritesListDisplay_back__14sVc",card_image:"FavoritesListDisplay_card_image__2MTNO",overview:"FavoritesListDisplay_overview__2rfgU"}},,,function(e,t,a){e.exports={card:"NewInTheatersDisplay_card__25IE9",card__cover:"NewInTheatersDisplay_card__cover__ZDDHe",cardList:"NewInTheatersDisplay_cardList__KSowf",heartIcon:"NewInTheatersDisplay_heartIcon__3Mc-r"}},function(e,t,a){e.exports={Toolbar:"Toolbar_Toolbar__ApScI",Logo:"Toolbar_Logo__3Lk47",DesktopOnly:"Toolbar_DesktopOnly__LuPaL"}},,function(e,t,a){e.exports={Content:"NewContent_Content__2Z54A",Headcontent:"NewContent_Headcontent__1CwX7"}},function(e,t,a){e.exports={footer:"Footer_footer__1w0lV",footer__copyright:"Footer_footer__copyright__3e1hI"}},function(e,t,a){e.exports={NavigationItem:"Navitems_NavigationItem__1c2Vn",active:"Navitems_active__rbOec"}},,,,,,,,,,,,,,,function(e,t,a){e.exports={Cardcontent:"CarouselDisplay_Cardcontent__1oJDr"}},function(e,t,a){e.exports=a.p+"static/media/coming-soon-image.487bcc79.jpg"},,function(e,t,a){e.exports={Loader:"spinner_Loader__29A0m",load2:"spinner_load2__GnBpe"}},,function(e,t,a){e.exports={button:"Button_button__2lgkF"}},function(e,t,a){e.exports={Modal:"Modal_Modal__1-5dN"}},function(e,t,a){e.exports={Backdrop:"BackDrop_Backdrop__px6PQ"}},,function(e,t,a){e.exports={NavigationItems:"NavigationItems_NavigationItems__3I_Jf"}},function(e,t,a){e.exports=a.p+"static/media/logo.f1d7b76d.png"},function(e,t,a){e.exports={Logo:"Logo_Logo__1N0xH"}},function(e,t,a){e.exports={Content:"Layout_Content__PrDi6"}},function(e,t,a){e.exports={design:"LoginComponent_design__1kEaA"}},function(e,t,a){e.exports={design:"NewUserComponent_design__go1Zc"}},function(e,t,a){e.exports=a(85)},,,,,function(e,t,a){},function(e,t,a){e.exports={container:"Movie_container__pt0yk"}},,,,,,,,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(39),l=a.n(s),o=(a(60),a(1)),i=a(2),c=a(4),m=a(3),u=a(5),d=(a(61),a(9)),h=a(8),p=a.n(h),v=p.a.create({baseURL:"https://hq-flix.herokuapp.com/api/auth"}),f=a(40),g=a.n(f),E=a(41),b=a.n(E),w=function(e){return r.a.createElement("div",{className:"Card-cover"},r.a.createElement("img",{src:(t=e.image,null===t?b.a:"https://image.tmdb.org/t/p/w185/".concat(t)),alt:"Demo"}),r.a.createElement("div",{className:"".concat(g.a.Cardcontent)},r.a.createElement("h6",null,e.title),r.a.createElement("span",null,"Release Date: ",e.releaseDate),r.a.createElement("br",null),r.a.createElement("span",null,"Rating:",e.voteAverage," ",r.a.createElement("i",{className:"fas fa-star"}))));var t},N=a(42),_=a.n(N),k=(a(79),a(43)),y=a.n(k),O=function(){return r.a.createElement("div",{className:y.a.Loader},"Loading...")},j=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={MovieData:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.get("https://hq-flix.herokuapp.com/api/auth/cinema/movie/upcoming").then((function(t){var a=t.data.results.map((function(e){return Object(d.a)({},e)}));e.setState({MovieData:a})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=r.a.createElement(O,null);return this.state.error||(e=this.state.MovieData.map((function(e){return r.a.createElement(w,{key:e.id,image:e.poster_path,title:e.title,releaseDate:e.release_date,voteAverage:e.vote_average})}))),r.a.createElement(_.a,{slidesPerScroll:3,slidesPerPage:3,arrows:!0,autoPlay:7e3,animationSpeed:1e3,infinite:!0},e)}}]),t}(n.Component),S=a(23),M=a.n(S),C=a(20),D=a.n(C),I=a(44),F=new(function(){function e(){var t=this;Object(o.a)(this,e),this.registerSuccessFullLoginForJwt=function(e,a){sessionStorage.setItem("authenticatedUser",e),a?(p.a.defaults.headers.common.Authorization=t.createJWTToken(a),localStorage.setItem("jwtToken",t.createJWTToken(a)),Object(I.a)(a)):delete p.a.defaults.headers.common.Authorization}}return Object(i.a)(e,[{key:"createJWTToken",value:function(e){return"Bearer "+e}},{key:"logout",value:function(){sessionStorage.removeItem("authenticatedUser"),localStorage.removeItem("jwtToken")}},{key:"isUserLoggedIn",value:function(){return null!==sessionStorage.getItem("authenticatedUser")}},{key:"getLoggedInUserName",value:function(){var e=sessionStorage.getItem("authenticatedUser");return null===e?"":e}},{key:"gettoken",value:function(){var e=sessionStorage.getItem("token");return null===e?"":e}},{key:"executeJwtAuthenticationService",value:function(e,t){return p.a.post("https://hq-flix.herokuapp.com/api/auth/login",{username:e,password:t})}},{key:"setupAxiosInterceptors",value:function(e){var t=this;p.a.interceptors.request.use((function(a){return t.isUserLoggedIn&&(a.headers.Authorization=e,sessionStorage.setItem("token",a.headers.Authorization)),a}))}}]),e}()),P=a(14),T=new(function(){function e(){Object(o.a)(this,e)}return Object(i.a)(e,[{key:"CreateFavorites",value:function(e){return p.a.post("https://hq-flix.herokuapp.com/api/users/favorites",e)}},{key:"GetFavorites",value:function(){return p.a.get("https://hq-flix.herokuapp.com/api/users/all")}},{key:"GetSingleFavorite",value:function(e){return p.a.get("https://hq-flix.herokuapp.com/api/users/".concat(e))}},{key:"DeleteFavorite",value:function(e){return p.a.delete("https://hq-flix.herokuapp.com/api/users/".concat(e))}}]),e}()),x=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(c.a)(this,Object(m.a)(t).call(this))).state={id:"",isFavorite:!1,singleFavorite:{}},e.addFav=e.addFav.bind(Object(P.a)(e)),e.removeFav=e.removeFav.bind(Object(P.a)(e)),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.id&&T.GetSingleFavorite(this.props.id).then((function(t){console.log(t.data),e.setState({singleFavorite:t.data})}))}},{key:"addFav",value:function(e){e.preventDefault();var t={title:this.props.title,description:this.props.overview,poster_path:this.props.image,movieID:this.props.id};T.CreateFavorites(t),this.setState({singleFavorite:t})}},{key:"removeFav",value:function(e){e.preventDefault(),T.DeleteFavorite(this.state.singleFavorite.movieID),this.setState({singleFavorite:{}})}},{key:"render",value:function(){var e=this,t=this.props.id===this.state.singleFavorite.movieID?r.a.createElement("i",{className:"fas fa-heart",style:{color:"red"},onClick:function(t){return e.removeFav(t)}},"remove from favorites"):r.a.createElement("i",{className:"far fa-heart",style:{color:"red"},onClick:function(t){return e.addFav(t)}},"add to favorites");return r.a.createElement("div",null,t)}}]),t}(n.Component),L=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=F.isUserLoggedIn();return r.a.createElement("div",{id:this.props.id,className:"col-sm-12 col-lg-6 col-md-12 col-xs-12"},r.a.createElement("div",{className:"".concat(D.a.card," ").concat(D.a.cardList)},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-sm-4"},r.a.createElement("div",{className:"".concat(D.a.card__cover)},r.a.createElement("img",{id:"image",src:"https://image.tmdb.org/t/p/w185/".concat(this.props.image),alt:"".concat(this.props.title)}))),r.a.createElement("div",{className:"col-12 col-sm-8"},r.a.createElement("div",{className:"card__content"},r.a.createElement("li",null,r.a.createElement("h3",{className:"card__title"},this.props.title)),e&&r.a.createElement("div",null,r.a.createElement(x,{id:this.props.id,title:this.props.title,overview:this.props.overview,image:this.props.image})),r.a.createElement("span",{className:"card__category"},this.props.genre_ids),r.a.createElement("div",{className:"card__wrap"},r.a.createElement("span",{className:"card__rate"},r.a.createElement("i",{className:"fas fa-star"}),this.props.vote_average),r.a.createElement("ul",{className:"card__list"})),r.a.createElement("div",{className:"card__description",onClick:this.props.show},r.a.createElement("p",null,function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:150,a=[];return e.length>t?(e.split(" ").reduce((function(e,n){return e+n.length<=t&&a.push(n),e+n.length}),0),"".concat(a.join(" ")," ...Click to see more")):e}(this.props.overview))))))))}}]),t}(n.Component),V=a(45),U=a.n(V),A=function(e){return r.a.createElement("div",{className:"col-12"},r.a.createElement("button",{disabled:e.disable,onClick:e.clicked,className:U.a.button},e.children))},H=function(e){return e.children},q=a(46),G=a.n(q),J=a(47),B=a.n(J),R=function(e){return e.show?r.a.createElement("div",{className:B.a.Backdrop,onClick:e.clicked}):null},z=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return r.a.createElement(H,null,r.a.createElement(R,{show:this.props.show,clicked:this.props.modalClosed}),r.a.createElement("div",{className:G.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),t}(n.Component),W=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={selectedPost:null},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(){var e=this;v.get("/cinema/movie/".concat(this.props.id)).then((function(t){e.setState({selectedPost:t.data})}))}},{key:"render",value:function(){var e=null;return this.props.id&&(e=r.a.createElement(O,null)),this.state.selectedPost&&(e=r.a.createElement("div",null,r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w185/".concat(this.state.selectedPost.poster_path),alt:this.state.selectedPost.title}),r.a.createElement("h3",null,this.state.selectedPost.title),r.a.createElement("p",null,this.state.selectedPost.overview),r.a.createElement("button",{onClick:this.props.clicked},"Close"))),r.a.createElement("div",null,e)}}]),t}(n.Component),Q=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={PostSelection:null},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(){var e=this;this.props.tvid&&v.get("/cinema/tv/".concat(this.props.tvid)).then((function(t){e.setState({PostSelection:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=null;return this.props.tvid&&(e=r.a.createElement(O,null)),this.state.PostSelection&&(e=r.a.createElement("div",null,r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w185/".concat(this.state.PostSelection.poster_path),alt:this.state.PostSelection.name}),r.a.createElement("h3",null,this.state.PostSelection.name),r.a.createElement("p",null,this.state.PostSelection.overview),r.a.createElement("button",{onClick:this.props.Postclicked},"Close"))),r.a.createElement("div",null,e)}}]),t}(n.Component),Y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={NewInTheatersData:[],PopularMoviesData:[],PopularTvShowData:[],GenreData:[],loading:!1,showItems:4,showMovieModal:!1,showTVModal:!1,MovieID:null,TvID:null,black:!0,error:!0},a.loadDataInTheaters=function(){a.ShowSpinner(),a.GetData(),a.RemoveSpinner()},a.loadDataPopMovie=function(){a.ShowSpinner(),a.GetData(),a.RemoveSpinner()},a.loadDataPopTV=function(){a.ShowSpinner(),a.GetData(),a.RemoveSpinner()},a.OpenMovieModalHandler=function(e){a.setState({showMovieModal:!0,MovieID:e})},a.OpenTVModalHandler=function(e){a.setState({showTVModal:!0,TvID:e})},a.CloseMovieModalHandler=function(){a.setState({showMovieModal:!1})},a.CloseTVModalHandler=function(){a.setState({showTVModal:!1})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a.all([v.get("/cinema/movie/now_playing"),v.get("/cinema/movie/popular"),v.get("/cinema/tv/popular"),v.get("/cinema/genre")]).then(p.a.spread((function(){for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];var r=a[0].data.results,s=a[1].data.results,l=a[2].data.results,o=a[3].data.genres,i=o.map((function(e){return Object(d.a)({},e)})),c=r.map((function(e){return Object(d.a)({},e)})),m=s.map((function(e){return Object(d.a)({},e)})),u=l.map((function(e){return Object(d.a)({},e)}));e.setState({error:!1,NewInTheatersData:c,GenreData:i,PopularMoviesData:m,PopularTvShowData:u})}))).catch((function(){return e.setState({error:!0})}))}},{key:"ShowSpinner",value:function(){this.setState({loading:!0})}},{key:"RemoveSpinner",value:function(){this.setState({loading:!1})}},{key:"GetData",value:function(){this.setState((function(e){return{showItems:e.showItems+2}}))}},{key:"render",value:function(){var e=this,t=r.a.createElement("p",{style:{color:"white",fontSize:"25px"}},"Something went wrong!!! Contact Support "),a=r.a.createElement(O,null),n=r.a.createElement(O,null),s=r.a.createElement(O,null),l=r.a.createElement(A,{clicked:function(){return e.loadDataInTheaters()}}," Show More "),o=r.a.createElement(A,{clicked:function(){return e.loadDataPopMovie()}}," Show More "),i=r.a.createElement(A,{clicked:function(){return e.loadDataPopMovie()}}," Show More "),c=function(t){var a=[];return e.state.GenreData.forEach((function(e){t.forEach((function(t){t===e.id&&a.push(e.name)}))})),a.join(", ")};this.state.loading&&(l=r.a.createElement(O,null),o=r.a.createElement(O,null),i=r.a.createElement(O,null)),this.state.error||(a=this.state.NewInTheatersData.slice(0,this.state.showItems).map((function(t){return r.a.createElement(L,{key:t.id,image:t.poster_path,title:t.title,show:function(){return e.OpenMovieModalHandler(t.id)},id:t.id,genre_ids:c(t.genre_ids),vote_average:t.vote_average,overview:t.overview})})),n=this.state.PopularMoviesData.slice(0,this.state.showItems).map((function(t){return r.a.createElement(L,{key:t.id,image:t.poster_path,title:t.title,show:function(){return e.OpenMovieModalHandler(t.id)},id:t.id,genre_ids:c(t.genre_ids),vote_average:t.vote_average,overview:t.overview})})),s=this.state.PopularTvShowData.slice(0,this.state.showItems).map((function(t){return r.a.createElement(L,{key:t.id,image:t.poster_path,title:t.name,show:function(){return e.OpenTVModalHandler(t.id)},id:t.id,genre_ids:c(t.genre_ids),vote_average:t.vote_average,overview:t.overview})}))),this.state.error&&(a=t,n=t,s=t);var m=r.a.createElement("div",{className:"tab-pane fade active show",id:"tab-1",role:"tabpanel","aria-labelledby":"1-tab"},r.a.createElement("div",{className:"theater row"},a,null,this.state.showItems<this.state.NewInTheatersData.length&&l)),u=r.a.createElement("div",{className:"tab-pane fade",id:"tab-2",role:"tabpanel","aria-labelledby":"2-tab"},r.a.createElement("div",{className:"popMovie row"},n,null,this.state.showItems<this.state.PopularMoviesData.length&&o)),d=r.a.createElement("div",{className:"tab-pane fade",id:"tab-3",role:"tabpanel","aria-labelledby":"3-tab"},r.a.createElement("div",{className:"popTVshow row"},s,null,this.state.showItems<this.state.PopularTvShowData.length&&i));return r.a.createElement(H,null,r.a.createElement(z,{show:this.state.showMovieModal,closed:this.CloseMovieModalHandler},r.a.createElement(W,{id:this.state.MovieID,clicked:this.CloseMovieModalHandler})),r.a.createElement(z,{show:this.state.showTVModal,closed:this.CloseTVModalHandler},r.a.createElement(Q,{tvid:this.state.TvID,Postclicked:this.CloseTVModalHandler})),r.a.createElement("section",{className:M.a.Content},r.a.createElement("div",{className:M.a.Headcontent},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",null,"NewContent"),r.a.createElement("ul",{className:"nav nav-tabs content--tabs",id:"content--tabs",role:"tablist"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link active show","data-toggle":"tab",href:"#tab-1",role:"tab","aria-controls":"tab-1","aria-selected":"true"},"New In Theaters")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link","data-toggle":"tab",href:"#tab-2",role:"tab","aria-controls":"tab-2","aria-selected":"false"},"Movies")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link","data-toggle":"tab",href:"#tab-3",role:"tab","aria-controls":"tab-3","aria-selected":"false"},"TV Shows")))))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"tab-content",id:"myTabContent"},m,u,d)))))}}]),t}(n.Component),Z=function(){return r.a.createElement("div",null,r.a.createElement("main",{className:"container"},r.a.createElement("h1",{className:"text-center mt-5 pt-5"},"New Movies Coming Soon To Theather"),r.a.createElement(j,null)),r.a.createElement(Y,null))},$=a(15),K=a(6),X=a(24),ee=a.n(X),te=function(){return r.a.createElement("footer",{className:ee.a.footer},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6 col-sm-4 col-md-3"},r.a.createElement("h6",{className:"footer__title"},"Resources"),r.a.createElement("ul",{className:"footer__list"},r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"About Us")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Pricing Plan")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Help")))),r.a.createElement("div",{className:"col-6 col-sm-4 col-md-3"},r.a.createElement("h6",{className:"footer__title"},"Legal"),r.a.createElement("ul",{className:"footer__list"},r.a.createElement("li",null,"Terms of Use"),r.a.createElement("li",null,"Privacy Policy"),r.a.createElement("li",null,"Security"))),r.a.createElement("div",{className:"col-12 col-sm-4 col-md-3"},r.a.createElement("h6",{className:"footer__title"},"Contact"),r.a.createElement("ul",{className:"footer__list"},r.a.createElement("li",null,r.a.createElement("a",{href:"tel:+18002345678"},"+1 (555) 555-5555")),r.a.createElement("li",null,r.a.createElement("a",{href:"mailto:hayesevan@rocketmail.com"},"support@HQflixs.com"))),r.a.createElement("ul",{className:"footer__social"},r.a.createElement("li",{className:"facebook"},r.a.createElement("a",{href:"/"},r.a.createElement("i",{className:"fab fa-facebook-square"}))),r.a.createElement("li",{className:"instagram"},r.a.createElement("a",{href:"/"},r.a.createElement("i",{className:"fab fa-instagram"}))),r.a.createElement("li",{className:"twitter"},r.a.createElement("a",{href:"/"},r.a.createElement("i",{className:"fab fa-twitter"}))))),r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:ee.a.footer__copyright},r.a.createElement("small",null,"\xa9 2019 HQflix. Create by Evan Hayes"),r.a.createElement("ul",null,r.a.createElement("li",null,"Terms of Use"),r.a.createElement("li",null,"Privacy Policy"),r.a.createElement("li",null,"This product uses the TMDb API but is not endorsed or certified by TMDb.")))))))},ae=a(21),ne=a.n(ae),re=a(25),se=a.n(re),le=function(e){return r.a.createElement("li",{className:se.a.NavigationItem},r.a.createElement($.b,{to:e.link,className:e.active?se.a.active:null,onClick:e.clicked},e.children))},oe=a(49),ie=a.n(oe),ce=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=F.isUserLoggedIn(),t=F.getLoggedInUserName();return r.a.createElement("ul",{className:ie.a.NavigationItems},!e&&r.a.createElement(le,{link:"/register"},"Register"),!e&&r.a.createElement(le,{link:"/SignIn"},"Login"),e&&r.a.createElement(le,{link:"/welcome:".concat(t)},"Home"),e&&r.a.createElement(le,{link:"/".concat(t,"/favorites")},"Favorites"),e&&r.a.createElement(le,{link:"/",clicked:F.logout},"LogOut"))}}]),t}(n.Component),me=Object(K.g)(ce),ue=a(50),de=a.n(ue),he=a(51),pe=a.n(he),ve=function(){return r.a.createElement("div",{className:pe.a.Logo},r.a.createElement("img",{src:de.a,alt:"HQ Flix"}))},fe=function(){return r.a.createElement("header",{className:ne.a.Toolbar},r.a.createElement("div",{className:ne.a.Logo},r.a.createElement(ve,null)),r.a.createElement("nav",{className:ne.a.DesktopOnly},r.a.createElement(me,null)))},ge=a(52),Ee=a.n(ge),be=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(H,null,r.a.createElement(fe,null),r.a.createElement("main",{className:Ee.a.Content},this.props.children))}}]),t}(n.Component),we=a(19),Ne=a(53),_e=a.n(Ne),ke=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(c.a)(this,Object(m.a)(t).call(this))).state={username:"",password:"",hasLoginFailed:!1,ShowSuccessMessage:!1},e.handleChange=e.handleChange.bind(Object(P.a)(e)),e.loginClicked=e.loginClicked.bind(Object(P.a)(e)),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(we.a)({},e.target.name,e.target.value))}},{key:"loginClicked",value:function(){var e=this;F.executeJwtAuthenticationService(this.state.username,this.state.password).then((function(t){F.registerSuccessFullLoginForJwt(e.state.username,t.data),e.setState({ShowSuccessMessage:!0}),e.props.history.push("/welcome/".concat(e.state.username))})).catch((function(){e.setState({hasLoginFailed:!0,ShowSuccessMessage:!1})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Login"),r.a.createElement(A,null,r.a.createElement($.b,{style:{color:"white"},to:"/register"},"Create New User")),r.a.createElement("div",{className:_e.a.design},r.a.createElement("div",{className:"form-group col-md-10"},this.state.hasLoginFailed&&r.a.createElement("div",{className:" alert alert-warning"},"Invalid Credentials"),r.a.createElement("label",null,"Username"),r.a.createElement("input",{type:"username",className:"form-control",name:"username",value:this.state.username,onChange:this.handleChange})),r.a.createElement("div",{className:"form-group col-md-10"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",className:"form-control",name:"password",value:this.state.password,onChange:this.handleChange}))),r.a.createElement(A,{clicked:this.loginClicked},"Submit")))}}]),t}(n.Component);var ye=function(){return r.a.createElement("div",null,"Error Occured. Contact Support")},Oe=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"You Are Logged Out"),r.a.createElement("div",{className:"container"},"Thank You For using out application."))}}]),t}(n.Component),je=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return F.isUserLoggedIn()?r.a.createElement(K.b,this.props):r.a.createElement(K.a,{to:"/SignIn"})}}]),t}(n.Component);var Se=function(e){return e.valid?null:r.a.createElement("div",null,e.message)},Me=a(54),Ce=a.n(Me),De=new(function(){function e(){Object(o.a)(this,e)}return Object(i.a)(e,[{key:"CreateNewUser",value:function(e){return p.a.post("https://hq-flix.herokuapp.com/api/auth/register",e)}}]),e}()),Ie=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(c.a)(this,Object(m.a)(t).call(this))).validateForm=function(){var t=e.state,a=t.isUsernameValid,n=t.isPasswordValid,r=t.isEmailValid,s=t.isFirstnameValid,l=t.isLastnameValid;e.setState({formValid:a&&n&&r&&s&&l})},e.updateUsername=function(t){e.setState({username:t},e.validateUsername)},e.validateUsername=function(){var t=e.state.username,a=!0,n=Object(d.a)({},e.state.errorMsg);t.length<5&&(a=!1,n.username="Must be at least 5 characters long"),e.setState({isUsernameValid:a,errorMsg:n},e.validateForm)},e.updatePassword=function(t){e.setState({password:t},e.validatePassword)},e.validatePassword=function(){var t=e.state.password,a=!0,n=Object(d.a)({},e.state.errorMsg);t.length<5?(a=!1,n.password="Must be atleast 5 characters long"):/[A-Z]/.test(t)?/[0-9]/.test(t)||(a=!1,n.password="Must include a number"):(a=!1,n.password="Must include capital letter"),e.setState({isPasswordValid:a,errorMsg:n},e.validateForm)},e.updateEmail=function(t){e.setState({email:t},e.validateEmail)},e.validateEmail=function(){var t=e.state.email,a=!0,n=Object(d.a)({},e.state.errorMsg);/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)||(a=!1,n.email="Invalid email format need @"),e.setState({isEmailValid:a,errorMsg:n},e.validateForm)},e.updateFirstName=function(t){e.setState({firstName:t},e.validateFirstname)},e.validateFirstname=function(){var t=e.state.firstName,a=!0,n=Object(d.a)({},e.state.errorMsg);t.length<=0&&(a=!1,n.firstname="Please Enter First Name"),e.setState({isFirstnameValid:a,errorMsg:n},e.validateForm)},e.updateLastName=function(t){e.setState({lastName:t},e.validateLastName)},e.validateLastName=function(){var t=e.state.lastName,a=!0,n=Object(d.a)({},e.state.errorMsg);t.length<=0&&(a=!1,n.lastname="Please Enter Last Name"),e.setState({isLastnameValid:a,errorMsg:n},e.validateForm),e.addUser=e.addUser.bind(Object(P.a)(e))},e.state={username:"",isUsernameValid:!1,password:"",isPasswordValid:!1,email:"",isEmailValid:!1,firstName:"",isFirstnameValid:!1,lastName:"",isLastnameValid:!1,formValid:!1,errorMsg:{}},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"addUser",value:function(e){var t=this;e.preventDefault();var a={username:this.state.username,password:this.state.password,email:this.state.email,firstName:this.state.firstName,lastName:this.state.lastName};De.CreateNewUser(a).then((function(){return t.props.history.push("/SignIn")}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:Ce.a.design},r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"form-group col-md-6 offset-md-3"},r.a.createElement("label",null,"Username"),r.a.createElement(Se,{className:"alert alert-warning",valid:this.state.isUsernameValid,message:this.state.errorMsg.username}),r.a.createElement("input",{type:"text",className:"form-control",name:"username",onChange:function(t){return e.updateUsername(t.target.value)},value:this.state.username})),r.a.createElement("div",{className:"form-group col-md-6 offset-md-3"},r.a.createElement("label",null,"Password"),r.a.createElement(Se,{className:"alert alert-warning",valid:this.state.isPasswordValid,message:this.state.errorMsg.password}),r.a.createElement("input",{type:"text",className:"form-control",name:"password",onChange:function(t){return e.updatePassword(t.target.value)},value:this.state.password}))),r.a.createElement("div",{className:"form-group col-md-6 offset-md-3"},r.a.createElement("label",null,"Email"),r.a.createElement(Se,{className:"alert alert-warning",valid:this.state.isEmailValid,message:this.state.errorMsg.email}),r.a.createElement("input",{type:"email",className:"form-control",name:"email",onChange:function(t){return e.updateEmail(t.target.value)},value:this.state.email})),r.a.createElement("div",{className:"form-group col-md-6 offset-md-3"},r.a.createElement("label",null,"First Name"),r.a.createElement(Se,{className:"alert alert-warning",valid:this.state.isFirstnameValid,message:this.state.errorMsg.firstname}),r.a.createElement("input",{type:"text",className:"form-control",name:"firstName",onChange:function(t){return e.updateFirstName(t.target.value)},value:this.state.firstname})),r.a.createElement("div",{className:"form-group col-md-6 offset-md-3"},r.a.createElement("label",null,"Last Name"),r.a.createElement(Se,{className:"alert alert-warning",valid:this.state.isLastnameValid,message:this.state.errorMsg.lastname}),r.a.createElement("input",{type:"text",className:"form-control",name:"lastName",onChange:function(t){return e.updateLastName(t.target.value)},value:this.state.lastname})),r.a.createElement(A,{type:"submit",className:"btn btn-success",disabled:!this.state.formValid,clicked:this.addUser},"Sign in"))}}]),t}(n.Component),Fe=Object(K.g)(Ie),Pe=a(17),Te=a.n(Pe),xe=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:Te.a.infocard},r.a.createElement("div",{className:Te.a.front},r.a.createElement("img",{className:Te.a.card_image,src:"https://image.tmdb.org/t/p/w185/".concat(this.props.image),alt:this.props.title})),r.a.createElement("div",{className:Te.a.back},r.a.createElement("h2",null,this.props.title),r.a.createElement("p",{className:Te.a.overview},this.props.overview)))}}]),t}(n.Component),Le=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={allFavorites:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;T.GetFavorites().then((function(t){var a=t.data.map((function(e){return Object(d.a)({},e)}));e.setState({allFavorites:a})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=r.a.createElement("p",null,"Something went wrong. Contact Support!");return this.state.error||(e=this.state.allFavorites.map((function(e){return r.a.createElement(xe,{key:e.id,image:e.poster_Path,title:e.title,overview:e.description})}))),r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"heading"},"Favorites"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{class:"card-columns"},e)))}}]),t}(n.Component),Ve=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement($.a,null,r.a.createElement(be,null,r.a.createElement(K.d,null,r.a.createElement(K.b,{exact:!0,path:"/",component:Z}),r.a.createElement(K.b,{exact:!0,path:"/SignIn",component:ke}),r.a.createElement(K.b,{exact:!0,path:"/register",component:Fe}),r.a.createElement(je,{exact:!0,path:"/welcome/:name",component:Z}),r.a.createElement(je,{exact:!0,path:"/:name/favorites",component:Le}),r.a.createElement(je,{exact:!0,path:"/logout",component:Oe}),r.a.createElement(K.b,{exact:!0,path:"/error",component:ye})),r.a.createElement(te,null))))}}]),t}(n.Component);a(84);var Ue=function(){return r.a.createElement("div",null,r.a.createElement(Ve,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(Ue,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[55,1,2]]]);
//# sourceMappingURL=main.49990b20.chunk.js.map