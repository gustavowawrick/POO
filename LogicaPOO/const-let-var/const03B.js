function testConst() {
    const const01 = { propriedade: "Valor" }
    console.log("01A." + const01.propriedade);

    const01.propriedade = "Novo Valor"
    console.log("02A." + const01.propriedade);
}

testConst();