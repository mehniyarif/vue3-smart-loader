# vue3-smart-loader

### For Preview Spinners
=> [Epic Spinners](https://epic-spinners.epicmax.co/) Package
## Usages

#### Import in main.js
`import SmartLoader from "vue3-smart-loader"`
#### Include with use method
`createApp(App)` </br>
&nbsp; &nbsp;`.use(SmartLoader)`</br>
&nbsp; &nbsp;`.mount("#app");`</br>

#### And Use With this.$spinner

* this.$spinner.flower()
* this.$spinner.pixel()
* this.$spinner.hollowDots()
* this.$spinner.intersectingCircles()
* this.$spinner.orbit()
* this.$spinner.radar()
* this.$spinner.scalingSquares()
* this.$spinner.halfCircle()
* this.$spinner.trinityRings()
* this.$spinner.fulfillingSquare()
* this.$spinner.circlesToRhombuses()
* this.$spinner.semipolar()
* this.$spinner.selfBuildingSquare()
* this.$spinner.swappingSquares()
* this.$spinner.fulfillingBouncingCircle()
* this.$spinner.fingerprint()
* this.$spinner.spring()
* this.$spinner.atom()
* this.$spinner.loopingRhombuses()
* this.$spinner.breedingRhombus()


| Parameter Name |   Type  |                                                                Description                                                                |
|:--------------:|:-------:|:-----------------------------------------------------------------------------------------------------------------------------------------:|
|    duration    | Integer | is the speed of the animation, all spinners have their own default speed defined. If desired, this parameter can be changed by giving it. |
|      size      | Integer |    is the size of the icon. All spinners have their own default sizes defined. If desired, this parameter can be changed by giving it.    |
|      color     |  String |   is the color of the icon. All spinners have their own default colors defined. If desired, this parameter can be changed by giving it.   |
|       num      | Integer |                                          number of pieces for circlesToRhombulus and hollowDots                                           |
|    stopAfter   | Integer |                     Indicates how many seconds after the spinner will timeout and the warning menu will be displayed.                     |
|  stopAfterText |  String |                                      We can change the text in the warning menu with this parameter.                                      |
 
Parameters
this.$spinner.flower(

        {

            duration:1000, 
            size:70, 
            color:”$f0f0f0”, 
            num:3, 
            stopAfter:3000, 
            stopAfterText:”This Process Too Long”

        }

)
## Close Spinner
* this.$spinner.close() 
#### Close Spinner With delay parameter
* this.$spinner.close(2000)