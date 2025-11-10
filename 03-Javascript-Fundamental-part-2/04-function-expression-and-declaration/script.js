/*
js jokhon code execute kore tokhon sobar age full script er moddhe j global function declaration ase segulake execute kore ney. jar karone global function declaration jekhanei kora hok na keno sob jaygay call korlei execute hobe.

r function expression er khetre age declare korar por seta execute hoy er age call korle error dey.

abar jekono local scope er khetre function expression er varaible jodi age gobally define kora thake tobe local kono scope a function expression declare korleo seta globally jekono jaygay e use kora jay
*/

/*
// function declaration structer

function showMyName() {
  console.log("anik");
}
/*
// function expression structure


let showMyName = function () {
  console.log("anik");
};

showMyName();

*/

let showMyName;

if (true) {
  showMyName = function () {
    console.log("anik");
  };
}

showMyName();
