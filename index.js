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
