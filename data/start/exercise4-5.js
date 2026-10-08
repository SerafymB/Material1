// Exercises 4 and 5: variables as arguments, and data you can see
// beat comes from exercise3.js. Every file on the page can use the variables the others make.

function playNote(nam, length, time) {
  // TODO 5: log what is playing, before the note plays:
  //         console.log("Playing " + name + " for " + length);
  synth.triggerAttackRelease(nam, length, time);
}

const nam = "B3";
const length ="16n";
console.log("Playing " + nam + " for " + length);
// TODO 4a: store the three notes and one length in variables, here, above the function.
// TODO 4b: use those variables in the calls below instead of the values typed in.
// TODO 4c: change the length variable once. Do all three notes change?

function exercise4(start) {
  playNote(nam, length, start + beat * 1);
  playNote(nam, length, start + beat * 3);
  playNote(nam, length, start + beat * 5);
  playNote(nam, length, start + beat * 7);
}

// ---------- You don't need to change anything below this line ----------

playOnClick("play-4", exercise4);
