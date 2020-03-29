var activeCases = [];
var predections = [];
var beds = [];
//calculate active cases
for (let i = 0; i < cases.length; i++) {
    activeCases.push(cases[i]-deaths[i]-recoverd[i]);   
}
//calculate available beds
for (let i = 0; i < activeCases.length; i++) {
    beds.push(3000-activeCases[i]);   
}

//calculate predictions cases
var regresstionCoef=calculateRegressionCoef(cases);


for (let i = 0; i < cases.length+5; i++) {
    predections.push(Math.round(regresstionCoef.a+Math.pow(regresstionCoef.b,i)));   
}