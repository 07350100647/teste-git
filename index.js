//let dataNasc = '09/08/1985'
//console.log('Nascido em'+dataNasc +', natural de Alpinópolis-MG');

var antes = 'antes';
var validaEscopo = function() {
    var antesNaFunc = 'antes-na-func';
    console.log(`Na Func ${antes}, ${depois}, ${antesNaFunc}, ${depoisNaFunc}, ${naoDefinida}`);
    var depoisNaFunc = 'depois-na-func';
}
var depois = 'depois';
var naoDefinida;


