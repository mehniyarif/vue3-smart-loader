# vue3-smart-loader


## ***Importantly Note***
*This is a newly developed package. So the stable version is not available for now.*
### For Preview Spinners
=> [Epic Spinners](https://epic-spinners.epicmax.co/) Package
## **Usages**

#### Import in main.js
`import SmartLoader from "vue3-smart-loader"`
<br/> and <br/>
`require('vue3-smart-loader/dist/main.css')`
#### Include with use method
`createApp(App).use(SmartLoader).mount("#app");`</br>

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

</br>
</br>

### **Parameters**
</br>

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
            color:”#f0f0f0”, 
            num:3, 
            stopAfter:30, 
            stopAfterText:”This Process Too Long”

        }

)
### **Customize Smart Menu**
</br>

#### You should be add main.js
`

Object.assign(SmartLoader, {

        config: {

            ui:"bootstrap5",

            smartMenu: {
                visibility:true,
                stopAfter:3,

                texts:{
                    title:{
                        text:"Galatasaray",
                        class:"h2 text-primary text-center"
                    },
                    description:{
                        text:"bu bir takımdır",
                        class:"text-center h6"
                    },
                    second:{
                        text:"Saniye",
                        class:"text-center"
                    }
                },

                buttons:[
                    
                    {
                        label: "Just Turn Off Spinner",
                        class: "btn btn-dark m-2",
                        type: "turn-off",
                    },
                    {
                        label: "Page Reload",
                        class: "btn btn-secondary",
                        type: "page-reload",
                    },
                    
                    {
                        label: "Hang on!",
                        class: "btn btn-info",
                        type: "hang-on",
                        action: ""
                    }
                ] 
            }
        }
})
`

## Close Spinner
* this.$spinner.close() 
#### Close Spinner With delay parameter
* this.$spinner.close(2000)