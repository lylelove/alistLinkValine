var width = window.innerWidth;
var height = window.innerHeight;
var url0 = window.location.href;
</script>
<script id="sc" src="//unpkg.com/valine/dist/Valine.min.js">

</script>
<script>
    function left() {
    var cl = document.querySelector("#root > div > div > div.overlay > div");
    cl.style.left=0+"px";
    cl.style.right='';
    cl.style.borderTopLeftRadius=0+"rem";
    cl.style.borderBottomLeftRadius=0+"rem";
    cl.style.borderTopRightRadius=0.5+"rem";
    cl.style.borderBottomRightRadius=0.5+"rem";
}
    function right() {
    var cl = document.querySelector("#root > div > div > div.overlay > div");
    cl.style.right=0+"px";
    cl.style.left='';
    cl.style.borderTopLeftRadius=0.5+"rem";
    cl.style.borderBottomLeftRadius=0.5+"rem";
    cl.style.borderTopRightRadius=0+"rem";
    cl.style.borderBottomRightRadius=0+"rem";
}
    function vlight() {
    oDiv.style.backgroundColor="#fffaf0";
    var vsys = document.getElementsByClassName("vsys");
    var vp = document.querySelectorAll('#vcomments p');
    var vinput = document.querySelectorAll('#vcomments input');
    var vtext =  document.querySelectorAll('#vcomments textarea');
    var vbutton =  document.querySelectorAll('#vcomments button');
    for (var i=0;i<vsys.length;i++){
    vsys[i].style.color="#000000";
}
    for (var i =0;i<vp.length;i++){
    vp[i].style.color="#000000";
}
    for (var i=0;i<vinput.length;i++){
    vinput[i].style.color="#000000";
}
    for (var i=0;i<vtext.length;i++){
    vtext[i].style.color="#000000";
}
    for (var i=0;i<vbutton.length;i++){
    vbutton[i].style.color="#000000";
}
}
    function vdark() {
    oDiv.style.backgroundColor="darkslategrey";
    var vsys = document.getElementsByClassName("vsys");
    var vp = document.querySelectorAll('#vcomments p');
    var vinput = document.querySelectorAll('#vcomments input');
    var vtext =  document.querySelectorAll('#vcomments textarea');
    var vbutton =  document.querySelectorAll('#vcomments button');
    for (var i=0;i<vsys.length;i++){
    vsys[i].style.color="#ffffff";
}
    for (var i =0;i<vp.length;i++){
    vp[i].style.color="#ffffff";
}
    for (var i=0;i<vinput.length;i++){
    vinput[i].style.color="#ffffff";
}
    for (var i=0;i<vtext.length;i++){
    vtext[i].style.color="#ffffff";
}
    for (var i=0;i<vbutton.length;i++){
    vbutton[i].style.color="#ffffff";
}
}
    window.onload=function () {
    setTimeout(gun(),1000);
};
    var video = document.getElementsByClassName("art-video-player");
    var oDiv = document.createElement('div');
    oDiv.id = 'vcomments';
    document.body.appendChild(oDiv);
    var obu = document.createElement('button');
    obu.id = 'vcbu';
    document.body.appendChild(obu);
    obu.innerText="留言";
    obu.onclick = function(){
    if (obu.innerText==="留言"){
    left();
    obu.innerText="收起";
    oDiv.style.display="block";
    oDiv.style.width=width/2+"px";
    if (video.length>0){
    video[0].style.display="none";
}
}else {
    right()
    obu.innerText="留言";
    oDiv.style.display="none";
    if (video.length>0){
    video[0].style.display="";
}
}
};
    window.addEventListener("click", function(){
    var bdl =document.querySelector("#root > div > div > div.overlay > div > span:nth-child(2) > button");
    var url=window.location.href;
    if (url!==url0){
    window.location.replace(url);
}
    if (obu.innerText==="收起"){
    if (bdl.ariaLabel==="切换到深色模式"){
    vlight();
}else {
    vdark();
}
}
});
    window.onscroll = function() {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(scrollTop)
    if (scrollTop<=height){
    oDiv.style.top = scrollTop+"px";
}
};
    var style="@-webkit-keyframes mymove {" +
    "    50% {right: "+width/4+"px;}" +
    "@keyframes mymove {" +
    "    50% {right: "+width/4+"px;}" +
    "}";
    var ele=document.createElement("style");
    ele.innerHTML=style;
    document.getElementsByTagName('head')[0].appendChild(ele)
    new Valine({
    el: '#vcomments',
    appId: '',
    appKey: '',
    avatar:"hide",
    visitor: true,
    pageSize:3,
})
    </script>