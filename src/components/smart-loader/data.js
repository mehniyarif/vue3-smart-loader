export default {
    data () {
    return {
      show:false,
      spinnerType:this.type,
      cnt:0,
      spinCounter:setInterval(() => {
        this.cnt +=1
      }, 1000),
      defaultActions:{
        "page-reload": this.refreshPage,
        "turn-off": this.turnOff,
        "hang-on": ()=>{this.cnt= 0}
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
}