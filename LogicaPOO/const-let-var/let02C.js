function testLet(){
    let let01 = "Let: 01";
    {
        console.log("01A." + let01);
        let let01 = "Let: 02";
        console.log("02A." + let01);
    }
    console.log("03A." + let01);
}

testLet();