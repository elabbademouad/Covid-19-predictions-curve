var activeCases = [];
var predections = [];
var beds = [];
//calculate active cases
for (let i = 0; i < cases.length; i++) {
    activeCases.push(cases[i] - deaths[i] - recoverd[i]);
}
//calculate available beds
for (let i = 0; i < activeCases.length; i++) {
    beds.push(3000 - activeCases[i]);
}

//calculate predictions cases
var regresstionCoef = calculateRegressionCoef(cases);


for (let i = 0; i < cases.length + 5; i++) {
    predections.push(Math.round(regresstionCoef.a + Math.pow(regresstionCoef.b, i)));
}

// geographical distribution
var innerHtml="";
for (let i = 0; i < geographiqueDistribution.length; i++) {
    const element = geographiqueDistribution[i];
    innerHtml+="<tr><td>"+element.number+"</td><td>"+element.region+"</td></tr>";
}
var tableBody=document.getElementById("dist-geo");
tableBody.innerHTML=innerHtml;

//latest statistics
document.getElementById("cases").innerText=cases[cases.length-1];
document.getElementById("recovered").innerText=recoverd[recoverd.length-1];
document.getElementById("deaths").innerText=deaths[deaths.length-1];
document.getElementById("tested-cases").innerText=testedCases;