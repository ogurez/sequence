module.exports = function longestConsecutiveLength(array) {
    let hash={};
    
    for(let i = 0; i<array.length; i++){
        hash[array[i]]=true;
    }
  
    let current=0;
    let sequence=0;
    
    for(let i = 0; i<array.length; i++){
        if(!hash[array[i]-1]){
          current = array[i];
          while(hash[current]){
              current++;
          }
          sequence=Math.max(sequence,current-array[i]);
        }
    }
    return sequence;
  
  }