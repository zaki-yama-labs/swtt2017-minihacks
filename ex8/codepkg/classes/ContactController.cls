public with sharing class ContactController {

	@AuraEnabled
	public static List<Contact> searchByName(String accountId, String name) {
		System.debug(LoggingLevel.DEBUG, 'Search by name: ' + accountId + ', ' + name);
		if (String.isBlank(name)) {
			return [SELECT Name FROM Contact WHERE AccountId = :accountId ORDER BY CreatedDate DESC];
		} else {
			String query = '%' + name + '%';
			return [SELECT Name FROM Contact WHERE AccountId = :accountId AND Name LIKE :query ORDER BY CreatedDate DESC];
		}
	}

}