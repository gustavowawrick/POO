function testVar() {
    var var01 = "Var: 01";
    {
        var var02 = "Var: 02";
        console.log("01A." + var01);
        console.log("01B." + var02);
    }
    console.log("02A." + var01);
    console.log("02B." + var02);
}

testVar();
