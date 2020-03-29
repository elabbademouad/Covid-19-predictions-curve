function calculateRegressionCoef(cases) { 
    var X=[];
    for (let i = 0; i < cases.length; i++) {
        X.push(i);
    }
    var Y=cases.map((m)=>Math.log(m));


    var X2=X.map(e=>Math.pow(e,2))
    var Y2=Y.map(e=>Math.pow(e,2));
    var XY=[];
    for (let i = 0; i < Y.length; i++) {
        const y = Y[i];
        XY.push(y*X[i]);      
    }
    var sumX=X.reduce((v1,v2)=>v1+v2);
    var sumY=Y.reduce((v1,v2)=>v1+v2);
    var sumXY=XY.reduce((v1,v2)=>v1+v2);
    var sumX2=X2.reduce((v1,v2)=>v1+v2);
    var sumY2=Y2.reduce((v1,v2)=>v1+v2);
    var N=Y.length;

    var a=Math.exp((sumY*sumX2-sumX*sumXY)/(N*sumX2-Math.pow(sumX,2)));
    var b=Math.exp((N*sumXY-sumX*sumY)/(N*sumX2-Math.pow(sumX,2)));
    return  {a:a,b:b};
}