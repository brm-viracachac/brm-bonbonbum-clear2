"use strict";jQuery(document).ready(function(e){e(".navbar-toggle").click(function(){e(".container-items, .overlay-items").addClass("active")}),e(".glyphicon-arrow-left, .overlay-items").click(function(){e(".container-items, .overlay-items").removeClass("active")}),e("#btn-play").click(function(){e(".padding-imagen").removeClass("padding-imagen"),e(".envevisto").removeClass("hidden").html('<iframe width="500" height="500" src="https://www.youtube.com/embed/LhcT_Lf3hVQ?rel=0&autoplay=1" frameborder="0" allowfullscreen="" class="embed-responsive-item"></iframe>'),e(this).hide(),e(".visualvideo").hide()})});