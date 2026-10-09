// Exercise 2: build a note from parts

const pitchName = "D";
const nick = "B";
const realltt = "A";
let octave = 2;
octave = octave + 1;
const fullNote = pitchName + octave;
const full = nick + octave;
const monn = realltt + octave;
console.log("Exercise 2: fullNote is " + fullNote);
console.log("Exercise 2: full is " + full);
console.log("Exercise 2: monn is " + monn);

// TODO 2a: raise the octave by one: octave = octave + 1;
// TODO 2b: log fullNote again. Predict first: has it changed?
// TODO 2c: rebuild it from its parts (fullNote = pitchName + octave;) and log it once more.

let Randomnumber = Math.floor(Math.random () * 16) + 1;
let actual = Randomnumber + "n";
console.log("The second parameter is: " + actual);

function exercise2(start) {
  synth.triggerAttackRelease(fullNote, actual, start);
  synth.triggerAttackRelease(fullNote, actual, start + 1);
  synth.triggerAttackRelease(full, actual, start + 1.5);
  synth.triggerAttackRelease(full, actual, start + 2);
  synth.triggerAttackRelease(monn, actual, start + 2.5);
  synth.triggerAttackRelease(fullNote, actual, start + 3);
  synth.triggerAttackRelease(fullNote, actual, start + 4);
  synth.triggerAttackRelease(full, actual, start + 4.5);
  synth.triggerAttackRelease(full, actual, start + 5);
  synth.triggerAttackRelease(monn, actual, start + 5.5);
  synth.triggerAttackRelease(fullNote, actual, start + 6);
  synth.triggerAttackRelease(fullNote, actual, start + 7);
}

// ---------- You don't need to change anything below this line ----------

playOnClick("play-2", exercise2);
