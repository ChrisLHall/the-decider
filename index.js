

const PRODUCTIVITY = 0;
const ENTERTAINMENT = 1;
let mode = PRODUCTIVITY;

function populate(elem, arr) {
  document.querySelector("#" + elem).value = arr.join("\n");
}

// might be nice to build this object from a list of strings
let project_options = [
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

let entertainment_options = [
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
