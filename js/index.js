allsides.onchange = function() {
  // set all other values same
  topleft.value = this.value;
  topright.value = this.value;
  bottomright.value = this.value;
  bottomleft.value = this.value;
  
  box.style.borderRadius = this.value + "%";
};
topleft.onchange = function() {
  box.style.borderRadius = this.value + "% " + topright.value + "% " + bottomright.value + "% " + bottomleft.value + "%";
};
topright.onchange = function() {
  box.style.borderRadius = topleft.value + "% " + this.value + "% " + bottomright.value + "% " + bottomleft.value + "%";
};
bottomright.onchange = function() {
  box.style.borderRadius = topleft.value + "% " + topright.value + "% " + this.value + "% " + bottomleft.value + "%";
};
bottomleft.onchange = function() {
  box.style.borderRadius = topleft.value + "% " + topright.value + "% " + bottomright.value + "% " + this.value + "%";
};