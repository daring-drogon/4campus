const myFilter = () => {
    var input, filter, alldata, parsedata, h6;

    input = document.getElementById("inputdefault");
    filter = input.value.toUpperCase();
    alldata = document.getElementById("campus-riauisland");
    parsedata = alldata.getElementsByClassName("card-body");

    for (i = 0; i < parsedata.length; i++) {
        h6 = parsedata[i].getElementsByTagName("h6")[0];
        if (h6) {
            if (h6.innerHTML.toUpperCase().indexOf(filter) > -1) {
                parsedata[i].style.display = "";
            } else {
                parsedata[i].style.display = "none"
            }
        }
    }
}