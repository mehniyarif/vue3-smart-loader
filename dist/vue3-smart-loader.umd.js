(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue'), require('epic-spinners')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue', 'epic-spinners'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Vue3SmartLoader = {}, global.Vue, global.epicSpinners));
})(this, (function (exports, vue, epicSpinners) { 'use strict';

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
          },
          smartMenuContainer: function smartMenuContainer(){
              return "smart-menu-default-container"
          },
          smartMenuSubContainer: function smartMenuSubContainer(){
              return "smart-menu-default-sub-container"
          },
          smartMenuButton: function smartMenuButton(){
              return "smart-menu-default-button"
          }
      }
  };

  var script = vue.defineComponent({ 
    name:"Vue3SmartLoader",
    mixins:[Data,Methods,Computed],
    components:{
        FlowerSpinner: epicSpinners.FlowerSpinner,
        PixelSpinner: epicSpinners.PixelSpinner,
        HollowDotsSpinner: epicSpinners.HollowDotsSpinner,
        IntersectingCirclesSpinner: epicSpinners.IntersectingCirclesSpinner,
        OrbitSpinner: epicSpinners.OrbitSpinner,RadarSpinner: epicSpinners.RadarSpinner, 
        ScalingSquaresSpinner: epicSpinners.ScalingSquaresSpinner, 
        HalfCircleSpinner: epicSpinners.HalfCircleSpinner, 
        TrinityRingsSpinner: epicSpinners.TrinityRingsSpinner , 
        FulfillingSquareSpinner: epicSpinners.FulfillingSquareSpinner , 
        CirclesToRhombusesSpinner: epicSpinners.CirclesToRhombusesSpinner,
        SemipolarSpinner: epicSpinners.SemipolarSpinner, 
        SelfBuildingSquareSpinner: epicSpinners.SelfBuildingSquareSpinner, 
        SwappingSquaresSpinner: epicSpinners.SwappingSquaresSpinner, 
        FulfillingBouncingCircleSpinner: epicSpinners.FulfillingBouncingCircleSpinner,
        FingerprintSpinner: epicSpinners.FingerprintSpinner, 
        SpringSpinner: epicSpinners.SpringSpinner ,
        AtomSpinner: epicSpinners.AtomSpinner ,
        LoopingRhombusesSpinner: epicSpinners.LoopingRhombusesSpinner, 
        BreedingRhombusSpinner: epicSpinners.BreedingRhombusSpinner
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

  var _hoisted_1 = ["onClick"];
  var _hoisted_2 = ["onClick"];

  function render(_ctx, _cache, $props, $setup, $data, $options) {
    var _component_flower_spinner = vue.resolveComponent("flower-spinner");
    var _component_pixel_spinner = vue.resolveComponent("pixel-spinner");
    var _component_hollow_dots_spinner = vue.resolveComponent("hollow-dots-spinner");
    var _component_intersecting_circles_spinner = vue.resolveComponent("intersecting-circles-spinner");
    var _component_orbit_spinner = vue.resolveComponent("orbit-spinner");
    var _component_radar_spinner = vue.resolveComponent("radar-spinner");
    var _component_scaling_squares_spinner = vue.resolveComponent("scaling-squares-spinner");
    var _component_half_circle_spinner = vue.resolveComponent("half-circle-spinner");
    var _component_trinity_rings_spinner = vue.resolveComponent("trinity-rings-spinner");
    var _component_fulfilling_square_spinner = vue.resolveComponent("fulfilling-square-spinner");
    var _component_circles_to_rhombuses_spinner = vue.resolveComponent("circles-to-rhombuses-spinner");
    var _component_semipolar_spinner = vue.resolveComponent("semipolar-spinner");
    var _component_self_building_square_spinner = vue.resolveComponent("self-building-square-spinner");
    var _component_swapping_squares_spinner = vue.resolveComponent("swapping-squares-spinner");
    var _component_fulfilling_bouncing_circle_spinner = vue.resolveComponent("fulfilling-bouncing-circle-spinner");
    var _component_fingerprint_spinner = vue.resolveComponent("fingerprint-spinner");
    var _component_spring_spinner = vue.resolveComponent("spring-spinner");
    var _component_atom_spinner = vue.resolveComponent("atom-spinner");
    var _component_looping_rhombuses_spinner = vue.resolveComponent("looping-rhombuses-spinner");
    var _component_breeding_rhombus_spinner = vue.resolveComponent("breeding-rhombus-spinner");

    return (vue.openBlock(), vue.createElementBlock("div", {
      class: vue.normalizeClass(["spinner-container", {'show':_ctx.show}])
    }, [
      vue.createElementVNode("div", {
        class: vue.normalizeClass(_ctx.smartMenuContainer)
      }, [
        vue.createElementVNode("div", {
          class: vue.normalizeClass(_ctx.smartMenuSubContainer)
        }, [
          (_ctx.spinnerType == 'flower')
            ? (vue.openBlock(), vue.createBlock(_component_flower_spinner, {
                key: 0,
                "animation-duration": _ctx.spinnerOptions.duration,
                size: _ctx.spinnerOptions.size,
                color: _ctx.spinnerOptions.color
              }, null, 8 /* PROPS */, ["animation-duration", "size", "color"]))
            : (_ctx.spinnerType == 'pixel')
              ? (vue.openBlock(), vue.createBlock(_component_pixel_spinner, {
                  key: 1,
                  "animation-duration": _ctx.spinnerOptions.duration,
                  size: _ctx.spinnerOptions.size,
                  color: _ctx.spinnerOptions.color
                }, null, 8 /* PROPS */, ["animation-duration", "size", "color"]))
              : (_ctx.spinnerType == 'hollow-dots')
                ? (vue.openBlock(), vue.createBlock(_component_hollow_dots_spinner, {
                    key: 2,
                    "animation-duration": _ctx.spinnerOptions.duration,
                    "dot-size": _ctx.spinnerOptions.size,
                    color: _ctx.spinnerOptions.color,
                    "dots-num": _ctx.spinnerOptions.num
                  }, null, 8 /* PROPS */, ["animation-duration", "dot-size", "color", "dots-num"]))
                : (_ctx.spinnerType == 'intersecting-circles')
                  ? (vue.openBlock(), vue.createBlock(_component_intersecting_circles_spinner, {
                      key: 3,
                      "animation-duration": _ctx.spinnerOptions.duration,
                      size: _ctx.spinnerOptions.size,
                      color: _ctx.spinnerOptions.color
                    }, null, 8 /* PROPS */, ["animation-duration", "size", "color"]))
                  : (_ctx.spinnerType == 'orbit')
                    ? (vue.openBlock(), vue.createBlock(_component_orbit_spinner, {
                        key: 4,
                        "animation-duration": _ctx.spinnerOptions.duration,
                        size: _ctx.spinnerOptions.size,
                        color: _ctx.spinnerOptions.color
                      }, null, 8 /* PROPS */, ["animation-duration", "size", "color"]))
                    : (_ctx.spinnerType == 'radar')
                      ? (vue.openBlock(), vue.createBlock(_component_radar_spinner, {
                          key: 5,
                          "animation-duration": _ctx.spinnerOptions.duration,
                          size: _ctx.spinnerOptions.size,
                          color: _ctx.spinnerOptions.color
                        }, null, 8 /* PROPS */, ["animation-duration", "size", "color"]))
                      : (_ctx.spinnerType == 'scaling-squares')
                        ? (vue.openBlock(), vue.createBlock(_component_scaling_squares_spinner, {
                            key: 6,
                            "animation-duration": _ctx.spinnerOptions.duration,
                            size: _ctx.spinnerOptions.size,
                            color: _ctx.spinnerOptions.color
                          }, null, 8 /* PROPS */, ["animation-duration", "size", "color"]))
                        : (_ctx.spinnerType == 'half-circle')
                          ? (vue.openBlock(), vue.createBlock(_component_half_circle_spinner, {
                              key: 7,
                              "animation-duration": _ctx.spinnerOptions.duration,
                              size: _ctx.spinnerOptions.size,
                              color: _ctx.spinnerOptions.color
                            }, null, 8 /* PROPS */, ["animation-duration", "size", "color"]))
                          : (_ctx.spinnerType == 'trinity-rings')
                            ? (vue.openBlock(), vue.createBlock(_component_trinity_rings_spinner, {
                                key: 8,
                                "animation-duration": _ctx.spinnerOptions.duration,
                                size: _ctx.spinnerOptions.size,
                                color: _ctx.spinnerOptions.color
                              }, null, 8 /* PROPS */, ["animation-duration", "size", "color"]))
                            : (_ctx.spinnerType == 'fulfilling-square')
                              ? (vue.openBlock(), vue.createBlock(_component_fulfilling_square_spinner, {
                                  key: 9,
                                  "animation-duration": _ctx.spinnerOptions.duration,
                                  size: _ctx.spinnerOptions.size,
                                  color: _ctx.spinnerOptions.color
                                }, null, 8 /* PROPS */, ["animation-duration", "size", "color"]))
                              : (_ctx.spinnerType == 'circles-to-rhombuses')
                                ? (vue.openBlock(), vue.createBlock(_component_circles_to_rhombuses_spinner, {
                                    key: 10,
                                    "animation-duration": _ctx.spinnerOptions.duration,
                                    "circle-size": _ctx.spinnerOptions.size,
                                    color: _ctx.spinnerOptions.color,
                                    "circle-num": _ctx.spinnerOptions.num
                                  }, null, 8 /* PROPS */, ["animation-duration", "circle-size", "color", "circle-num"]))
                                : (_ctx.spinnerType == 'semipolar')
                                  ? (vue.openBlock(), vue.createBlock(_component_semipolar_spinner, {
                                      key: 11,
                                      "animation-duration": _ctx.spinnerOptions.duration,
                                      size: _ctx.spinnerOptions.size,
                                      color: _ctx.spinnerOptions.color
                                    }, null, 8 /* PROPS */, ["animation-duration", "size", "color"]))
                                  : (_ctx.spinnerType == 'self-building-square')
                                    ? (vue.openBlock(), vue.createBlock(_component_self_building_square_spinner, {
                                        key: 12,
                                        "animation-duration": _ctx.spinnerOptions.duration,
                                        size: _ctx.spinnerOptions.size,
                                        color: _ctx.spinnerOptions.color
                                      }, null, 8 /* PROPS */, ["animation-duration", "size", "color"]))
                                    : (_ctx.spinnerType == 'swapping-squares')
                                      ? (vue.openBlock(), vue.createBlock(_component_swapping_squares_spinner, {
                                          key: 13,
                                          "animation-duration": _ctx.spinnerOptions.duration,
                                          size: _ctx.spinnerOptions.size,
                                          color: _ctx.spinnerOptions.color
                                        }, null, 8 /* PROPS */, ["animation-duration", "size", "color"]))
                                      : (_ctx.spinnerType == 'fulfilling-bouncing-circle')
                                        ? (vue.openBlock(), vue.createBlock(_component_fulfilling_bouncing_circle_spinner, {
                                            key: 14,
                                            "animation-duration": _ctx.spinnerOptions.duration,
                                            size: _ctx.spinnerOptions.size,
                                            color: _ctx.spinnerOptions.color
                                          }, null, 8 /* PROPS */, ["animation-duration", "size", "color"]))
                                        : (_ctx.spinnerType == 'fingerprint')
                                          ? (vue.openBlock(), vue.createBlock(_component_fingerprint_spinner, {
                                              key: 15,
                                              "animation-duration": _ctx.spinnerOptions.duration,
                                              size: _ctx.spinnerOptions.size,
                                              color: _ctx.spinnerOptions.color
                                            }, null, 8 /* PROPS */, ["animation-duration", "size", "color"]))
                                          : (_ctx.spinnerType == 'spring')
                                            ? (vue.openBlock(), vue.createBlock(_component_spring_spinner, {
                                                key: 16,
                                                "animation-duration": _ctx.spinnerOptions.duration,
                                                size: _ctx.spinnerOptions.size,
                                                color: _ctx.spinnerOptions.color
                                              }, null, 8 /* PROPS */, ["animation-duration", "size", "color"]))
                                            : (_ctx.spinnerType == 'atom')
                                              ? (vue.openBlock(), vue.createBlock(_component_atom_spinner, {
                                                  key: 17,
                                                  "animation-duration": _ctx.spinnerOptions.duration,
                                                  size: _ctx.spinnerOptions.size,
                                                  color: _ctx.spinnerOptions.color
                                                }, null, 8 /* PROPS */, ["animation-duration", "size", "color"]))
                                              : (_ctx.spinnerType == 'looping-rhombuses')
                                                ? (vue.openBlock(), vue.createBlock(_component_looping_rhombuses_spinner, {
                                                    key: 18,
                                                    "animation-duration": _ctx.spinnerOptions.duration,
                                                    size: _ctx.spinnerOptions.size,
                                                    color: _ctx.spinnerOptions.color
                                                  }, null, 8 /* PROPS */, ["animation-duration", "size", "color"]))
                                                : (_ctx.spinnerType == 'breeding-rhombus')
                                                  ? (vue.openBlock(), vue.createBlock(_component_breeding_rhombus_spinner, {
                                                      key: 19,
                                                      "animation-duration": _ctx.spinnerOptions.duration,
                                                      size: _ctx.spinnerOptions.size,
                                                      color: _ctx.spinnerOptions.color
                                                    }, null, 8 /* PROPS */, ["animation-duration", "size", "color"]))
                                                  : vue.createCommentVNode("v-if", true)
        ], 2 /* CLASS */),
        (_ctx.menuVisibility)
          ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 0,
              class: vue.normalizeClass(_ctx.smartMenuContainer)
            }, [
              vue.createElementVNode("div", {
                class: vue.normalizeClass(_ctx.textTitleClass)
              }, vue.toDisplayString(_ctx.stopAfterTitleText), 3 /* TEXT, CLASS */),
              vue.createElementVNode("div", {
                class: vue.normalizeClass(_ctx.textDescriptionClass)
              }, vue.toDisplayString(_ctx.stopAfterDescriptionText), 3 /* TEXT, CLASS */),
              vue.createElementVNode("div", {
                class: vue.normalizeClass(_ctx.textSecondClass)
              }, vue.toDisplayString(_ctx.cnt) + " " + vue.toDisplayString(_ctx.stopAfterMeasureText), 3 /* TEXT, CLASS */),
              vue.createElementVNode("div", {
                class: vue.normalizeClass(_ctx.smartMenuSubContainer)
              }, [
                (_ctx.config && _ctx.config.smartMenu && _ctx.config.smartMenu.buttons && _ctx.config.smartMenu.buttons.length > 0)
                  ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 0 }, vue.renderList(_ctx.config.smartMenu.buttons, function (item, key) {
                      return (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: key }, [
                        (item.type == 'custom')
                          ? (vue.openBlock(), vue.createElementBlock("button", {
                              key: 0,
                              onClick: item.action,
                              class: vue.normalizeClass(item && item.class ? item.class : _ctx.smartMenuButton)
                            }, vue.toDisplayString(item.label), 11 /* TEXT, CLASS, PROPS */, _hoisted_1))
                          : (vue.openBlock(), vue.createElementBlock("button", {
                              key: 1,
                              onClick: _ctx.defaultActions[item.type],
                              class: vue.normalizeClass(item && item.class ? item.class : _ctx.smartMenuButton)
                            }, vue.toDisplayString(item.label), 11 /* TEXT, CLASS, PROPS */, _hoisted_2))
                      ], 64 /* STABLE_FRAGMENT */))
                    }), 128 /* KEYED_FRAGMENT */))
                  : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
                      vue.createElementVNode("button", {
                        class: vue.normalizeClass(_ctx.smartMenuButton),
                        onClick: _cache[0] || (_cache[0] = function () {
                          var args = [], len = arguments.length;
                          while ( len-- ) args[ len ] = arguments[ len ];

                          return (_ctx.refreshPage && _ctx.refreshPage.apply(_ctx, args));
    })
                      }, "Page Reload", 2 /* CLASS */),
                      vue.createElementVNode("button", {
                        class: vue.normalizeClass(_ctx.smartMenuButton),
                        onClick: _cache[1] || (_cache[1] = function () {
                          var args = [], len = arguments.length;
                          while ( len-- ) args[ len ] = arguments[ len ];

                          return (_ctx.turnOff && _ctx.turnOff.apply(_ctx, args));
    })
                      }, "Just Turn Off Spinner", 2 /* CLASS */),
                      vue.createElementVNode("button", {
                        class: vue.normalizeClass(_ctx.smartMenuButton),
                        onClick: _cache[2] || (_cache[2] = function ($event) { return (_ctx.cnt= 0); })
                      }, "Hang on!", 2 /* CLASS */)
                    ], 64 /* STABLE_FRAGMENT */))
              ], 2 /* CLASS */)
            ], 2 /* CLASS */))
          : vue.createCommentVNode("v-if", true)
      ], 2 /* CLASS */)
    ], 2 /* CLASS */))
  }

  script.render = render;
  script.__file = "src/components/smart-loader/SmartLoader.vue";

  function createLoading(type, options, config, props) {
    var container = document.createElement('div');
    var loadingApp = vue.createApp(
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

  exports["default"] = index;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
