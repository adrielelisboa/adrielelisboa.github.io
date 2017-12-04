 $(document).ready(function() { 
    
        $("#imgMenu1").click(function() {
            $("#listaMenu").toggle();
      });

      $("#imgPincel").click(function() {
            $("#pinceis").show();
      });
      $("#imgSombras").click(function() {
            $("#sombras").show();
            $("#pinceis").hide();
      });
    
      });