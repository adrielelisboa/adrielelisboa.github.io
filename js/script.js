$(document).ready(function () {

      $("#imgMenu1").click(function () {
            $("#listaMenu").toggle();
      });

      $("#imgHome").click(function () {
            $("#inicio").show();
            $("#pinceis").hide();
            $("#sombras").hide();
            $("#blush").hide();
            $("#batom").hide();
            $("#esmaltes").hide();
            $("#perfumes").hide();
      });
      $("#imgPincel").click(function () {
            $("#pinceis").show();
            $("#sombras").hide();
            $("#blush").hide();
            $("#batom").hide();
            $("#esmaltes").hide();
            $("#perfumes").hide();
            $("#inicio").hide();
      });
      $("#imgSombras").click(function () {
            $("#sombras").show();
            $("#pinceis").hide();
            $("#blush").hide();
            $("#batom").hide();
            $("#esmaltes").hide();
            $("#perfumes").hide();
            $("#inicio").hide();
      });
      $("#imgBlush").click(function () {
            $("#blush").show();
            $("#pinceis").hide();
            $("#sombras").hide();
            $("#batom").hide();
            $("#esmaltes").hide();
            $("#perfumes").hide();
            $("#inicio").hide();
      });
      $("#imgBatom").click(function () {
            $("#batom").show();
            $("#blush").hide();
            $("#pinceis").hide();
            $("#sombras").hide();
            $("#esmaltes").hide();
            $("#perfumes").hide();
            $("#inicio").hide();
      });
      $("#imgEsmalte").click(function () {
            $("#esmaltes").show();
            $("#batom").hide();
            $("#blush").hide();
            $("#pinceis").hide();
            $("#sombras").hide();
            $("#perfumes").hide();
            $("#inicio").hide();
      });
      $("#imgPerfumes").click(function () {
            $("#perfumes").show();
            $("#batom").hide();
            $("#blush").hide();
            $("#pinceis").hide();
            $("#sombras").hide();
            $("#esmaltes").hide();
            $("#inicio").hide();
      });
});