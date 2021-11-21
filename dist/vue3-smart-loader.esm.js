import { defineComponent, resolveComponent, openBlock, createElementBlock, normalizeClass, createElementVNode, createBlock, createCommentVNode, toDisplayString, createApp } from 'vue';
import { FlowerSpinner, PixelSpinner, HollowDotsSpinner, IntersectingCirclesSpinner, OrbitSpinner, RadarSpinner, ScalingSquaresSpinner, HalfCircleSpinner, TrinityRingsSpinner, FulfillingSquareSpinner, CirclesToRhombusesSpinner, SemipolarSpinner, SelfBuildingSquareSpinner, SwappingSquaresSpinner, FulfillingBouncingCircleSpinner, FingerprintSpinner, SpringSpinner, AtomSpinner, LoopingRhombusesSpinner, BreedingRhombusSpinner } from 'epic-spinners';

var script = defineComponent({ 
  name:"Vue3SmartLoader",
  components:{
      FlowerSpinner: FlowerSpinner,
      PixelSpinner: PixelSpinner,
      HollowDotsSpinner: HollowDotsSpinner,
      IntersectingCirclesSpinner: IntersectingCirclesSpinner,
      OrbitSpinner: OrbitSpinner,RadarSpinner: RadarSpinner, 
      ScalingSquaresSpinner: ScalingSquaresSpinner, 
      HalfCircleSpinner: HalfCircleSpinner, 
      TrinityRingsSpinner: TrinityRingsSpinner , 
      FulfillingSquareSpinner: FulfillingSquareSpinner , 
      CirclesToRhombusesSpinner: CirclesToRhombusesSpinner,
      SemipolarSpinner: SemipolarSpinner, 
      SelfBuildingSquareSpinner: SelfBuildingSquareSpinner, 
      SwappingSquaresSpinner: SwappingSquaresSpinner, 
      FulfillingBouncingCircleSpinner: FulfillingBouncingCircleSpinner,
      FingerprintSpinner: FingerprintSpinner, 
      SpringSpinner: SpringSpinner ,
      AtomSpinner: AtomSpinner ,
      LoopingRhombusesSpinner: LoopingRhombusesSpinner, 
      BreedingRhombusSpinner: BreedingRhombusSpinner
  },
  unmounted: function unmounted(){
    this.cnt = 0;
    clearInterval(this.spinCounter);
  },
  mounted: function mounted(){
    this.reactivity();
  },
  props:{
    type:String,
    options:Object,
    destroy:Function
  },
  data: function data () {
    var this$1$1 = this;

    return {
      show:false,
      spinnerType:this.type,
      cnt:0,
      spinCounter:setInterval(function () {
        this$1$1.cnt +=1;
      }, 1000),
      defaultOptions:{
          flower:{
            duration:2500,
            size:70,
            color:"#ccc"
          },
          pixel:{
            duration:2000,
            size:70,
            color:"#ccc"
          },
          hollowDots:{
            duration:1000,
            size:15,
            num:3,
            color:"#ccc"
          },
          intersectingCircles:{
            duration:1200,
            size:70,
            color:"#ccc"
          },
          orbit:{
            duration:1200,
            size:55,
            color:"#ccc"
          },
          radar:{
            duration:2000,
            size:60,
            color:"#ccc"
          },
          scalingSquares:{
            duration:1250,
            size:65,
            color:"#ccc"
          },
          halfCircle:{
            duration:1000,
            size:60,
            color:"#ccc"
          } ,
          trinityRings:{
            duration:1500,
            size:66,
            color:"#ccc"
          } ,
          fulfillingSquare:{
            duration:4000,
            size:50,
            color:"#ccc"
          } ,
          circlesToRhombuses:{
            duration:1200,
            size:15,
            num:3,
            color:"#ccc"
          },
          semipolar:{
            duration:2000,
            size:65,
            color:"#ccc"
          } ,
          selfBuildingSquare:{
            duration:6000,
            size:40,
            color:"#ccc"
          } ,
          swappingSquares:{
            duration:1000,
            size:65,
            color:"#ccc"
          } ,
          fulfillingBouncingCircle:{
            duration:4000,
            size:60,
            color:"#ccc"
          },
          fingerprint:{
            duration:1500,
            size:64,
            color:"#ccc"
          } ,
          spring:{
            duration:3000,
            size:60,
            color:"#ccc"
          },
          atom:{
            duration:1000,
            size:60,
            color:"#ccc"
          },
          loopingRhombuses:{
            duration:2500,
            size:15,
            color:"#ccc"
          } ,
          breedingRhombus:{
            duration:2000,
            size:65,
            color:"#ccc"
          },
      },
      spinnerOptions:{
            duration:2500,
            size:70,
            stopAfter:20,
            stopAfterText:"This process will take a little long",
            color:"#ccc",
            num:null
      },
      kebabNames:["flower","pixel","hollow-dots","intersecting-circles","orbit","radar","scaling-squares",
                    "half-circle","trinity-rings","fulfilling-square","circles-to-rhombuses","semipolar",
                    "self-building-square","swapping-squares","fulfilling-bouncing-circle","fingerprint",
                    "spring","atom","looping-rhombuses","breeding-rhombus-spinner"],
      camelNames:["flower","pixel","hollowDots","intersectingCircles","orbit","radar","scalingSquares","halfCircle",
                        "trinityRings","fulfillingSquare","circlesToRhombuses","semipolar","selfBuildingSquare","swappingSquares",
                        "fulfillingBouncingCircle","fingerprint","spring","atom","loopingRhombuses","breedingRhombus"],
    }
  },
  methods: {
    reactivity: function reactivity () {
      var this$1$1 = this;

      this.cnt = 0;
      this.show = true;
      var fndIndex = this.kebabNames.findIndex(function (v) { return v == this$1$1.spinnerType; });
      fndIndex = fndIndex ? fndIndex : 0;
      var defaultOptions = {
            duration: this.options && this.options.duration ? this.options.duration : this.defaultOptions[this.camelNames[fndIndex]].duration,
            size: this.options && this.options.size ? this.options.size : this.defaultOptions[this.camelNames[fndIndex]].size,
            color:this.options && this.options.color ? this.options.color : this.defaultOptions[this.camelNames[fndIndex]].color,
            num: this.options && this.options.num ? this.options.num : this.defaultOptions[this.camelNames[fndIndex]].num,
            stopAfter: this.options && this.options.stopAfter ? this.options.stopAfter : 20,
            stopAfterText: this.options && this.options.stopAfterText ? this.options.stopAfterText : "This process will take a little long",
      };
      this.spinnerOptions = defaultOptions;

      if (this.spinnerOptions.visibility) {
        setTimeout(function () { this$1$1.close(); }, this.spinnerOptions.visibility);
      }
    },
  close: function close(visibility){
      var this$1$1 = this;

      this.cnt = 0;

       if(!visibility){
          this.destroy();
       }
       
      setTimeout(function () {
          this$1$1.destroy();
      }, visibility);
       
    },
    refreshPage: function refreshPage(){
        window.location.reload();
    },
    turnOff: function turnOff(){
      this.destroy();
    }
  }
});

var _hoisted_1 = { class: "block" };
var _hoisted_2 = { class: "flex justify-center" };
var _hoisted_3 = {
  key: 0,
  class: "block"
};
var _hoisted_4 = { class: "text-center stop-after-text" };
var _hoisted_5 = { class: "text-center stop-after-text" };
var _hoisted_6 = { class: "flex justify-center mt-10" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_flower_spinner = resolveComponent("flower-spinner");
  var _component_pixel_spinner = resolveComponent("pixel-spinner");
  var _component_hollow_dots_spinner = resolveComponent("hollow-dots-spinner");
  var _component_intersecting_circles_spinner = resolveComponent("intersecting-circles-spinner");
  var _component_orbit_spinner = resolveComponent("orbit-spinner");
  var _component_radar_spinner = resolveComponent("radar-spinner");
  var _component_scaling_squares_spinner = resolveComponent("scaling-squares-spinner");
  var _component_half_circle_spinner = resolveComponent("half-circle-spinner");
  var _component_trinity_rings_spinner = resolveComponent("trinity-rings-spinner");
  var _component_fulfilling_square_spinner = resolveComponent("fulfilling-square-spinner");
  var _component_circles_to_rhombuses_spinner = resolveComponent("circles-to-rhombuses-spinner");
  var _component_semipolar_spinner = resolveComponent("semipolar-spinner");
  var _component_self_building_square_spinner = resolveComponent("self-building-square-spinner");
  var _component_swapping_squares_spinner = resolveComponent("swapping-squares-spinner");
  var _component_fulfilling_bouncing_circle_spinner = resolveComponent("fulfilling-bouncing-circle-spinner");
  var _component_fingerprint_spinner = resolveComponent("fingerprint-spinner");
  var _component_spring_spinner = resolveComponent("spring-spinner");
  var _component_atom_spinner = resolveComponent("atom-spinner");
  var _component_looping_rhombuses_spinner = resolveComponent("looping-rhombuses-spinner");
  var _component_breeding_rhombus_spinner = resolveComponent("breeding-rhombus-spinner");

  return (openBlock(), createElementBlock("div", {
    class: normalizeClass(["spinner-container", {'show':_ctx.show}])
  }, [
    createElementVNode("div", _hoisted_1, [
      createElementVNode("div", _hoisted_2, [
        (_ctx.spinnerType == 'flower')
          ? (openBlock(), createBlock(_component_flower_spinner, {
              key: 0,
              "animation-duration": _ctx.spinnerOptions.duration,
              size: _ctx.spinnerOptions.size,
              color: _ctx.spinnerOptions.color
            }, null, 8 /* PROPS */, ["animation-duration", "size", "color"]))
          : (_ctx.spinnerType == 'pixel')
            ? (openBlock(), createBlock(_component_pixel_spinner, {
                key: 1,
                "animation-duration": _ctx.spinnerOptions.duration,
                size: _ctx.spinnerOptions.size,
                color: _ctx.spinnerOptions.color
              }, null, 8 /* PROPS */, ["animation-duration", "size", "color"]))
            : (_ctx.spinnerType == 'hollow-dots')
              ? (openBlock(), createBlock(_component_hollow_dots_spinner, {
                  key: 2,
                  "animation-duration": _ctx.spinnerOptions.duration,
                  "dot-size": _ctx.spinnerOptions.size,
                  color: _ctx.spinnerOptions.color,
                  "dots-num": _ctx.spinnerOptions.num
                }, null, 8 /* PROPS */, ["animation-duration", "dot-size", "color", "dots-num"]))
              : (_ctx.spinnerType == 'intersecting-circles')
                ? (openBlock(), createBlock(_component_intersecting_circles_spinner, {
                    key: 3,
                    "animation-duration": _ctx.spinnerOptions.duration,
                    size: _ctx.spinnerOptions.size,
                    color: _ctx.spinnerOptions.color
                  }, null, 8 /* PROPS */, ["animation-duration", "size", "color"]))
                : (_ctx.spinnerType == 'orbit')
                  ? (openBlock(), createBlock(_component_orbit_spinner, {
                      key: 4,
                      "animation-duration": _ctx.spinnerOptions.duration,
                      size: _ctx.spinnerOptions.size,
                      color: _ctx.spinnerOptions.color
                    }, null, 8 /* PROPS */, ["animation-duration", "size", "color"]))
                  : (_ctx.spinnerType == 'radar')
                    ? (openBlock(), createBlock(_component_radar_spinner, {
                        key: 5,
                        "animation-duration": _ctx.spinnerOptions.duration,
                        size: _ctx.spinnerOptions.size,
                        color: _ctx.spinnerOptions.color
                      }, null, 8 /* PROPS */, ["animation-duration", "size", "color"]))
                    : (_ctx.spinnerType == 'scaling-squares')
                      ? (openBlock(), createBlock(_component_scaling_squares_spinner, {
                          key: 6,
                          "animation-duration": _ctx.spinnerOptions.duration,
                          size: _ctx.spinnerOptions.size,
                          color: _ctx.spinnerOptions.color
                        }, null, 8 /* PROPS */, ["animation-duration", "size", "color"]))
                      : (_ctx.spinnerType == 'half-circle')
                        ? (openBlock(), createBlock(_component_half_circle_spinner, {
                            key: 7,
                            "animation-duration": _ctx.spinnerOptions.duration,
                            size: _ctx.spinnerOptions.size,
                            color: _ctx.spinnerOptions.color
                          }, null, 8 /* PROPS */, ["animation-duration", "size", "color"]))
                        : (_ctx.spinnerType == 'trinity-rings')
                          ? (openBlock(), createBlock(_component_trinity_rings_spinner, {
                              key: 8,
                              "animation-duration": _ctx.spinnerOptions.duration,
                              size: _ctx.spinnerOptions.size,
                              color: _ctx.spinnerOptions.color
                            }, null, 8 /* PROPS */, ["animation-duration", "size", "color"]))
                          : (_ctx.spinnerType == 'fulfilling-square')
                            ? (openBlock(), createBlock(_component_fulfilling_square_spinner, {
                                key: 9,
                                "animation-duration": _ctx.spinnerOptions.duration,
                                size: _ctx.spinnerOptions.size,
                                color: _ctx.spinnerOptions.color
                              }, null, 8 /* PROPS */, ["animation-duration", "size", "color"]))
                            : (_ctx.spinnerType == 'circles-to-rhombuses')
                              ? (openBlock(), createBlock(_component_circles_to_rhombuses_spinner, {
                                  key: 10,
                                  "animation-duration": _ctx.spinnerOptions.duration,
                                  "circle-size": _ctx.spinnerOptions.size,
                                  color: _ctx.spinnerOptions.color,
                                  "circle-num": _ctx.spinnerOptions.num
                                }, null, 8 /* PROPS */, ["animation-duration", "circle-size", "color", "circle-num"]))
                              : (_ctx.spinnerType == 'semipolar')
                                ? (openBlock(), createBlock(_component_semipolar_spinner, {
                                    key: 11,
                                    "animation-duration": _ctx.spinnerOptions.duration,
                                    size: _ctx.spinnerOptions.size,
                                    color: _ctx.spinnerOptions.color
                                  }, null, 8 /* PROPS */, ["animation-duration", "size", "color"]))
                                : (_ctx.spinnerType == 'self-building-square')
                                  ? (openBlock(), createBlock(_component_self_building_square_spinner, {
                                      key: 12,
                                      "animation-duration": _ctx.spinnerOptions.duration,
                                      size: _ctx.spinnerOptions.size,
                                      color: _ctx.spinnerOptions.color
                                    }, null, 8 /* PROPS */, ["animation-duration", "size", "color"]))
                                  : (_ctx.spinnerType == 'swapping-squares')
                                    ? (openBlock(), createBlock(_component_swapping_squares_spinner, {
                                        key: 13,
                                        "animation-duration": _ctx.spinnerOptions.duration,
                                        size: _ctx.spinnerOptions.size,
                                        color: _ctx.spinnerOptions.color
                                      }, null, 8 /* PROPS */, ["animation-duration", "size", "color"]))
                                    : (_ctx.spinnerType == 'fulfilling-bouncing-circle')
                                      ? (openBlock(), createBlock(_component_fulfilling_bouncing_circle_spinner, {
                                          key: 14,
                                          "animation-duration": _ctx.spinnerOptions.duration,
                                          size: _ctx.spinnerOptions.size,
                                          color: _ctx.spinnerOptions.color
                                        }, null, 8 /* PROPS */, ["animation-duration", "size", "color"]))
                                      : (_ctx.spinnerType == 'fingerprint')
                                        ? (openBlock(), createBlock(_component_fingerprint_spinner, {
                                            key: 15,
                                            "animation-duration": _ctx.spinnerOptions.duration,
                                            size: _ctx.spinnerOptions.size,
                                            color: _ctx.spinnerOptions.color
                                          }, null, 8 /* PROPS */, ["animation-duration", "size", "color"]))
                                        : (_ctx.spinnerType == 'spring')
                                          ? (openBlock(), createBlock(_component_spring_spinner, {
                                              key: 16,
                                              "animation-duration": _ctx.spinnerOptions.duration,
                                              size: _ctx.spinnerOptions.size,
                                              color: _ctx.spinnerOptions.color
                                            }, null, 8 /* PROPS */, ["animation-duration", "size", "color"]))
                                          : (_ctx.spinnerType == 'atom')
                                            ? (openBlock(), createBlock(_component_atom_spinner, {
                                                key: 17,
                                                "animation-duration": _ctx.spinnerOptions.duration,
                                                size: _ctx.spinnerOptions.size,
                                                color: _ctx.spinnerOptions.color
                                              }, null, 8 /* PROPS */, ["animation-duration", "size", "color"]))
                                            : (_ctx.spinnerType == 'looping-rhombuses')
                                              ? (openBlock(), createBlock(_component_looping_rhombuses_spinner, {
                                                  key: 18,
                                                  "animation-duration": _ctx.spinnerOptions.duration,
                                                  size: _ctx.spinnerOptions.size,
                                                  color: _ctx.spinnerOptions.color
                                                }, null, 8 /* PROPS */, ["animation-duration", "size", "color"]))
                                              : (_ctx.spinnerType == 'breeding-rhombus')
                                                ? (openBlock(), createBlock(_component_breeding_rhombus_spinner, {
                                                    key: 19,
                                                    "animation-duration": _ctx.spinnerOptions.duration,
                                                    size: _ctx.spinnerOptions.size,
                                                    color: _ctx.spinnerOptions.color
                                                  }, null, 8 /* PROPS */, ["animation-duration", "size", "color"]))
                                                : createCommentVNode("v-if", true)
      ]),
      (_ctx.cnt >= this.spinnerOptions.stopAfter)
        ? (openBlock(), createElementBlock("div", _hoisted_3, [
            createElementVNode("div", _hoisted_4, toDisplayString(_ctx.spinnerOptions.stopAfterText || "This process will take a little long"), 1 /* TEXT */),
            createElementVNode("div", _hoisted_5, toDisplayString(_ctx.cnt) + " " + toDisplayString(_ctx.cnt > 1 ? 'seconds' : 'second'), 1 /* TEXT */),
            createElementVNode("div", _hoisted_6, [
              createElementVNode("button", {
                onClick: _cache[0] || (_cache[0] = function () {
                  var args = [], len = arguments.length;
                  while ( len-- ) args[ len ] = arguments[ len ];

                  return (_ctx.refreshPage && _ctx.refreshPage.apply(_ctx, args));
  })
              }, "Page Reload"),
              createElementVNode("button", {
                class: "mr-2",
                onClick: _cache[1] || (_cache[1] = function () {
                  var args = [], len = arguments.length;
                  while ( len-- ) args[ len ] = arguments[ len ];

                  return (_ctx.turnOff && _ctx.turnOff.apply(_ctx, args));
  })
              }, "Just Turn Off Spinner"),
              createElementVNode("button", {
                onClick: _cache[2] || (_cache[2] = function ($event) { return (_ctx.cnt= 0); })
              }, "Hang on!")
            ])
          ]))
        : createCommentVNode("v-if", true)
    ])
  ], 2 /* CLASS */))
}

script.render = render;
script.__file = "src/components/smart-loader/SmartLoader.vue";

function createLoading(type, options, props) {
  var container = document.createElement('div');
  var loadingApp = createApp(
      script,
    Object.assign(props, {
      destroy: destroyApp,
      options: options,
      type: type
    })
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

var Spinner;
var index = {
  install: function install(app) {
    function showLoading(type, options, props) {
      var propsData = Object.assign({}, props);
      Spinner = createLoading(type, options, propsData);
    }


    var spinnerObj = {
        flower: function (options) {
            if ( options === void 0 ) options = {};

            showLoading("flower", options);
        },
        pixel: function (options) {
            if ( options === void 0 ) options = {};

            showLoading("pixel", options);
        },
        hollowDots: function (options) {
            if ( options === void 0 ) options = {};

            showLoading("hollow-dots", options);
        },
        intersectingCircles: function (options) {
            if ( options === void 0 ) options = {};

            showLoading("intersecting-circles", options);
        },
        orbit: function (options) {
            if ( options === void 0 ) options = {};

            showLoading("orbit", options);
        },
        radar: function (options) {
            if ( options === void 0 ) options = {};

            showLoading("radar", options);
        },
        scalingSquares: function (options) {
            if ( options === void 0 ) options = {};

            showLoading("scaling-squares", options);
        },
        halfCircle: function (options) {
            if ( options === void 0 ) options = {};

            showLoading("half-circle", options);
        },
        trinityRings: function (options) {
            if ( options === void 0 ) options = {};

            showLoading("trinity-rings", options);
        },
        fulfillingSquare: function (options) {
            if ( options === void 0 ) options = {};

            showLoading("fulfilling-square", options);
        },
        circlesToRhombuses: function (options) {
            if ( options === void 0 ) options = {};

            showLoading("circles-to-rhombuses", options);
        },
        semipolar: function (options) {
            if ( options === void 0 ) options = {};

            showLoading("semipolar", options);
        },
        selfBuildingSquare: function (options) {
            if ( options === void 0 ) options = {};

            showLoading("self-building-square", options);
        },
        swappingSquares: function (options) {
            if ( options === void 0 ) options = {};

            showLoading("swapping-squares", options);
        },
        fulfillingBouncingCircle: function (options) {
            if ( options === void 0 ) options = {};

            showLoading("fulfilling-bouncing-circle", options);
        },
        fingerprint: function (options) {
            if ( options === void 0 ) options = {};

            showLoading("fingerprint", options);
        },
        spring: function (options) {
            if ( options === void 0 ) options = {};

            showLoading("spring", options);
        },
        atom: function (options) {
            if ( options === void 0 ) options = {};

            showLoading("atom", options);
        },
        loopingRhombuses: function (options) {
            if ( options === void 0 ) options = {};

            showLoading("looping-rhombuses", options);
        },
        breedingRhombus: function (options) {
            if ( options === void 0 ) options = {};

            showLoading("breeding-rhombus", options);
        },
        close: function () {
            Spinner.destroyApp();
        }
    };

    // provide暴露
    app.provide('$spinner', spinnerObj);

    // Vue.prototype暴露
    
    app.config.globalProperties.$spinner = spinnerObj;
  },
};

export { index as default };
