// Tools of the Trade
// Functions from Tuesday, now in VS Code.
// Work through the TODOs in order. After each one: save, check it works, commit.

// ---------- Part 1: the console ----------

// The Greeter from Tuesday morning: takes in a name, gives back a greeting.
function greet(name, sur) {
  return "Greetings, " + name + sur + "!" + " Is everything allright? How has your trip been?";
}
console.log(greet ("Mr ", "Serafym"));


// TODO 1: call greet with your own name and log what it gives back.

// ---------- Part 2: sound ----------

// Make an instrument and plug it into the speakers.
const synth = new Tone.Synth().toDestination();

// Plays three notes, timed from start.
// TODO 2: change the notes to ones you like. A note is A to G, then a number: "D4", "A3".
function playRiff(start) {
  synth.triggerAttackRelease("C4", "8n", start);
  synth.triggerAttackRelease("E4", "8n", start + 0.5);
  synth.triggerAttackRelease("G4", "8n", start + 1);
  synth.triggerAttackRelease("C4", "8n", start + 1.5);
  // TODO 3: add a fourth note at start + 1.5
}

function playy (start) {
  synth.triggerAttackRelease("D1", "1n", 11);
  synth.triggerAttackRelease("D1", "1n", 12);
  synth.triggerAttackRelease("D1", "1n", 13);

  synth.triggerAttackRelease("E1", "8n", 14.5);
  synth.triggerAttackRelease("E2", "8n", 14.75);
  synth.triggerAttackRelease("E3", "8n", 15);
  synth.triggerAttackRelease("E4", "8n", 15.25);
  synth.triggerAttackRelease("E5", "8n", 15.5);

  synth.triggerAttackRelease("F4", "8n", 15.75);
  synth.triggerAttackRelease("F#4", "8n", 16);
  synth.triggerAttackRelease("G4", "8n", 16.25);

  synth.triggerAttackRelease("E1", "8n", 16.5);
  synth.triggerAttackRelease("E2", "8n", 16.75);
  synth.triggerAttackRelease("E3", "8n", 17);
  synth.triggerAttackRelease("E4", "8n", 17.25);
  synth.triggerAttackRelease("E5", "8n", 17.5);

  synth.triggerAttackRelease("F4", "8n", 17.75);
  synth.triggerAttackRelease("F#4", "8n", 18);
  synth.triggerAttackRelease("G4", "8n", 18.25);

  synth.triggerAttackRelease("E1", "8n", 18.5);
  synth.triggerAttackRelease("E2", "8n", 18.75);
  synth.triggerAttackRelease("E3", "8n", 19);
  synth.triggerAttackRelease("E4", "8n", 19.25);
  synth.triggerAttackRelease("E5", "8n", 19.5);
}

// The whole song, timed from start.
function song(start) {
  playRiff(start);
  playRiff(start + 4);
  playy(start + 11);
  // TODO 4: call playRiff again, two seconds after the first one
}

// ---------- You don't need to change anything below this line ----------

// When Play is clicked: switch the sound on, then play the song from now.
const button = document.getElementById("play");
button.addEventListener("click", async () => {
  await Tone.start();
  song(Tone.now());
});
