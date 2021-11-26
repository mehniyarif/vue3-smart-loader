export default {
    computed: {
        menuVisibility(){
            let visibility = this.config?.smartMenu?.visibility
            let stopAfter = this.config?.smartMenu?.stopAfter || this.spinnerOptions.stopAfter || 20
            if(visibility && this.cnt >= stopAfter){
                return true
            }
            return false
        },
        stopAfterTitleText(){
            let stopAfterTitleText = this.config?.smartMenu?.texts?.title?.text
            return stopAfterTitleText ? stopAfterTitleText : this.spinnerOptions.stopAfterTitleText || "This process will take a little long"
        },
        stopAfterDescriptionText(){
            let stopAfterDescriptionText = this.config?.smartMenu?.texts?.description?.text
            return stopAfterDescriptionText ? stopAfterDescriptionText : this.spinnerOptions.stopAfterDescriptionText || null
        },
        stopAfterMeasureText(){
            let stopAfterMeasureText = this.config?.smartMenu?.texts?.second.text
            return stopAfterMeasureText ? stopAfterMeasureText : this.spinnerOptions.stopAfterMeasureText || "Second"
        },
        textTitleClass(){
            let textClass = this.config?.smartMenu?.texts?.title?.class
            return textClass ? textClass : "smart-menu-default-title-text-class"
        },
        textDescriptionClass(){
            let textDescriptionClass = this.config?.smartMenu?.texts?.description?.class
            return textDescriptionClass ? textDescriptionClass : "smart-menu-default-description-text-class"
        },
        textSecondClass(){
            let textSecondClass = this.config?.smartMenu?.texts?.second?.class
            return textSecondClass ? textSecondClass : "smart-menu-default-second-text-class"
        }
    }
}