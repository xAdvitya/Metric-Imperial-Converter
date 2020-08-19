/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */
const units = [
  "gal",
  "l",
  "mi",
  "km",
  "lbs",
  "kg",
  "GAL",
  "L",
  "MI",
  "KM",
  "LBS",
  "KG"
];

function ConvertHandler() {
  this.getNum = function(input) {
    var result;
    let length = input.length;
    var arr = input.split(/[A-Za-z]/);
    console.log(arr)
    result = arr[0];
    console.log("input is "+input);
    console.log("result is "+result);
    console.log(result.replace("/", "."))
    console.log(result.replace("/", ".").includes("/"))
    
    if (result.replace("/", ".").includes("/")) {
      console.log("entered here")
      return undefined;
    } else if (result.includes("/")) {
      result = result.split("/");
      var num1 = result[0];
      var num2 = result[1];
      num1 = parseFloat(num1, 0);
      num2 = parseFloat(num2, 0);
      result = Math.ceil(num1 / num2);
    } else {
      if (parseFloat(result, 0)) {
        result = parseFloat(result, 0);
      } else {
    console.log("def"+1);        
        return 1;
      }
    }
    console.log(result);
    return result;
  };

  this.getUnit = function(input) {
    var result;
    var arr = input.split(/[0-9]/);
    var unitVal = arr[arr.length - 1];
    
    if (units.includes(unitVal)) {
      result = unitVal.toLowerCase();
    } else {
      result = undefined;
    } 
    
    console.log(result);
    return result;
  };

  this.getReturnUnit = function(ele) {
    switch (ele) {
      case "gal": {
        return "l";
      }
      case "l": {
        return "gal";
      }
      case "mi": {
        return "km";
      }
      case "km": {
        return "mi";
      }
      case "lbs": {
        return "kg";
      }
      case "kg": {
        return "lbs";
      }
      default:{
        return undefined;
      }
    }
  };

  this.spellOutUnit = function(unit) {
  
    switch (unit) {
      case "gal": {
        return "gallon";
      }
      case "l": {
        return "liter";
      }
      case "mi": {
        return "mile";
      }
      case "km": {
        return "kilometer";
      }
      case "lbs": {
        return "pounds";
      }
      case "kg": {
        return "kilograms";
      }
      default :{
        return undefined;
      }
    }
  };

 this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
   
   if(initUnit == undefined || initNum == undefined){
     return undefined;
   }
    switch (initUnit.toLowerCase()) {
        
      case "gal": {
        console.log(initNum);
        initNum *= galToL;
        return Math.round((initNum*100000))/1e5;
      }
      case "l": {
        initNum /= galToL;
        return Math.round((initNum*100000))/1e5;
      }
      case "km":{ 
        initNum /= miToKm;
        return Math.round((initNum*100000))/1e5;
      }
      case "mi": {
        initNum *= miToKm;
        return Math.round((initNum*100000))/1e5;
      }
      case "lbs": {
        initNum *= lbsToKg;
        return Math.round((initNum*100000))/1e5;
      }
      case "kg": {
        initNum /= lbsToKg;
        return Math.round((initNum*100000))/1e5;
      }
      default :{
        return undefined;
      }
    }
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    if(initNum == undefined || initUnit == undefined){
      return undefined;
    }
    initUnit = this.spellOutUnit(initUnit.toLowerCase());
    returnUnit = this.spellOutUnit(returnUnit.toLowerCase());
    
    result = `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`; 
    console.log(result);
    return result;
  };
}

module.exports = ConvertHandler;
