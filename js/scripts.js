var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'Triceratops';
var dinosaurUpperCased = dinosaur.toUpperCase();
console.log(dinosaurUpperCased)
var textAfter = text.replace('Velociraptor', dinosaurUpperCased);
var length = textAfter.length;
var partOflength = textAfter.slice(0, length / 2);
console.log(partOflength);