public class wiredata {
    @auraenabled(cacheable=true)
    public static List<contact> passData(string param){
        List<contact> con =  [select id,Name from contact where AccountId =:param];
        return con;
    }
    
     @auraenabled
    public static void impercall(String accName,String phone ){
        Account acc = new Account();
        acc.Name = accName;
        acc.Phone = phone;
        
        insert acc;
    }
    
    @auraenabled(cacheable=true)
    public static List<Account> getAccount(){
        return [select id,Name,Phone,Description from Account LIMIT 10];
    }

}