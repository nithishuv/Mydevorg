public class wireLwc {
    @AuraEnabled(cacheable=true)
    public static list<Account> wireLwcMethod() {
        list<Account> accli= [select id,Name,Phone,Rating from Account order by CreatedDate desc LIMIT 6];
        return accli;
    }
}