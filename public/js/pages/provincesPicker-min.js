"use strict";$("document").ready(function(){console.log("Ahihi"),$(".city-chooser").each(function(){var o=parseInt($("#regCity option:first-child",this).val(),10),t=parseInt($("#regTown option:first-child",this).val(),10);if(console.log(o),console.log(t),-1!==o&&($("select#regCity option:first-child",this).remove(),$('select#regCity option[value="'.concat(o,'"]')).prop("selected",!0),-1!==t)){var e=$("select#regTown",this);e.empty(),arr[o].forEach(function(o,t){e.append("<option value=".concat(t,">").concat(o,"</option>"))}),e.prop("disabled",!1),$('select#regTown option[value="'.concat(t,'"]')).prop("selected",!0)}})}),$(".city-chooser").each(function(){$("#regCity",this).on("change",function(){var o=this.value,t=$(this).siblings("#regTown");t.empty(),arr[o].forEach(function(o,e){t.append("<option value=".concat(e,">").concat(o,"</option>"))}),$(this).siblings("#regTown option:first-child").prop("selected",!0),t.prop("disabled",!1)})});