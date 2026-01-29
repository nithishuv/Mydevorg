/**
 * ――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
 * Class Name      : searchText
 * Author          : <YourName>
 * Created Date    : Jan 27, 2026
 * Last Modified By: <YourName>
 * Last Modified On: Jan 27, 2026
 * Description     : This class implements for......
 *  
 * Change History  :
 *  Date          │   Author     │   Change
 * ――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
 *  Jan 27, 2026  │ <YourName>   │ Initial version
 * ――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
 */

public class searchText {

	@AuraEnabled(cacheable=true)
	public static List<Account> getAccounts(String text) {
		try{
			if(text == ' ' || String.isEmpty(text)){
				return [select id,Name from Account order by CreatedDate DESC LIMIT 5];
			}
			else{
				text= '%'+text+'%';
				return [select id,Name from Account where Name LIKE :text];
				
			}
		}
		catch(Exception e){
			throw new AurahandledException(e.getMessage());
		}
			
		
		
	}

	@AuraEnabled(cacheable=true)
	public static list<Contact> getacccon(String accId){
		return [select id,Name from Contact where AccountId =:accId];
	}
	

}