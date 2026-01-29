public class wire {
    @auraenabled(cacheable=true)
    public static List<Account> getrecords(){
        List<Account> acclist= [select Id,Name,Phone,Rating from Account order by CreatedDate desc limit 5];
        return acclist;
        
        
    }
}