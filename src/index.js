import './css/style.css';
import './js/navigation';
import './js/welcome';
import './js/portfolio';

function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));