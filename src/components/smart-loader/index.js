
import { createApp } from 'vue';
import   Spinners from './SmartLoader.vue'


function createLoading(type, options, props) {
  const container = document.createElement('div');
  const loadingApp = createApp(
      Spinners,
    Object.assign(props, {
      destroy: destroyApp,
      options: options,
      type: type
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
    function showLoading(type, options, props) {
      const propsData = { ...props };
      Spinner = createLoading(type, options, propsData)
    }


    const spinnerObj = {
        flower: (options = {}) => {
            showLoading("flower", options)
        },
        pixel: (options = {}) => {
            showLoading("pixel", options)
        },
        hollowDots: (options = {}) => {
            showLoading("hollow-dots", options)
        },
        intersectingCircles: (options = {}) => {
            showLoading("intersecting-circles", options)
        },
        orbit: (options = {}) => {
            showLoading("orbit", options)
        },
        radar: (options = {}) => {
            showLoading("radar", options)
        },
        scalingSquares: (options = {}) => {
            showLoading("scaling-squares", options)
        },
        halfCircle: (options = {}) => {
            showLoading("half-circle", options)
        },
        trinityRings: (options = {}) => {
            showLoading("trinity-rings", options)
        },
        fulfillingSquare: (options = {}) => {
            showLoading("fulfilling-square", options)
        },
        circlesToRhombuses: (options = {}) => {
            showLoading("circles-to-rhombuses", options)
        },
        semipolar: (options = {}) => {
            showLoading("semipolar", options)
        },
        selfBuildingSquare: (options = {}) => {
            showLoading("self-building-square", options)
        },
        swappingSquares: (options = {}) => {
            showLoading("swapping-squares", options)
        },
        fulfillingBouncingCircle: (options = {}) => {
            showLoading("fulfilling-bouncing-circle", options)
        },
        fingerprint: (options = {}) => {
            showLoading("fingerprint", options)
        },
        spring: (options = {}) => {
            showLoading("spring", options)
        },
        atom: (options = {}) => {
            showLoading("atom", options)
        },
        loopingRhombuses: (options = {}) => {
            showLoading("looping-rhombuses", options)
        },
        breedingRhombus: (options = {}) => {
            showLoading("breeding-rhombus", options)
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