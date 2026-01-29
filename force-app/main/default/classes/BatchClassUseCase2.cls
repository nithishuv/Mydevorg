global class BatchClassUseCase2 implements Database.Batchable<Sobject>{
    public Database.QueryLocator Start(Database.BatchableContext bc){
        return Database.getquerylocator([select id, AnnualRevenue,Active__c from Account where AnnualRevenue >=100000]);
    }
    public void execute(Database.BatchableContext bc,List<Account> scope){
        for(Account acc:scope){
            acc.Active__c = 'Yes';
            update acc;
        }
        
    }
    public void Finish(Database.BatchableContext bc){
        system.debug('BatchClassUseCase2');
    }
}