({
    doInit : function(component, event, helper) {
        alert("Hello from Parent doInit");
        incrementCounter(component, event, helper);
    },
    incrementCounter : function(component, event, helper) {
        alert("Hello from parent increment counter method");
        component.set("v.counter", 120);
    }
})
