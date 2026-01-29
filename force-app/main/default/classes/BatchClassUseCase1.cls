global class BatchClassUseCase1 implements Database.batchable<sobject>, Schedulable{
    public Database.querylocator start(Database.BatchableContext bc){
        return Database.getQueryLocator([select id,Status from lead where Status = 'Open - Not Contacted' and LastModifiedDate <= LAST_N_DAYS:90]);
    }
    public void execute(Database.BatchableContext bc, list<Lead> lile){
        
        for(Lead l:lile){
            l.Status = 'Closed - Not Converted';
            l.Description = 'Leads that have not been modified in the last 90 days and update their status to Closed - Not Converted';
            update l;
        }
        
    }
    public void finish(Database.BatchableContext bc){
        
    }
    public void execute(SchedulableContext sc){
        Database.executebatch(new BatchClassUseCase1());
    }
}