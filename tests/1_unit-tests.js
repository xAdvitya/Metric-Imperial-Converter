/*
 *
 *
 *       FILL IN EACH UNIT TEST BELOW COMPLETELY
 *       -----[Keep the tests in the same order!]----
 *       (if additional are added, keep them at the very end!)
 */

var chai = require("chai");
var assert = chai.assert;
var ConvertHandler = require("../controllers/convertHandler.js");

var convertHandler = new ConvertHandler();

suite("Unit Tests", function() {
  suite("Function convertHandler.getNum(input)", function() {
    test("Whole number input", function(done) {
      var input = "32k";
      assert.equal(convertHandler.getNum(input), 32);
      done();
    });

    test("Decimal Input", function(done) {
      var input = "33.4k";
      assert.equal(convertHandler.getNum(input), 33.4);
      done();
    });

    test("Fractional Input", function(done) {
      var input = "33/11k";
      assert.equal(convertHandler.getNum(input), 3);
      done();
    });

    test("Fractional Input w/ Decimal", function(done) {
      var input = "33.4/11.4k";
      assert.equal(convertHandler.getNum(input), 3);
      done();
    });

    test("Invalid Input (double fraction)", function(done) {
      var input = "33.4/11.4/55kg";
      assert.equal(convertHandler.getNum(input), undefined);
      done();
    });

    test("No Numerical Input", function(done) {
      var input = "kk";
      assert.equal(convertHandler.getNum(input), 1);
      done();
    });
  });

  suite("Function convertHandler.getUnit(input)", function() {
    test("For Each Valid Unit Inputs", function(done) {
      
      var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach(function(value) {
        assert.equal(convertHandler.getUnit(value), value.toLowerCase());
      });
      done();
    });

    test("Unknown Unit Input", function(done) {
      var input = '32g'
      assert.equal(convertHandler.getUnit(input), undefined);
      done();
    });
  });

  suite("Function convertHandler.getReturnUnit(initUnit)", function() {
    test("For Each Valid Unit Inputs", function(done) {
      var input = ["gal", "l", "mi", "km", "lbs", "kg"];
      var expect = ["l", "gal", "km", "mi", "kg", "lbs"];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
  });
  
  
  suite("Function convertHandler.spellOutUnit(unit)", function() {
    test("For Each Valid Unit Inputs", function(done) {
      var input = ["gal", "l", "mi", "km", "lbs", "kg"];
      var expect = ["gallon", "liter", "mile", "kilometer", "pounds", "kilograms"];
      input.forEach(function(value,i) {
        assert.equal(convertHandler.spellOutUnit(value), expect[i]);
      });
      done();
    });
  });  
  

  suite("Function convertHandler.convert(num, unit)", function() {
    
    test("Gal to L", function(done) {
      var input = [5, "gal"];
      var expected = 18.9271;
      //console.log(input[0]);
      assert.approximately(convertHandler.convert(input[0], input[1]),expected,0.5); //0.1 tolerance
      done();
    });

    test("L to Gal", function(done) {
      var input = [18.9271, "l"];
      var expected = 5;
       assert.approximately(convertHandler.convert(input[0], input[1]),expected,0.1); //0.1 tolerance
      done();
    });

    test("Mi to Km", function(done) {
      var input = [1, "mi"];
      var expected = 1.60934;
       assert.approximately(convertHandler.convert(input[0], input[1]),expected,0.5); //0.1 tolerance
      done();
    });

    test("Km to Mi", function(done) {
      var input = [1.60934, "km"];
      var expected = 1;
       assert.approximately(convertHandler.convert(input[0], input[1]),expected,0.5); //0.1 tolerance
      done();
    });

    test("Lbs to Kg", function(done) {
      var input = [2.20462, "lbs"];
      var expected = 1;
       assert.approximately(convertHandler.convert(input[0], input[1]),expected,0.5); //0.1 tolerance 
      done();
    });

    test("Kg to Lbs", function(done) {
      var input = [1, "kg"];
      var expected = 2.20462;
      assert.approximately(convertHandler.convert(input[0], input[1]),expected,0.5); //0.1 tolerance 
      done();
    });
  });
});
