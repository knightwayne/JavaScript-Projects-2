
var calculator = {
    
    sum: 0 , 
    add: function(value){
        this.sum+=value;
    } , 
    equals: function(value){
        return this.sum;
    } , 
    clear: function(value){
        this.sum = 0;
    } 
}