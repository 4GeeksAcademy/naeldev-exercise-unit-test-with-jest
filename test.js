// Importar la función sum del archivo app.js
const { sum, fromYenToPound } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})


test("One dollar should be 146.26 yen", function() {
    const{fromDollarToYen } =require('./app.js');

    const yens = fromDollarToYen(2.5);
    const expected = 2.5 * 146.26;
    expect(fromDollarToYen(2.5)).toBeCloseTo(365.65,2);
})

test ("One dollar is 146.26 yen", function(){
    const{fromDollarToYen } =require('./app.js');

    const yens = fromDollarToYen(1);
    expect(fromDollarToYen(1)).toBeCloseTo(146.26,2);
});

test ("dollar is negative", function(){
    const{fromDollarToYen } =require('./app.js');

    const yens = fromDollarToYen(-2);
    expect(fromDollarToYen(-2)).toBe('error');
})


test("one Yen should be 0.005 pounds", function(){
    const{fromYenToPound } =require('./app.js');
    
    const pounds = (fromYenToPound(1));
    expect(fromYenToPound(1)).toBeCloseTo(0.0056, 4)
})

test("yens negative is a error", function(){
    const{fromYenToPound } =require('./app.js');
    
    const pounds = (fromYenToPound(-1236523));
    expect(fromYenToPound(-1236523)).toBe('error')
})

test(" 12000 yens should be 66.70 pounds", function(){
    const{fromYenToPound } =require('./app.js');
    
    const pounds = (fromYenToPound(12000));
    expect(fromYenToPound(12000)).toBeCloseTo(66.7,2)
})







