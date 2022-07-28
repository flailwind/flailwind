import AButton from './components/button/AButton.vue';
import AInput from './components/input/AInput.vue';

const components = {
  'a-button': AButton,
  'a-input': AInput,
};

const install = function (Vue, opts = {}) {
  Object.keys(components).forEach(component => {
    Vue.component(component, components[component]);
  });
};

export default Object.assign({}, components, { install });
