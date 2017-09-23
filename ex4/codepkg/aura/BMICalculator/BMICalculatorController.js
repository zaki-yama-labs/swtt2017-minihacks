({
	handleClick: function(cmp, event, helper) {
		var height = cmp.get('v.height');
		var weight = cmp.get('v.weight');
        var bmi = weight / ( 0.01 * height * 0.01 * height);
        cmp.set('v.bmi', bmi);
	}
})