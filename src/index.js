import AButton from './components/button/AButton.vue';
import AInput from './components/input/AInput.vue';

export default {
  install: (app, options) => {
    app.component('AButton', AButton);
    app.component('AInput', AInput);
  },
};
