sortable.dblclick = function () {
    var panelId = [];
    $(".kv-connected").each(
            function () {
                panelId.push($(this).attr('id'));
            });
    var swapItem = function (source, id, id2) {
        var litem = $(source).clone(true);
        result = litem.appendTo($('#' + id));
        $(source).remove();
    }
    $('#' + panelId[0] + ' li,' + '#' + panelId[1] + ' li').dblclick(function () {
        if ($(this).parent().attr('id') == panelId[0]) {
            swapItem(this, panelId[1], panelId[0]);
        } else {
            swapItem(this, panelId[0], panelId[1]);
        }
    });
};
