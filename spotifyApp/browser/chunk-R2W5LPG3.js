import{A as a}from"./chunk-RRMFOBXZ.js";var c=(()=>{let e=class e{constructor(){this.client_id="1fea71b1b72346958ff102e2e915c548"}getAuthorizationSpotify(){let o="https://accounts.spotify.com/authorize",r="http://localhost:4200/login",i=["user-read-playback-state","user-read-currently-playing","user-modify-playback-state","user-read-recently-played","user-top-read","user-library-read","user-library-modify","playlist-read-private","playlist-read-collaborative","streaming"].join("%20");return`${o}?response_type=token&show_dialog=true&client_id=${this.client_id}&scope=${i}&redirect_uri=${r}`}verifyToken(){return localStorage.getItem("token")}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=a({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();export{c as a};
