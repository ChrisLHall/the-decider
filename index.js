function populate(elem, arr) {
  document.querySelector("#" + elem).value = arr.join("\n");
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

populate("possibleProjects", project_options);
populate("possibleEntertainment", entertainment_options);
