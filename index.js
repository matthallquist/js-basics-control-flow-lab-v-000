// Write your code in this file!
function scuberGreetingForFeet(distance) {
  let result
  if (distance <= 400) {
    result = "This one is on me!"
  }
  else if (distance > 2000) {
    result = "I will gladly take your thirty bucks."
  }
  else if (distance > 2500) {
    result = "No can do."
  }
  else {
    result = distance;
  }
  return result;
}
