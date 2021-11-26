<template>
  <div class="spinner-container" :class="{'show':show}">
    <div :class="smartMenuContainer" >
      <div :class="smartMenuSubContainer">
        <flower-spinner
          v-if="spinnerType == 'flower'"
          :animation-duration="spinnerOptions.duration"
          :size="spinnerOptions.size"
          :color="spinnerOptions.color"
        />
        <pixel-spinner
          v-else-if="spinnerType == 'pixel'"
          :animation-duration="spinnerOptions.duration"
          :size="spinnerOptions.size"
          :color="spinnerOptions.color"
        />
        <hollow-dots-spinner
          v-else-if="spinnerType == 'hollow-dots'"
          :animation-duration="spinnerOptions.duration"
          :dot-size="spinnerOptions.size"
          :color="spinnerOptions.color"
          :dots-num="spinnerOptions.num"
        />
        <intersecting-circles-spinner
          v-else-if="spinnerType == 'intersecting-circles'"
          :animation-duration="spinnerOptions.duration"
          :size="spinnerOptions.size"
          :color="spinnerOptions.color"
        />
        <orbit-spinner
          v-else-if="spinnerType == 'orbit'"
          :animation-duration="spinnerOptions.duration"
          :size="spinnerOptions.size"
          :color="spinnerOptions.color"
        />
        <radar-spinner
          v-else-if="spinnerType == 'radar'"
          :animation-duration="spinnerOptions.duration"
          :size="spinnerOptions.size"
          :color="spinnerOptions.color"
        />
        <scaling-squares-spinner
          v-else-if="spinnerType == 'scaling-squares'"
          :animation-duration="spinnerOptions.duration"
          :size="spinnerOptions.size"
          :color="spinnerOptions.color"
        />
        <half-circle-spinner
          v-else-if="spinnerType == 'half-circle'"
          :animation-duration="spinnerOptions.duration"
          :size="spinnerOptions.size"
          :color="spinnerOptions.color"
        />
        <trinity-rings-spinner
          v-else-if="spinnerType == 'trinity-rings'"
          :animation-duration="spinnerOptions.duration"
          :size="spinnerOptions.size"
          :color="spinnerOptions.color"
        />
        <fulfilling-square-spinner
          v-else-if="spinnerType == 'fulfilling-square'"
          :animation-duration="spinnerOptions.duration"
          :size="spinnerOptions.size"
          :color="spinnerOptions.color"
        />
        <circles-to-rhombuses-spinner
          v-else-if="spinnerType == 'circles-to-rhombuses'"
          :animation-duration="spinnerOptions.duration"
          :circle-size="spinnerOptions.size"
          :color="spinnerOptions.color"
          :circle-num="spinnerOptions.num"
        />
        <semipolar-spinner
          v-else-if="spinnerType == 'semipolar'"
          :animation-duration="spinnerOptions.duration"
          :size="spinnerOptions.size"
          :color="spinnerOptions.color"
        />
        <self-building-square-spinner
          v-else-if="spinnerType == 'self-building-square'"
          :animation-duration="spinnerOptions.duration"
          :size="spinnerOptions.size"
          :color="spinnerOptions.color"
        />
        <swapping-squares-spinner
          v-else-if="spinnerType == 'swapping-squares'"
          :animation-duration="spinnerOptions.duration"
          :size="spinnerOptions.size"
          :color="spinnerOptions.color"
        />
        <fulfilling-bouncing-circle-spinner
          v-else-if="spinnerType == 'fulfilling-bouncing-circle'"
          :animation-duration="spinnerOptions.duration"
          :size="spinnerOptions.size"
          :color="spinnerOptions.color"
        />
        <fingerprint-spinner
          v-else-if="spinnerType == 'fingerprint'"
          :animation-duration="spinnerOptions.duration"
          :size="spinnerOptions.size"
          :color="spinnerOptions.color"
        />
        <spring-spinner
          v-else-if="spinnerType == 'spring'"
          :animation-duration="spinnerOptions.duration"
          :size="spinnerOptions.size"
          :color="spinnerOptions.color"
        />
        <atom-spinner
          v-else-if="spinnerType == 'atom'"
          :animation-duration="spinnerOptions.duration"
          :size="spinnerOptions.size"
          :color="spinnerOptions.color"
        /> 
        <looping-rhombuses-spinner
          v-else-if="spinnerType == 'looping-rhombuses'"
          :animation-duration="spinnerOptions.duration"
          :size="spinnerOptions.size"
          :color="spinnerOptions.color"
        />
        <breeding-rhombus-spinner
          v-else-if="spinnerType == 'breeding-rhombus'"
          :animation-duration="spinnerOptions.duration"
          :size="spinnerOptions.size"
          :color="spinnerOptions.color"
        />
        </div>

        <div :class="smartMenuContainer" v-if="menuVisibility" >
          <div :class="textTitleClass">
            {{stopAfterTitleText}}
          </div>

          <div :class="textDescriptionClass">
            {{stopAfterDescriptionText}}
          </div>

          <div :class="textSecondClass">
               {{cnt}} {{stopAfterMeasureText}}
          </div>

          <div :class="smartMenuSubContainer">
            <template v-if="config && config.smartMenu && config.smartMenu.buttons && config.smartMenu.buttons.length > 0">
              <template v-for="(item,key) in config.smartMenu.buttons" :key="key">
                  <button v-if="item.type == 'custom'"  @click="item.action" :class="item && item.class ? item.class : smartMenuButton">{{item.label}}</button>
                  <button v-else  @click="defaultActions[item.type]" :class="item && item.class ? item.class : smartMenuButton">{{item.label}}</button>
              </template>
            </template>
            <template v-else>
              <button :class="smartMenuButton" @click="refreshPage">Page Reload</button>
              <button :class="smartMenuButton" @click="turnOff">Just Turn Off Spinner</button>
              <button :class="smartMenuButton" @click="cnt= 0">Hang on!</button>
            </template>
          </div>

        </div>
        </div>
        
  </div>
</template>
<script>
import {defineComponent} from "vue"
import Data from "./data"
import Methods from "./methods"
import Computed from "./computed"
import { FlowerSpinner,PixelSpinner,HollowDotsSpinner,IntersectingCirclesSpinner,OrbitSpinner,RadarSpinner, 
          ScalingSquaresSpinner, HalfCircleSpinner, TrinityRingsSpinner , FulfillingSquareSpinner , CirclesToRhombusesSpinner,
          SemipolarSpinner, SelfBuildingSquareSpinner, SwappingSquaresSpinner, FulfillingBouncingCircleSpinner,
          FingerprintSpinner, SpringSpinner ,AtomSpinner ,LoopingRhombusesSpinner, BreedingRhombusSpinner} from 'epic-spinners';

export default defineComponent({ 
  name:"Vue3SmartLoader",
  mixins:[Data,Methods,Computed],
  components:{
      FlowerSpinner,
      PixelSpinner,
      HollowDotsSpinner,
      IntersectingCirclesSpinner,
      OrbitSpinner,RadarSpinner, 
      ScalingSquaresSpinner, 
      HalfCircleSpinner, 
      TrinityRingsSpinner , 
      FulfillingSquareSpinner , 
      CirclesToRhombusesSpinner,
      SemipolarSpinner, 
      SelfBuildingSquareSpinner, 
      SwappingSquaresSpinner, 
      FulfillingBouncingCircleSpinner,
      FingerprintSpinner, 
      SpringSpinner ,
      AtomSpinner ,
      LoopingRhombusesSpinner, 
      BreedingRhombusSpinner
  },
  props:{
    type:String,
    options:Object,
    config:Object,
    destroy:Function
  },
  mounted(){
    this.reactivity()
  },
  unmounted(){
    this.cnt = 0
    clearInterval(this.spinCounter)
  }
  
})
</script>

<style lang="scss">
    @import url("https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900&display=swap");
    .spinner-container{
      position: fixed;
      top: 0;
      left: 0;
      background-color: rgba(255, 255, 255, .8);
      height: 100vh;
      width: 100vw;
      display: none;
      &.show{
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 999999999999999999;
      }
    }
    .smart-menu-default-title-text-class{
       font-family: 'Poppins','Sans Serif';
       font-size: 17px;
       opacity: .7;
       margin-top: 10px;
       text-align: center;
       color: #212529;
       font-weight: 600;
    }
    .smart-menu-default-description-text-class{
       font-family: 'Poppins','Sans Serif';
       font-size: 14px;
       opacity: .7;
       margin-top: 10px;
       text-align: center;
       color: #212529;
       font-weight: 500;
    }
    .smart-menu-default-second-text-class{
       font-family: 'Poppins','Sans Serif';
       font-size: 17px;
       text-align: center;
       opacity: .7;
       margin-top: 10px;
       color: #212529;
       font-weight: 600;
    }
    .smart-menu-default-container{
      display: block;
    }
    .smart-menu-default-sub-container{
      display: flex;
      justify-content: space-evenly;
      margin-top: 15px;
    }
    .smart-menu-default-button{
        display: inline-block;
        font-weight: 400;
        line-height: 1.5;
        color: #212529;
        text-align: center;
        text-decoration: none;
        vertical-align: middle;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
        margin-inline: 1px;
        background-color: transparent;
        border: 1px solid transparent;
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        border-radius: 0.25rem;
        transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        color: #fff;
        background-color: #212529;
        border-color: #212529;
    }
</style>