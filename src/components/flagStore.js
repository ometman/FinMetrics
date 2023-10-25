import Benin from '../assets/Benin.png';
import BurkinaFaso from '../assets/BurkinaFaso.webp';
import Cameroon from '../assets/Cameroon.webp';
import CapeVerde from '../assets/CapeVerde.png';
import CoteDIvoire from '../assets/CoteDIvoire.webp';
import EquatorialGuinea from '../assets/EquatorialGuinea.webp';
import Gambia from '../assets/Gambia.webp';
import Ghana from '../assets/Ghana.png';
import Guinea from '../assets/Guinea.svg';
import GuineaBissau from '../assets/GuineaBissau.jpg';
import Liberia from '../assets/Liberia.png';
import Mali from '../assets/Mali.svg';
import Mauritania from '../assets/Mauritania.webp';
import Niger from '../assets/Niger.webp';
import Nigeria from '../assets/Nigeria.png';
import Senegal from '../assets/Senegal.webp';
import SierraLeone from '../assets/SierraLeone.webp';
import Togo from '../assets/Togo.svg';

const FlagStore = [
  Benin, BurkinaFaso, CoteDIvoire, CapeVerde, Ghana,
  Guinea, Gambia, Liberia, Mali, Mauritania,
  Niger, Nigeria, Senegal, SierraLeone, Togo,
  Cameroon, EquatorialGuinea, GuineaBissau,
];

const noDataCountry = [
  'Cameroon', 'Equatorial Guinea', 'Guinea Bissau',
];

export const noDataCity = [
  'Yaounde', 'Malabo', 'Bissau',
];

export { FlagStore, noDataCountry, noDataCity as default };
