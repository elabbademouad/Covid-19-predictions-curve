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
var casesCount=cases[cases.length-1];
var recoverdCount=recoverd[recoverd.length-1];
var deathsCount=deaths[deaths.length-1];

var recoverdPercentage=recoverdCount*100/casesCount;
var deathsPercentage=deathsCount*100/casesCount;
document.getElementById("cases").innerText=casesCount;
document.getElementById("recovered").innerText=recoverdCount;
document.getElementById("deaths").innerText=deathsCount;
document.getElementById("tested-cases").innerText=testedCases;

document.getElementById("recovered-per").innerText=recoverdPercentage.toFixed(2)+"% نسبة التعافي";
document.getElementById("deaths-per").innerText=deathsPercentage.toFixed(2)+"% نسبة الوفيات";