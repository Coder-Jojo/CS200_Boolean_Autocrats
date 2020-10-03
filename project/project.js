 M.AutoInit();

window.addEventListener('offline',()=> M.toast({html:'Network issue',classes:'rounded'}));

 
 var firebaseConfig = {
    apiKey: "AIzaSyDUxWO-nES7JOCY3G1VrX2z97QYKwudOFk",
    authDomain: "previous-papers-b0d21.firebaseapp.com",
    databaseURL: "https://previous-papers-b0d21.firebaseio.com",
    projectId: "previous-papers-b0d21",
    storageBucket: "previous-papers-b0d21.appspot.com",
    messagingSenderId: "1000010528387",
    appId: "1:1000010528387:web:b3045e33608f8573210db6",
    measurementId: "G-T4WVVR40M5"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  document.querySelector(".myfile").addEventListener("change",(e) => {
console.log(e);
for(var i=0;i<e.target.files.length;i++)
{

var storageRef=firebase.storage().ref(e.target.files[i].name);

storageRef.getDownloadURL().then(function(url){
M.toast({html:'The song has already uploaded!',classes:'rounded'});
document.getElementById("form").reset();
}).catch(function(error){});


var task=storageRef.put(e.target.files[i]);
task.on("state_changed",(s) =>{
console.log((s.bytesTransferred/s.totalBytes)*100);
document.querySelector(".progress1").value=(s.bytesTransferred/s.totalBytes)*100;
if(document.querySelector(".progress1").value==100)
{
M.toast({html:"Your file has been uploaded!",classes:'rounded'});
document.querySelector(".progress1").value=0;
}
//else
//{
//M.toast({html:'Network issue, upload again',classes:'rounded'});
//console.log("Network issue");
//}

});




}

});

  
  
  $(document).ready(function(){
    $('.carousel').carousel({
    onCycleTo: function (ele) {
      console.log(ele);
      console.log($(ele).index()); // the slide's index
	  var carousellength=document.getElementsByTagName("img").length;
	  var carouselitem=document.getElementsByTagName("img");
	  for(var i=0;i<carousellength;i++)
	  {
		if($(ele).index()==i)
		{
			var filename=carouselitem[i].name;
			filename+=".mp3";
			var storage=firebase.storage().ref(filename);
			storage.getDownloadURL().then(function(url){document.getElementById("playing-song").src=url;})
                                         .catch(function(error){M.toast({html:"Network issue",classes:'rounded'});});
		}
	  }
	
	  
    }
});
  });
  
  
  
document.querySelector(".thumbnail").addEventListener("change",(e) => {
console.log(e);
for(var i=0;i<e.target.files.length;i++)
{
var storageRef=firebase.storage().ref(e.target.files[i].name);
var songname=e.target.files[i].name;
var task=storageRef.put(e.target.files[i]);
task.on("state_changed",(s) =>{
console.log((s.bytesTransferred/s.totalBytes)*100);
document.querySelector(".progress2").value=(s.bytesTransferred/s.totalBytes)*100;
if(document.querySelector(".progress2").value==100)
{
M.toast({html:"Your thumbnail has been uploaded!",classes:'rounded'});
document.querySelector(".progress2").value=0;
}
});
}

});