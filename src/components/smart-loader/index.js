
import { createApp } from 'vue';
import   Spinners from './SmartLoader.vue'


function createLoading(type, options, config, props) {
  const container = document.createElement('div');
  const loadingApp = createApp(
      Spinners,
    Object.assign(props, {
      destroy: destroyApp,
      options: options,
      type: type,
      config: config
    }),
  );

  function destroyApp() {
    loadingApp._container.remove();
    loadingApp.unmount();
  }
  loadingApp.destroyApp = destroyApp;

  document.body.appendChild(container);
  loadingApp.mount(container);
  return loadingApp;
}

let Spinner;

export default {
  install(app) {
    function showLoading(type, options, config, props) {
      const propsData = { ...props };
      Spinner = createLoading(type, options, config, propsData)
    }

    const spinnerObj = {
        flower: (options = {}) => {
            showLoading("flower", options, this.config)
        },
        pixel: (options = {}) => {
            showLoading("pixel", options, this.config)
        },
        hollowDots: (options = {}) => {
            showLoading("hollow-dots", options, this.config)
        },
        intersectingCircles: (options = {}) => {
            showLoading("intersecting-circles", options, this.config)
        },
        orbit: (options = {}) => {
            showLoading("orbit", options, this.config)
        },
        radar: (options = {}) => {
            showLoading("radar", options, this.config)
        },
        scalingSquares: (options = {}) => {
            showLoading("scaling-squares", options, this.config)
        },
        halfCircle: (options = {}) => {
            showLoading("half-circle", options, this.config)
        },
        trinityRings: (options = {}) => {
            showLoading("trinity-rings", options, this.config)
        },
        fulfillingSquare: (options = {}) => {
            showLoading("fulfilling-square", options, this.config)
        },
        circlesToRhombuses: (options = {}) => {
            showLoading("circles-to-rhombuses", options, this.config)
        },
        semipolar: (options = {}) => {
            showLoading("semipolar", options, this.config)
        },
        selfBuildingSquare: (options = {}) => {
            showLoading("self-building-square", options, this.config)
        },
        swappingSquares: (options = {}) => {
            showLoading("swapping-squares", options, this.config)
        },
        fulfillingBouncingCircle: (options = {}) => {
            showLoading("fulfilling-bouncing-circle", options, this.config)
        },
        fingerprint: (options = {}) => {
            showLoading("fingerprint", options, this.config)
        },
        spring: (options = {}) => {
            showLoading("spring", options, this.config)
        },
        atom: (options = {}) => {
            showLoading("atom", options, this.config)
        },
        loopingRhombuses: (options = {}) => {
            showLoading("looping-rhombuses", options, this.config)
        },
        breedingRhombus: (options = {}) => {
            showLoading("breeding-rhombus", options, this.config)
        },
        close: () => {
            Spinner.destroyApp()
        }
    }

    // provide暴露
    app.provide('$spinner', spinnerObj);

    // Vue.prototype暴露
    
    app.config.globalProperties.$spinner = spinnerObj;
  },
};