function slider() {
    $(document).ready(function () {
        $('.ba-slider').each(function () {
            let cur = $(this);
            let width = cur.width() + 'px';
            cur.find('.resize img').css('width', width);
            drags(cur.find('.handle'), cur.find('.resize'), cur);
        });
    });

    $(window).resize(function () {
        $('.ba-slider').each(function () {
            let cur = $(this);
            let width = cur.width() + 'px';
            cur.find('.resize img').css('width', width);
        });
    });

    function drags(dragElement, resizeElement, container) {
        dragElement.on('mousedown touchstart', function (e) {
            dragElement.addClass('draggable');
            resizeElement.addClass('resizable');
            let startX = (e.pageX) ? e.pageX : e.originalEvent.touches[0].pageX;
            let dragWidth = dragElement.outerWidth(),
                posX = dragElement.offset().left + dragWidth - startX,
                containerOffset = container.offset().left,
                containerWidth = container.outerWidth();
            minLeft = containerOffset + 10;
            maxLeft = containerOffset + containerWidth - dragWidth - 10;
            dragElement.parents().on("mousemove touchmove", function (e) {
                let moveX = (e.pageX) ? e.pageX : e.originalEvent.touches[0].pageX;
                leftValue = moveX + posX - dragWidth;
                if (leftValue < minLeft) {
                    leftValue = minLeft;
                } else if (leftValue > maxLeft) {
                    leftValue = maxLeft;
                }
                widthValue = (leftValue + dragWidth / 2 - containerOffset) * 100 / containerWidth + '%';
                $('.draggable').css('left', widthValue).on('mouseup touchend touchcancel', function () {
                    $(this).removeClass('draggable');
                    resizeElement.removeClass('resizable');
                });
                $('.resizable').css('width', widthValue);
            }).on('mouseup touchend touchcancel', function () {
                dragElement.removeClass('draggable');
                resizeElement.removeClass('resizable');
            });
            e.preventDefault();
        }).on('mouseup touchend touchcancel', function (e) {
            dragElement.removeClass('draggable');
            resizeElement.removeClass('resizable');
        });
    }

}
slider()