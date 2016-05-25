sortable.dblclick = function() {  
var panelId=[];
$(".kv-connected").each(
        function(){
            panelId.push($(this).attr('id'));            
        });
var swapItem=function (source,id,id2){
        var litem = $(source).clone();
    result=litem.appendTo($('#'+id));    
    $(source).remove();
    result.dblclick(function() {
        swapItem(this,id2);
  });
}
  $('#'+panelId[0]+' li').dblclick(function() {
        swapItem(this,panelId[1],panelId[0]);
  });
  $('#'+panelId[1]+' li').dblclick(function() {
        swapItem(this,panelId[0],panelId[1]);
  });    
  };
