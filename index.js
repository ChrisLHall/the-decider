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

// There is a work section and an entertainment section.

// It would be nice to sync across devices blah blah blah but it must
// be lightweight, and I'm going to actually try using it before I worry
// about that. It would be nice to pull entertainment recommendations
// out of something random like popular Itch games for example.

// hokay LETS GO.

function populate(elem, arr) {
  document.querySelector("#" + elem).innerHTML = arr.join("\n")
}

var project_options = [
  "The Decider",
  "Bee Game",
  "Neural Pet",
  "Tiny Town",
]

var entertainment_options = [
  "Coco",
  "Donut County",
  "Borderlands 2",
  "Bake Show",
]

const STAY_LENGTH = 7

function decide(arr) {
    document.querySelector("#what").innerHTML = arr[Math.floor(Math.random() * arr.length)]
    var today = new Date();
    today.setDate(today.getDate() + 14); 
    document.querySelector("#when").innerHTML = today.toDateString();
}

populate("possibleProjects", project_options);
populate("possibleEntertainment", entertainment_options);
