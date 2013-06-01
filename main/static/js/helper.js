//returns string with the first letter capitalized
//if there are multiple words, capitalize each individual word
function capitalizeWords(string) {
   return _.map(string.split(' '), function( word ) {
    return word[0].toUpperCase() + word.slice(1);
  }, this).join(' ');
}; //end capitalizeWord function
