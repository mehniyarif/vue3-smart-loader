import { defineComponent, resolveComponent, openBlock, createElementBlock, normalizeClass, createElementVNode, createBlock, createCommentVNode, toDisplayString, Fragment, renderList, createApp } from 'vue';
import { FlowerSpinner, PixelSpinner, HollowDotsSpinner, IntersectingCirclesSpinner, OrbitSpinner, RadarSpinner, ScalingSquaresSpinner, HalfCircleSpinner, TrinityRingsSpinner, FulfillingSquareSpinner, CirclesToRhombusesSpinner, SemipolarSpinner, SelfBuildingSquareSpinner, SwappingSquaresSpinner, FulfillingBouncingCircleSpinner, FingerprintSpinner, SpringSpinner, AtomSpinner, LoopingRhombusesSpinner, BreedingRhombusSpinner } from 'epic-spinners';

var Data = {
    data: function data () {
    var this$1$1 = this;

    return {
      show:false,
      spinnerType:this.type,
      cnt:0,
      spinCounter:setInterval(function () {
        this$1$1.cnt +=1;
      }, 1000),
      defaultActions:{
        "page-reload": this.refreshPage,
        "turn-off": this.turnOff,
        "hang-on": function (){this$1$1.cnt= 0;}
      },
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
            stopAfter:10,
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
  }
};

var Methods = {
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
};

var Computed = {
    computed: {
        menuVisibility: function menuVisibility(){
            var visibility = this.config && this.config.smartMenu && this.config.smartMenu.visibility;
            var stopAfter =  this.config && this.config.smartMenu && this.config.smartMenu.stopAfter || this.spinnerOptions.stopAfter || 20;
            if(visibility && this.cnt >= stopAfter){
                return true
            }
            return false
        },
        stopAfterTitleText: function stopAfterTitleText(){
            var stopAfterTitleText = this.config && this.config.smartMenu && this.config.smartMenu && this.config.smartMenu.texts && this.config.smartMenu.texts.title && this.config.smartMenu.texts.title.text;
            return stopAfterTitleText ? stopAfterTitleText : this.spinnerOptions.stopAfterTitleText || "This process will take a little long"
        },
        stopAfterDescriptionText: function stopAfterDescriptionText(){
            var stopAfterDescriptionText = this.config && this.config.smartMenu && this.config.smartMenu && this.config.smartMenu.texts && this.config.smartMenu.texts.description && this.config.smartMenu.texts.description.text;
            return stopAfterDescriptionText ? stopAfterDescriptionText : this.spinnerOptions.stopAfterDescriptionText || null
        },
        stopAfterMeasureText: function stopAfterMeasureText(){
            var stopAfterMeasureText = this.config && this.config.smartMenu && this.config.smartMenu && this.config.smartMenu.texts && this.config.smartMenu.texts.second && this.config.smartMenu.texts.second.text;
            return stopAfterMeasureText ? stopAfterMeasureText : this.spinnerOptions.stopAfterMeasureText || "Second"
        },
        textTitleClass: function textTitleClass(){
            var textClass = this.config && this.config.smartMenu && this.config.smartMenu && this.config.smartMenu.texts && this.config.smartMenu.texts.title && this.config.smartMenu.texts.title.class;
            return textClass ? textClass : "smart-menu-default-title-text-class"
        },
        textDescriptionClass: function textDescriptionClass(){
            var textDescriptionClass = this.config && this.config.smartMenu && this.config.smartMenu && this.config.smartMenu.texts && this.config.smartMenu.texts.description && this.config.smartMenu.texts.description.class;
            return textDescriptionClass ? textDescriptionClass : "smart-menu-default-description-text-class"
        },
        textSecondClass: function textSecondClass(){
            var textSecondClass = this.config && this.config.smartMenu && this.config.smartMenu && this.config.smartMenu.texts && this.config.smartMenu.texts.second && this.config.smartMenu.texts.second.class;
            return textSecondClass ? textSecondClass : "smart-menu-default-second-text-class"
        }
    }
};

var script = defineComponent({ 
  name:"Vue3SmartLoader",
  mixins:[Data,Methods,Computed],
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
  props:{
    type:String,
    options:Object,
    config:Object,
    destroy:Function
  },
  mounted: function mounted(){
    this.reactivity();
  },
  unmounted: function unmounted(){
    this.cnt = 0;
    clearInterval(this.spinCounter);
  }
  
});

var _hoisted_1 = { class: "block" };
var _hoisted_2 = { class: "flex justify-center" };
var _hoisted_3 = {
  key: 0,
  class: "d-block"
};
var _hoisted_4 = { class: "d-flex justify-content-center mt-5" };
var _hoisted_5 = ["onClick"];
var _hoisted_6 = ["onClick"];

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
      (_ctx.menuVisibility)
        ? (openBlock(), createElementBlock("div", _hoisted_3, [
            createElementVNode("div", {
              class: normalizeClass(_ctx.textTitleClass)
            }, toDisplayString(_ctx.stopAfterTitleText), 3 /* TEXT, CLASS */),
            createElementVNode("div", {
              class: normalizeClass(_ctx.textDescriptionClass)
            }, toDisplayString(_ctx.stopAfterDescriptionText), 3 /* TEXT, CLASS */),
            createElementVNode("div", {
              class: normalizeClass(_ctx.textSecondClass)
            }, toDisplayString(_ctx.cnt) + " " + toDisplayString(_ctx.stopAfterMeasureText), 3 /* TEXT, CLASS */),
            createElementVNode("div", _hoisted_4, [
              (_ctx.config && _ctx.config.smartMenu && _ctx.config.smartMenu.buttons && _ctx.config.smartMenu.buttons.length > 0)
                ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(_ctx.config.smartMenu.buttons, function (item, key) {
                    return (openBlock(), createElementBlock(Fragment, { key: key }, [
                      (item.type == 'custom')
                        ? (openBlock(), createElementBlock("button", {
                            key: 0,
                            onClick: item.action,
                            class: normalizeClass(item.class)
                          }, toDisplayString(item.label), 11 /* TEXT, CLASS, PROPS */, _hoisted_5))
                        : (openBlock(), createElementBlock("button", {
                            key: 1,
                            onClick: _ctx.defaultActions[item.type],
                            class: normalizeClass(item.class)
                          }, toDisplayString(item.label), 11 /* TEXT, CLASS, PROPS */, _hoisted_6))
                    ], 64 /* STABLE_FRAGMENT */))
                  }), 128 /* KEYED_FRAGMENT */))
                : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                    createElementVNode("button", {
                      class: "btn btn-dark",
                      onClick: _cache[0] || (_cache[0] = function () {
                        var args = [], len = arguments.length;
                        while ( len-- ) args[ len ] = arguments[ len ];

                        return (_ctx.refreshPage && _ctx.refreshPage.apply(_ctx, args));
  })
                    }, "Page Reload"),
                    createElementVNode("button", {
                      class: "btn btn-dark mx-2",
                      onClick: _cache[1] || (_cache[1] = function () {
                        var args = [], len = arguments.length;
                        while ( len-- ) args[ len ] = arguments[ len ];

                        return (_ctx.turnOff && _ctx.turnOff.apply(_ctx, args));
  })
                    }, "Just Turn Off Spinner"),
                    createElementVNode("button", {
                      class: "btn btn-dark",
                      onClick: _cache[2] || (_cache[2] = function ($event) { return (_ctx.cnt= 0); })
                    }, "Hang on!")
                  ], 64 /* STABLE_FRAGMENT */))
            ])
          ]))
        : createCommentVNode("v-if", true)
    ])
  ], 2 /* CLASS */))
}

script.render = render;
script.__file = "src/components/smart-loader/SmartLoader.vue";

function createLoading(type, options, config, props) {
  var container = document.createElement('div');
  var loadingApp = createApp(
      script,
    Object.assign(props, {
      destroy: destroyApp,
      options: options,
      type: type,
      config: config
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
    var this$1$1 = this;

    function showLoading(type, options, config, props) {
      var propsData = Object.assign({}, props);
      Spinner = createLoading(type, options, config, propsData);
    }

    var spinnerObj = {
        flower: function (options) {
            if ( options === void 0 ) options = {};

            showLoading("flower", options, this$1$1.config);
        },
        pixel: function (options) {
            if ( options === void 0 ) options = {};

            showLoading("pixel", options, this$1$1.config);
        },
        hollowDots: function (options) {
            if ( options === void 0 ) options = {};

            showLoading("hollow-dots", options, this$1$1.config);
        },
        intersectingCircles: function (options) {
            if ( options === void 0 ) options = {};

            showLoading("intersecting-circles", options, this$1$1.config);
        },
        orbit: function (options) {
            if ( options === void 0 ) options = {};

            showLoading("orbit", options, this$1$1.config);
        },
        radar: function (options) {
            if ( options === void 0 ) options = {};

            showLoading("radar", options, this$1$1.config);
        },
        scalingSquares: function (options) {
            if ( options === void 0 ) options = {};

            showLoading("scaling-squares", options, this$1$1.config);
        },
        halfCircle: function (options) {
            if ( options === void 0 ) options = {};

            showLoading("half-circle", options, this$1$1.config);
        },
        trinityRings: function (options) {
            if ( options === void 0 ) options = {};

            showLoading("trinity-rings", options, this$1$1.config);
        },
        fulfillingSquare: function (options) {
            if ( options === void 0 ) options = {};

            showLoading("fulfilling-square", options, this$1$1.config);
        },
        circlesToRhombuses: function (options) {
            if ( options === void 0 ) options = {};

            showLoading("circles-to-rhombuses", options, this$1$1.config);
        },
        semipolar: function (options) {
            if ( options === void 0 ) options = {};

            showLoading("semipolar", options, this$1$1.config);
        },
        selfBuildingSquare: function (options) {
            if ( options === void 0 ) options = {};

            showLoading("self-building-square", options, this$1$1.config);
        },
        swappingSquares: function (options) {
            if ( options === void 0 ) options = {};

            showLoading("swapping-squares", options, this$1$1.config);
        },
        fulfillingBouncingCircle: function (options) {
            if ( options === void 0 ) options = {};

            showLoading("fulfilling-bouncing-circle", options, this$1$1.config);
        },
        fingerprint: function (options) {
            if ( options === void 0 ) options = {};

            showLoading("fingerprint", options, this$1$1.config);
        },
        spring: function (options) {
            if ( options === void 0 ) options = {};

            showLoading("spring", options, this$1$1.config);
        },
        atom: function (options) {
            if ( options === void 0 ) options = {};

            showLoading("atom", options, this$1$1.config);
        },
        loopingRhombuses: function (options) {
            if ( options === void 0 ) options = {};

            showLoading("looping-rhombuses", options, this$1$1.config);
        },
        breedingRhombus: function (options) {
            if ( options === void 0 ) options = {};

            showLoading("breeding-rhombus", options, this$1$1.config);
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
