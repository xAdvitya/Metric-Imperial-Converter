/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
        if(initNum == undefined){
      res.json({initNum:initNum,initUnit:undefined,returnNum:undefined,returnUnit:undefined,toString:undefined});
    }
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
    
    console.log("////////////");
    
    console.log(initNum);
    console.log(initUnit);
    console.log(returnNum);
    console.log(returnUnit);
    console.log(toString);
    
    console.log("////////////");
    
    
    res.json({initNum:initNum,initUnit:initUnit,returnNum:returnNum,returnUnit:returnUnit,toString:toString});
    });
    
};