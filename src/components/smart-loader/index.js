
import { createApp } from 'vue';
import   currLoadingApps from './SmartLoader.vue'


function createLoading(props) {
  const container = document.createElement('div');
  const loadingApp = createApp(
      currLoadingApps,
    Object.assign(props, {
      destroy: destroyApp,
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

let currLoadingApp;
export default {
  install(app) {
    const options = {};


    function showLoading(props) {
      const propsData = { ...options, ...props };
      currLoadingApp = createLoading(propsData);
    }


    const spinner = {
        flower: (options = {}) => {
            currLoadingApp.reactivity("flower", options)
            showLoading()
        },
        pixel: (options = {}) => {
            currLoadingApp.reactivity("pixel", options)
            showLoading()
        },
        hollowDots: (options = {}) => {
            currLoadingApp.reactivity("hollow-dots", options)
            showLoading()
        },
        intersectingCircles: (options = {}) => {
            currLoadingApp.reactivity("intersecting-circles", options)
            showLoading()
        },
        orbit: (options = {}) => {
            currLoadingApp.reactivity("orbit", options)
            showLoading()
        },
        radar: (options = {}) => {
            currLoadingApp.reactivity("radar", options)
            showLoading()
        },
        scalingSquares: (options = {}) => {
            currLoadingApp.reactivity("scaling-squares", options)
            showLoading()
        },
        halfCircle: (options = {}) => {
            currLoadingApp.reactivity("half-circle", options)
            showLoading()
        },
        trinityRings: (options = {}) => {
            currLoadingApp.reactivity("trinity-rings", options)
            showLoading()
        },
        fulfillingSquare: (options = {}) => {
            currLoadingApp.reactivity("fulfilling-square", options)
            showLoading()
        },
        circlesToRhombuses: (options = {}) => {
            currLoadingApp.reactivity("circles-to-rhombuses", options)
            showLoading()
        },
        semipolar: (options = {}) => {
            currLoadingApp.reactivity("semipolar", options)
            showLoading()
        },
        selfBuildingSquare: (options = {}) => {
            currLoadingApp.reactivity("self-building-square", options)
            showLoading()
        },
        swappingSquares: (options = {}) => {
            currLoadingApp.reactivity("swapping-squares", options)
            showLoading()
        },
        fulfillingBouncingCircle: (options = {}) => {
            currLoadingApp.reactivity("fulfilling-bouncing-circle", options)
            showLoading()
        },
        fingerprint: (options = {}) => {
            currLoadingApp.reactivity("fingerprint", options)
            showLoading()
        },
        spring: (options = {}) => {
            currLoadingApp.reactivity("spring", options)
            showLoading()
        },
        atom: (options = {}) => {
            currLoadingApp.reactivity("atom", options)
            showLoading()
        },
        loopingRhombuses: (options = {}) => {
            currLoadingApp.reactivity("looping-rhombuses", options)
            showLoading()
        },
        breedingRhombus: (options = {}) => {
            currLoadingApp.reactivity("breeding-rhombus", options)
            showLoading()
        },
        close: () => {
            currLoadingApp.destroyApp()
        }
    }

    // provide暴露
    app.provide('$spinner', spinner);

    // Vue.prototype暴露
    
    app.config.globalProperties.$spinner = spinner;
  },
};