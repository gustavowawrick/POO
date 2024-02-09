function testConst() {
    const const01 = "Const: 01";
    {
        const const02 = "Const: 02";

        console.log("01A." + const01);
        console.log("01B." + const02);
    }
    const01 = "Novo valor";

    console.log("02A." + const01);
    console.log("02B." + const02);
}

testConst();