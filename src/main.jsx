import { render } from 'preact'
import { App } from './app'
import './index.css'
// import AOS from "aos";
// import "aos/dist/aos.css";

// AOS.init({
//   delay: 150,
// });
render(
  <App />, document.getElementById('app'))
