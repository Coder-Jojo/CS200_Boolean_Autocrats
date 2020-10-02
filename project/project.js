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