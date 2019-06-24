// Hokay. So here are the categories I want to have chosen for me:
// Stuff off my to-do list. Skill development. Projects.
// I might want to do two things on one day, but PROLY not.

// On a day, I want to choose between each category. That category will
// be assigned for the rest of the day. (each one tracks last time it was
// chosen too). I can either click a category or click "Choose for me!".
// (it might be nice to configure how choose for me works, random? or
// cycling through each one every day?)
// Once I have picked a category for the day, I am presented with the
// the projects in it, as well as the last time I worked on each. I
// either click a project to choose it, or click "Choose for me" which
// always chooses randomly. Then, the project is shown for the rest of
// the day whenever you return to the page.

// In the configuration page. I can add or remove categories, up to 4
// (arbitrary). I can add or remove projects from each, also up to 4.
// I can mark projects as done, and put them in the done list.
// I can configure at what time each day the system resets (3AM).

// There is a work section and an entertainment section. It would be
// nice to fully separate them.

// It would be nice to sync across devices blah blah blah but it must
// be lightweight, and I'm going to actually try using it before I worry
// about that. It would be nice to pull entertainment recommendations
// out of something random like popular Itch games for example. It
// might be nice to have a log of everything worked on - but this isn't
// for time tracking. It might be nice to be able to just type in what
// youre doing for the day - but if you already know what to do today
// you shouldn't use this today. It might be nice to have a place where
// I can just type a comma separated list, and have it pick from there
// and stay picked for the day.

// Hmm. Maybe don't keep any record of what you worked on. This is to
// avoid being precious about projects etc, I can track that separately.

// hokay LETS GO.

const PRODUCTIVITY = 0;
const ENTERTAINMENT = 1;
let mode = PRODUCTIVITY;

function populate(elem, arr) {
  document.querySelector("#" + elem).value = arr.join("\n");
}

// might be nice to build this object from a list of strings
let productivityOptions = [
  {
    category: 'Programming projects',
    members: [
      { name: 'The Decider', timesPicked: 0, lastTimePicked: null, },
      { name: 'Mobile game editor', timesPicked: 0, lastTimePicked: null, },
      { name: 'Phone party', timesPicked: 0, lastTimePicked: null, },
    ],
  },
  {
    category: 'Game projects',
    members: [
      { name: 'New PuzzleScript game', timesPicked: 0, lastTimePicked: null, },
      { name: 'Add to tiny town', timesPicked: 0, lastTimePicked: null, },
    ],
  },
  {
    category: 'Skills',
    members: [
      { name: 'Work on a song', timesPicked: 0, lastTimePicked: null, },
      { name: 'Practice music', timesPicked: 0, lastTimePicked: null, },
      { name: 'Practice drawing', timesPicked: 0, lastTimePicked: null, },
      { name: 'Practice 3D modeling', timesPicked: 0, lastTimePicked: null, },
    ],
  },
  {
    category: 'Housework',
    members: [
      { name: 'Item off my to-do list', timesPicked: 0, lastTimePicked: null, },
      { name: 'Cleaning', timesPicked: 0, lastTimePicked: null, },
    ],
  },
];

let doneProductivity = [];

let entertainmentOptions = [
  {
    category: 'Movies',
    members: [
      { name: 'Mortal Engines', timesPicked: 0, lastTimePicked: null, },
      { name: 'Stardust', timesPicked: 0, lastTimePicked: null, },
      { name: 'Us', timesPicked: 0, lastTimePicked: null, },
    ],
  },
  {
    category: 'Games',
    members: [
      { name: 'Factorio', timesPicked: 0, lastTimePicked: null, },
      { name: 'Journey', timesPicked: 0, lastTimePicked: null, },
      { name: 'Fallout 4', timesPicked: 0, lastTimePicked: null, },
      { name: 'Borderlands 2', timesPicked: 0, lastTimePicked: null, },
    ],
  },
];

let doneEntertainment = [];

function listChange(elem, arr) {
  var listElem = document.querySelector("#" + elem);
  var rawArray = listElem.value.split("\n");
  arr.length = 0; // clear the array
  for (var i = 0; i < rawArray.length; i++) {
    var item = rawArray[i];
    console.log(item)
    if (item.length > 0) {
      arr.push(item);
    }
  }
  listElem.value = arr.join("\n");
  console.log("list changed " + elem);
  console.log(arr.join("\n"))
}

const STAY_LENGTH = 7

function decide(arr) {
    document.querySelector("#what").innerHTML = arr[Math.floor(Math.random() * arr.length)]
    var today = new Date();
    today.setDate(today.getDate() + 14); 
    document.querySelector("#when").innerHTML = today.toDateString();
}

/*
populate("possibleProjects", project_options);
populate("possibleEntertainment", entertainment_options);
*/
