 // em valores booleanos, teremos 5 valores para representar falso e que irão apresentar resultado falso.

 // eles são: valores: 0, '', undefined, null, NaN

 console.log(Boolean(0));
 console.log(Boolean(undefined));
 console.log(Boolean(null));
 console.log(Boolean(''));
 console.log(Boolean({})); //objetos serão verdadeiros
 console.log(Boolean('Felipe')); //strings serão verdadeiros, pois qualquer valor além dos 5 valores falsos, serão verdadeiros
 
 
 let height = 0;
 if (height == 0){
     console.log("Height está definido!");
 }else{
     console.log("Height não está definido");
 }