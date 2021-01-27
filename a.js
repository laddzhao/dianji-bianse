$("button").click(
    function()
    {
        var color = this.value;
        $("body").css("background-color",color);
    }
)