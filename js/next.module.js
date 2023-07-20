/// <reference path="../typings/globals/jquery/index.d.ts" />

// export class Next{

// constructor(data){
// this.data=data;

//  this.is_dayN=document.getElementById("is_dayN")
//  this.iconN=document.getElementById("iconN");
//  this.degreeNC=document.getElementById("degreeNC");
//  this.degreeNS=document.getElementById("degreeNS");
//  this.textN=document.getElementById("textN");
//  this.wether2();
//  this.is_dayNN=document.getElementById("is_dayNN");
//  this.iconNN=document.getElementById("iconNN");
//  this.degreeNCN=document.getElementById("degreeNCN");
//  this.degreeNSN=document.getElementById("degreeNSN");
//  this.textNN=document.getElementById("textNN");
//  this.wether3();
// }

//  wether2(){
//     this.iconN.setAttribute("src",this.data.forecast.forecastday[1].day.condition.icon)
//     this.degreeNC.innerHTML=this.data.forecast.forecastday[1].day.maxtemp_c
//     this.degreeNS.innerHTML=this.data.forecast.forecastday[1].day.mintemp_c
//     this.textN.innerHTML=this.data.forecast.forecastday[1].day.condition.text

//     const weekdaay = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
//     this.is_dayN.innerHTML= weekdaay[ new Date (this.data.forecast.forecastday[1].date).getDay()]

// }
// wether3(){
//     console.log(this.data)
//      this.iconNN.setAttribute("src",this.data.forecast.forecastday[2].day.condition.icon)
//      this.degreeNCN.innerHTML=this.data.forecast.forecastday[2].day.maxtemp_c
//      this.degreeNSN.innerHTML=this.data.forecast.forecastday[2].day.mintemp_c
//      this.textNN.innerHTML=this.data.forecast.forecastday[2].day.condition.text
 
//      const weekdaay = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
//      this.is_dayNN.innerHTML= weekdaay[ new Date (this.data.forecast.forecastday[2].date).getDay()]
 
//  }

// }