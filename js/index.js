let aaa = document.querySelector("#ani");

bodymovin.loadAnimation({
    container: aaa, 
    renderer: 'svg', 
    loop: true,
    autoplay: true,
    path: 'js/data2.json'
});