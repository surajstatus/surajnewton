function outt(){
    var a = 10;
    function inn() {
        let b = 20;
        console.log('a', a);
        console.log('b', b);
    }
    return inn;
}

let ret = outt();

console.log(ret);

console.log(typeof(ret));

ret();