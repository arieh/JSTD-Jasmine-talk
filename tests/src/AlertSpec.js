describe("Alert",function(){

    function hasClass(el,name){
        var arr;

        if (el.classList) return el.classList.contains(name);

        arr = el.className.split(' ');
        return arr.indexOf(name) > -1;
    }

    var alrt;

    it ("Should create an alert", function(){
        var a = new Alert();

        expect(a instanceof Alert).toEqual(true, "a should be an alert");
        expect(a.element).toBeTruthy(true, "a should have a root element");
        expect(hasClass(a.element,'Alert')).toEqual(true, "a should have a class named 'Alert'");
    });
    
    it ("Should open when calling show method", function(){
        var a = new Alert(), flag;

        expect(hasClass(a.element,'close')).toEqual(true, "element should be hidden by default");
        expect(hasClass(a.element,'open')).toEqual(false, "element should not contain an open class");

        a.addEvent('show',function(){
            flag = true;

            expect(hasClass(a.element,'close')).toEqual(false, "element should not have a close class when opened");
            expect(hasClass(a.element,'open')).toEqual(true, "element should contain an open class when opened");
        });
        
        a.show();                       

        waitsFor(function(){ return flag; }, "animation should finish", 1500);
        
    });
    

});
