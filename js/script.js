$(document).ready(function () {

      $("#imgMenu1").click(function () {
            $("#listaMenu").toggle();
      });

      $("#imgPincel").click(function () {
            $("#pinceis").show();
            $("#sombras").hide();
            $("#blush").hide();
      });
      $("#imgSombras").click(function () {
            $("#sombras").show();
            $("#pinceis").hide();
            $("#blush").hide();
      });
      $("#imgBlush").click(function () {
            $("#blush").show();
            $("#pinceis").hide();
            $("#sombras").hide();
      });
});