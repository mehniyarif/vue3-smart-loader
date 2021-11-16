<template>
  <div class="pg-spinner-container" :class="{'show':show}">
    <div class="block" >
      <div class="flex justify-center">
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

        <div class="block" v-if="cnt >= this.spinnerOptions.stopAfter" >
          <div class="text-center stop-after-text">
            {{spinnerOptions.stopAfterText || "This process will take a little long"}}
          </div>

          <div class="text-center stop-after-text">
               {{cnt}} {{cnt > 1 ? 'seconds' : 'second'}}
          </div>

          <div class="flex justify-center mt-10">
            <button @click="refreshPage">Page Reload</button>
            <button class="mr-2" @click="turnOff">Just Turn Off Spinner</button>
            <button @click="cnt= 0">Hang on!</button>
          </div>

        </div>
        </div>
        
  </div>
</template>
<script>
import {defineComponent} from "vue"
import { FlowerSpinner,PixelSpinner,HollowDotsSpinner,IntersectingCirclesSpinner,OrbitSpinner,RadarSpinner, 
          ScalingSquaresSpinner, HalfCircleSpinner, TrinityRingsSpinner , FulfillingSquareSpinner , CirclesToRhombusesSpinner,
          SemipolarSpinner, SelfBuildingSquareSpinner, SwappingSquaresSpinner, FulfillingBouncingCircleSpinner,
          FingerprintSpinner, SpringSpinner ,AtomSpinner ,LoopingRhombusesSpinner, BreedingRhombusSpinner} from 'epic-spinners';

export default defineComponent({ 
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
  unmounted(){
    this.cnt = 0
    clearInterval(this.spinCounter)
  },
  data () {
    return {
      show:false,
      spinnerType:null,
      cnt:0,
      spinCounter:setInterval(() => {
        this.cnt +=1
      }, 1000),
      defaultOptions:{
          flower:{
            duration:2500,
            size:70,
            color:"var(--pg-fourth-color)"
          },
          pixel:{
            duration:2000,
            size:70,
            color:"var(--pg-fourth-color)"
          },
          hollowDots:{
            duration:1000,
            size:15,
            num:3,
            color:"var(--pg-fourth-color)"
          },
          intersectingCircles:{
            duration:1200,
            size:70,
            color:"var(--pg-fourth-color)"
          },
          orbit:{
            duration:1200,
            size:55,
            color:"var(--pg-fourth-color)"
          },
          radar:{
            duration:2000,
            size:60,
            color:"var(--pg-fourth-color)"
          },
          scalingSquares:{
            duration:1250,
            size:65,
            color:"var(--pg-fourth-color)"
          },
          halfCircle:{
            duration:1000,
            size:60,
            color:"var(--pg-fourth-color)"
          } ,
          trinityRings:{
            duration:1500,
            size:66,
            color:"var(--pg-fourth-color)"
          } ,
          fulfillingSquare:{
            duration:4000,
            size:50,
            color:"var(--pg-fourth-color)"
          } ,
          circlesToRhombuses:{
            duration:1200,
            size:15,
            num:3,
            color:"var(--pg-fourth-color)"
          },
          semipolar:{
            duration:2000,
            size:65,
            color:"var(--pg-fourth-color)"
          } ,
          selfBuildingSquare:{
            duration:6000,
            size:40,
            color:"var(--pg-fourth-color)"
          } ,
          swappingSquares:{
            duration:1000,
            size:65,
            color:"var(--pg-fourth-color)"
          } ,
          fulfillingBouncingCircle:{
            duration:4000,
            size:60,
            color:"var(--pg-fourth-color)"
          },
          fingerprint:{
            duration:1500,
            size:64,
            color:"var(--pg-fourth-color)"
          } ,
          spring:{
            duration:3000,
            size:60,
            color:"var(--pg-fourth-color)"
          },
          atom:{
            duration:1000,
            size:60,
            color:"var(--pg-fourth-color)"
          },
          loopingRhombuses:{
            duration:2500,
            size:15,
            color:"var(--pg-fourth-color)"
          } ,
          breedingRhombus:{
            duration:2000,
            size:65,
            color:"var(--pg-fourth-color)"
          },
      },
      spinnerOptions:{
            duration:2500,
            size:70,
            stopAfter:20,
            stopAfterText:"This process will take a little long",
            color:"var(--pg-fourth-color)",
            num:null
      },
      kebabNames:["flower","pixel","hollow-dots","intersecting-circles","orbit","radar","scaling-squares",
                    "half-circle","trinity-rings","fulfilling-square","circles-to-rhombuses","semipolar",
                    "self-building-square","swapping-squares","fulfilling-bouncing-circle","fingerprint",
                    "spring","atom","looping-rhombuses","breeding-rhombus-spinner"],
      camelNames:["flower","pixel","hollowDots","intersectingCircles","orbit","radar","scalingSquares","halfCircle",
                        "trinityRings","fulfillingSquare","circlesToRhombuses","semipolar","selfBuildingSquare","swappingSquares",
                        "fulfillingBouncingCircle","fingerprint","spring","atom","loopingRhombuses","breedingRhombus"],
      options: {
        duration: 500
      }
    }
  },
  methods: {
    reactivity (type, options) {
      this.cnt = 0
      this.spinnerType = type
      this.show = true

      let fndIndex = this.kebabNames.findIndex(v => v == this.spinnerType)
      fndIndex = fndIndex ? fndIndex : 0
      let defaultOptions = {
            duration: options && options.duration ? options.duration : this.defaultOptions[this.camelNames[fndIndex]].duration,
            size: options && options.size ? options.size : this.defaultOptions[this.camelNames[fndIndex]].size,
            color:options && options.color ? options.color : this.defaultOptions[this.camelNames[fndIndex]].color,
            num: options && options.num ? options.num : this.defaultOptions[this.camelNames[fndIndex]].num,
            stopAfter: options && options.stopAfter ? options.stopAfter : 20,
            stopAfterText: options && options.stopAfterText ? options.stopAfterText : "This process will take a little long",
      }
      this.spinnerOptions = defaultOptions

      if (this.spinnerOptions.visibility) {
        setTimeout(() => { this.close() }, this.spinnerOptions.visibility)
      }
    },
  close(visibility){
      this.cnt = 0

       if(!visibility){
         this.show = false
         return
       }
       
      setTimeout(() => {
          this.show = false
      }, visibility);
       
    },
    refreshPage(){
        window.location.reload()
    },
    turnOff(){
      this.$spinner.close()
    }
  }
})
</script>
<style lang="scss">
    @import url("https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900&display=swap");
    .pg-spinner-container{
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
    .stop-after-text{
       font-family: 'Poppins','Sans Serif';
       font-size: 17px;
       opacity: .7;
       margin-top: 10px;
       color: var(--pg-fourth-color);
       font-weight: 600;
    }

    .flex{
      display: flex;
    }

    .justify-center{
      justify-content: center;
    }
</style>