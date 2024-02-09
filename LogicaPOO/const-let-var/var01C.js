function testVar() {
    var var01 = "Var: 01";
    {
        console.log("01A." + var01);
        var var01 = "Var: 02";
        console.log("02A." + var01);
    }
    var var01 = "Var: 03";
    console.log("03A." + var01);
}

testVar();