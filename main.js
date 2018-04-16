
function addGoogleForm(htmlId) {
    return htmlId;
}

function search() {
        inquiry = document.getElementById(htmlId).value;
        inquiry2 = document.getElementById(htmlId).value;
        inquiry = inquiry2.replace(/ /ig, '+');
        location.href='https://www.google.com/search?client=opera&q=' + inquiry + '&sourceid=opera&ie=UTF-8&oe=UTF-8';
         }
