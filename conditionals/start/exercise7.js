// Exercise 7: and, or, not
// &&  and: true only if both sides are true
// ||  or:  true if at least one side is true
// !   not: turns true into false, and false into true

function exercise7(start) {
  let isMuted = 60 > 50;
  let bpm = 90;
  let duration = "16n";
console.log(isMuted);
console.log(!isMuted);
console.log(bpm > 100);
console.log(bpm === 100);
console.log(bpm < 100)

  if (isMuted && bpm > 100) {
  synth.triggerAttackRelease("E4", duration, start);
  synth.triggerAttackRelease("E4", duration, start + 0.7);
  synth.triggerAttackRelease("B2", duration, start + 1.2);
  synth.triggerAttackRelease("D3", duration, start + 1.7);
  } else if (isMuted || bpm === 100) {
    synth.triggerAttackRelease("B4", duration, start);
    synth.triggerAttackRelease("E4", duration, start + 0.6);
    synth.triggerAttackRelease("C4", duration, start + 0.8);
    synth.triggerAttackRelease("C5", duration, start + 1);
    synth.triggerAttackRelease("B4", duration, start + 1.2);
    synth.triggerAttackRelease("E4", duration, start + 1.4);
    synth.triggerAttackRelease("C4", duration, start + 1.6);
    synth.triggerAttackRelease("C5", duration, start + 1.8);
    synth.triggerAttackRelease("A4", duration, start + 2);

    synth.triggerAttackRelease("B3", "9n", start + 2.6); //
    synth.triggerAttackRelease("B4", "9n", start + 3); //
    synth.triggerAttackRelease("G3", "9n", start + 3.4); //
    synth.triggerAttackRelease("F4", "9n", start + 3.8);
    synth.triggerAttackRelease("G#4", "10n", start + 4.2);
    synth.triggerAttackRelease("G#4", "10n", start + 4.6);
    synth.triggerAttackRelease("F#4", "10n", start + 5);
    synth.triggerAttackRelease("F#4", "10n", start + 5.4);

    synth.triggerAttackRelease("B4", duration, start + 6.4);
    synth.triggerAttackRelease("B4", duration, start + 6.9);
    synth.triggerAttackRelease("E4", duration, start + 7.1);
    synth.triggerAttackRelease("C4", duration, start + 7.3);
    synth.triggerAttackRelease("C5", duration, start + 7.5);
    synth.triggerAttackRelease("B4", duration, start + 7.7);
    synth.triggerAttackRelease("E4", duration, start + 7.9);
    synth.triggerAttackRelease("C4", duration, start + 8.1);
    synth.triggerAttackRelease("C5", duration, start + 8.3);
    synth.triggerAttackRelease("A4", "4n", start + 8.9);
    synth.triggerAttackRelease("B4", "4n", start + 9.5);
  } else if (!isMuted) {
    synth.triggerAttackRelease("B4", duration, start);
    synth.triggerAttackRelease("B3", duration, start + 0.6);
    synth.triggerAttackRelease("B2", duration, start + 1.2);
    synth.triggerAttackRelease("B1", duration, start + 1.8);
    synth.triggerAttackRelease("E1", duration, start + 2.4);
    synth.triggerAttackRelease("E2", duration, start + 3);
    synth.triggerAttackRelease("E3", duration, start + 3.6);
    synth.triggerAttackRelease("D2", duration, start + 4.2);
    synth.triggerAttackRelease("D3", duration, start + 4.8);
    synth.triggerAttackRelease("D4", duration, start + 5.4);
    synth.triggerAttackRelease("D5", duration, start + 6);
  }
}
  // TODO 7a: play the note only if the sound is not muted AND the tempo is more than 90:
  //            if (!isMuted && bpm > 90) { … }


  // TODO 7b: short notes get a high G on top, half a second later. Add a second if:
  //            if (duration === "8n" || duration === "16n") {
  //              synth.triggerAttackRelease("G5", "16n", start + 0.5);
  //            }
  // TODO 7c: log both conditions, like in exercise 2, so you can see each answer:
  //            console.log("Exercise 7: not muted and fast enough? " + (!isMuted && bpm > 90));
  // TODO 7d: change one value at a time, predict, then press:
  //            isMuted = true      bpm = 80      duration = "4n"      duration = "16n"

// ---------- You don't need to change anything below this line ----------

playOnClick("play-7", exercise7);
