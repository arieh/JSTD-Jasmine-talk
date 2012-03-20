!function(){
    this.Alert = function Alert(){
        Events.call(this);

        this.generate();    
    };

    Alert.prototype = {
        constructor : Alert,
        generate : function(){
            this.element = document.createElement('div');
            this.element.className = 'Alert close';
        },
        show : function(){
            this.element.className = 'Alert open';    
            this.fireEvent('show');
        }
    };
}.apply(this,[]);

