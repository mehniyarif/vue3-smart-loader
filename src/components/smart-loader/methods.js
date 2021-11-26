export default {
    methods: {
        reactivity () {
          this.cnt = 0
          this.show = true
          let fndIndex = this.kebabNames.findIndex(v => v == this.spinnerType)
          fndIndex = fndIndex ? fndIndex : 0
          let defaultOptions = {
                duration: this.options && this.options.duration ? this.options.duration : this.defaultOptions[this.camelNames[fndIndex]].duration,
                size: this.options && this.options.size ? this.options.size : this.defaultOptions[this.camelNames[fndIndex]].size,
                color:this.options && this.options.color ? this.options.color : this.defaultOptions[this.camelNames[fndIndex]].color,
                num: this.options && this.options.num ? this.options.num : this.defaultOptions[this.camelNames[fndIndex]].num,
                stopAfter: this.options && this.options.stopAfter ? this.options.stopAfter : 20,
                stopAfterText: this.options && this.options.stopAfterText ? this.options.stopAfterText : "This process will take a little long",
          }
          this.spinnerOptions = defaultOptions
    
          if (this.spinnerOptions.visibility) {
            setTimeout(() => { this.close() }, this.spinnerOptions.visibility)
          }
        },
      close(visibility){
          this.cnt = 0
    
           if(!visibility){
              this.destroy()
           }
           
          setTimeout(() => {
              this.destroy()
          }, visibility);
           
        },
        refreshPage(){
            window.location.reload()
        },
        turnOff(){
          this.destroy()
        }
      }
}