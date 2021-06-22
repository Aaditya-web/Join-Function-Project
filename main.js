function getParagraph1()
{
    var inputs= []
    
    for(var i = 1 ; i<=6 ; i++)
    {
        inputs.push(document.getElementById("para1_input_box_" + i).value);
        inputs.join(".");
    }
    document.getElementById("showParagraph1").innerHTML = inputs.join(".");

    for(var i = 2 ; i<=6 ; i++)
    {
        inputs.push(document.getElementById("para2_input_box_" + i).value);
        inputs.join(".");
    }
    document.getElementById("showParagraph1").innerHTML = inputs.join(".");

    for(var i = 3 ; i<=6 ; i++)
    {
        inputs.push(document.getElementById("para3_input_box_" + i).value);
        inputs.join(".");
    }
    document.getElementById("showParagraph1").innerHTML = inputs.join(".");

    for(var i = 4 ; i<=6 ; i++)
    {
        inputs.push(document.getElementById("para4_input_box_" + i).value);
        inputs.join(".");
    }
    document.getElementById("showParagraph1").innerHTML = inputs.join(".");

    for(var i = 5 ; i<=6 ; i++)
    {
        inputs.push(document.getElementById("para5_input_box_" + i).value);
        inputs.join(".");
    }
    document.getElementById("showParagraph1").innerHTML = inputs.join(".");

    for(var i = 6 ; i<=6 ; i++)
    {
        inputs.push(document.getElementById("para6_input_box_" + i).value);
        inputs.join(".");
    }
    document.getElementById("showParagraph1").innerHTML = inputs.join(".");
}