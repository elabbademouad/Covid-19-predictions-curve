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


/*

<tr>
<td>Thornton</td>
<td>@fat</td>
</tr>
<tr>

<td>the Bird</td>
<td>@twitter</td>
</tr>
*/