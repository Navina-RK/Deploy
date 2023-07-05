({
    loadAccount : function(component) {
        var action = component.get("c.loadAccount");
    
        action.setParams({
            accountId : component.get("v.recordId")
        });
    
        action.setCallback(this, function(a) {
            if (a.getState() === "SUCCESS") {
                component.set("v.account", a.getReturnValue());
            } else if (a.getState() === "ERROR") {
                $A.log("Errors", a.getError());
            }
        });
    
        $A.enqueueAction(action);
    }
})