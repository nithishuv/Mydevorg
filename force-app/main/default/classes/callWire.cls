public with sharing class callWire {
    @AuraEnabled(cacheable=true)
    public static list<Account> callWireMethod() {
        list<Account> acc = [select id,Name,Phone,Rating from Account order by CreatedDate asc limit 5];
        return acc;
    }
}