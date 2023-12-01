import Slider from './lib/slider';
import Select from './lib/select';

const sliderHorizontal = new Slider('[data-slider="slider-horizontal"]');
const sliderVertical = new Slider('[data-slider="slider-vertical"]');
const selectHorizontal = new Select('[data-select="slider-horizontal"]');
const selectVertical = new Select('[data-select="slider-vertical"]');

sliderHorizontal.init();
sliderVertical.init();
selectHorizontal.init();
selectVertical.init();
