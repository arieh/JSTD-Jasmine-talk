describe("Alert",function(){

    var alrt;

    it ("Should create an alert", function(){
        var a = new Alert();

        expect(a instanceof Alert).toEqual(true, "a should be an alert");
        expect(a.element).toBeTruthy(true, "a should have a root element");
        expect(a.element.classList.contains('Alert')).toEqual(true, "a should have a class named 'Alert'");
    });
    

});
