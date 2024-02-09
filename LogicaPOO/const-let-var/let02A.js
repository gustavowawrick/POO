function testLet() {
    let let01 = "Let: 01";
    {
        let let02 = "Let: 02";
        
        console.log("01A." + let01);
        console.log("01B." + let02);
    }
    console.log("02A." + let01);
}

testLet();