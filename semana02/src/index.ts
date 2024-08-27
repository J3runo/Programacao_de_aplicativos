import Cachorro from "./Cachorro";
import Dono from "./Dono";

var d1 = new Dono("Bruno","48 96166464")
var c1 = new Cachorro("Hulk","pit-bull","preto","Grande",d1);


c1.dono = d1
c1.exibirCachorro();
c1.exibirDono()

var c2 = new Cachorro("milli", "picher","Branco","Médio", d1)

console.table(c2)
c2.exibirCachorro()

