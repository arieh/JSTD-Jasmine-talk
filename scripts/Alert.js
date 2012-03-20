!function(){
    this.Alert = function Alert(){
        this.generate();    
    };

    Alert.prototype = {
        constructor : Alert,
        generate : function(){
            this.element = document.createElement('div');
            this.element.className = 'Alert';
        }    
    };
}.apply(this,[]);

