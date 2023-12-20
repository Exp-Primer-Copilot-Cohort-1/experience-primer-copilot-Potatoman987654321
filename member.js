function skillsMember() {
  var member = document.getElementById("member");
  var memberContent = document.getElementById("memberContent");
  if (memberContent.style.display === "none") {
    memberContent.style.display = "block";
    member.style.backgroundColor = "#7f8c8d";
  } else {
    memberContent.style.display = "none";
    member.style.backgroundColor = "#34495e";
  }
}