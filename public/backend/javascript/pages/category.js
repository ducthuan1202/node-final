var Cateogry = function () {

    var sendRequestDelete = function (data) {
        $.ajax({
            method: 'DELETE',
            url: '/admin/categories/destroy',
            dataType: 'JSON',
            data: data,
            success: function (res) {
                if (res.success) {
                    window.location.reload(true);
                } else {
                    alert(res.message);
                }
            }
        });
    };

    var sendRequestDeleteMulti = function (data) {
        $.ajax({
            method: 'DELETE',
            url: '/admin/categories/delete',
            dataType: 'JSON',
            data: data,
            success: function (res) {
                if (res.success) {
                    window.location.reload(true);
                } else {
                    alert(res.message);
                }
            }
        });
    };

    var getListItemSelected = function () {
        var items = [];
        $("input:checkbox[name='item-selected']").each(function () {
            if ($(this).is(":checked")) items.push($(this).val());
        });
        return items;
    };

    var init = function () {

        $('table.grid-data').on('click', '.btn-destroy', function () {
            var id = $(this).data('id');
            var willDelete = window.confirm("Are you sure?");
            if (willDelete) sendRequestDelete({ id: id });
        });

        $("#checkAll").on('click', function () {
            var status = $(this).is(":checked")
            $("input:checkbox[name='item-selected']").each(function () {
                $(this).prop("checked", status);
            });
        });

        $("#deleteMulti").on('click', function () {
            var items = getListItemSelected();
            if (items.length) {
                var willDelete = window.confirm("Are you sure?");
                if (willDelete) sendRequestDeleteMulti({ id: items });
            } else {
                alert("select item");
            }

        });

    }

    // return method
    return {
        init: function () {
            init();
        }
    };

}();