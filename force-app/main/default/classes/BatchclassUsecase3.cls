global class BatchclassUsecase3 implements Database.Batchable<Sobject>{
    public Database.querylocator start(Database.BatchableContext bc) {
        return Database.getQueryLocator([select id,AnnualRevenue,Active__c from Account where AnnualRevenue >=1000]);
    }
    public void execute(Database.BatchableContext bc, list<Account> accscope){
        list<Account> liacc = new list<Account>();
        for(Account acc:accscope){
            acc.Active__c = 'No';
            liacc.add(acc);   
        }
        update liacc;
    }
    public void finish(Database.batchableContext bc){
        system.debug('JobId'+ bc.getjobid());
    }


}