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
            var $this = this;

            animate.fadeIn(this.element, function(){
                $this.element.className = 'Alert open';    
                $this.fireEvent('show'); 
            },1000);
        }
    };
}.apply(this,[]);

