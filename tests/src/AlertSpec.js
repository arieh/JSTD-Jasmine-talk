describe("Alert",function(){

    var alrt;

    it ("Should create an alert", function(){
        var a = new Alert();

        expect(a instanceof Alert).toEqual(true, "a should be an alert");
        expect(a.element).toBeTruthy(true, "a should have a root element");
        expect(a.element.classList.contains('Alert')).toEqual(true, "a should have a class named 'Alert'");
    });
    
    it ("Should open when calling show method", function(){
        var a = new Alert(), flag;

        expect(a.element.classList.contains('close')).toEqual(true, "element should be hidden by default");
        expect(a.element.classList.contains('open')).toEqual(false, "element should not contain an open class");

        a.addEvent('show',function(){
            flag = true;

            expect(a.element.classList.contains('close')).toEqual(false, "element should not have a close class when opened");
            expect(a.element.classList.contains('open')).toEqual(true, "element should contain an open class when opened");
        });
        
        a.show();                       

        waitsFor(function(){ return flag; }, "animation should finish", 1500);
        
    });
    

});
