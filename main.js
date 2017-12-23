var myInstance = new ChartBar({
    container: "chart",
    size: {w: 500, h: 600},
    label: {x: 'X Axis', y: 'Y Axis'},
    valueLableTail: '%',
    valueLableEnable: true,
    data: [
        {color: randomColor(), value: rand(0,100), valueColor: 'black'},
        {color: randomColor(), value: rand(0,100), valueColor: 'black'},
        {color: randomColor(), value: rand(0,100), valueColor: 'black'},
        {color: randomColor(), value: rand(0,100), valueColor: 'black'},
        {color: randomColor(), value: rand(0,100), valueColor: 'black'},
    ],
    isVertical: false
});

document.getElementById("add").addEventListener("click", function(event){
    event.preventDefault();
    myInstance.addBar({
        color: document.addItem.barColor.value,
        value: document.addItem.barValue.value,
        valueColor: document.addItem.labelColor.value
    });
});

document.getElementById("set").addEventListener("click", function(event){
    event.preventDefault();

    myInstance.render({
        label: {
            x: document.setting.xAxis.value ? document.setting.xAxis.value : 'X Axis',
            y: document.setting.yAxis.value ? document.setting.yAxis.value : 'Y Axis',
        },
        size: {
            w: document.setting.width.value ? document.setting.width.value : 500,
            h: document.setting.height.value ? document.setting.height.value : 300,
        },
        valueLableTail: document.setting.valueLableTail.value ? document.setting.valueLableTail.value : '%',
        bgColor: document.setting.bgColor.value ? document.setting.bgColor.value : '#edead0',
        isVertical: document.setting.valueVertical.checked,
    });
});

$('.mycp').colorpicker();
