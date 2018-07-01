// Select color input
// Select size input
var color
var rows
var columns
// When size is submitted by the user, call makeGrid()
$("#sizePicker").submit(function(grid) {
  grid.preventDefault()

  //Accepting height
  rows = $("#inputHeight").val()
  //Accepting Width
  columns = $("#inputWeight").val()
  makeGrid(rows, columns)
})

function makeGrid(x, y) {
  //Clear pre-existing rows
  $("tr").remove()
  // Your code goes here!
  for (var a = 0; a < x; a++) {
    $("#pixelCanvas").append("<tr id = table" + a + "></tr>")
    for (var b = 0; b < y; b++) {
      $("#table" + a).append("<td></td>")
    }
  }

  //Color time
  $("td").click(function colorize() {
    color = $("#colorPicker").val()

    if ($(this).attr("style")) {
      $(this).removeAttr("style")
    } else {
      $(this).css("background-color", color)
    }
  })
}
