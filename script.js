//your JS code here. If required.
    var style = document.createElement("style");
    style.textContent = "#line{animation: rotate 4s;"+
        "animation-fill-mode: forwards;"+
        "animation-timing-function:linear;}"+
        "@keyframes rotate{"+
            "from{transform: rotate(0deg);}"+
            "to{transform: rotate(500deg);}"+
        "}";
    document.body.appendChild(style);