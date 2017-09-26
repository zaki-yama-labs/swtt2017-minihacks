({
  doInit: function(cmp, event, helper) {
    console.log('recordId:', cmp.get('v.recordId'));
    var action = cmp.get('c.searchByName');
    action.setParams({
      accountId: cmp.get('v.recordId'),
      name: null
    });
    action.setCallback(this, function(a) {
      cmp.set('v.contacts', a.getReturnValue());
    });
    $A.enqueueAction(action);
  },

  search: function(cmp, event, helper) {
    var searchKey = event.getParam('searchKey');
    console.log('searchKey:', searchKey);
    var action = cmp.get("c.searchByName");
    action.setParams({
      accountId: cmp.get('v.recordId'),
      name: searchKey
    });
    action.setCallback(this, function(a) {
      cmp.set('v.contacts', a.getReturnValue());
    });
    $A.enqueueAction(action);
  }
})
