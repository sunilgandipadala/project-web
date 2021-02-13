//var names=["sunil","sahithi","lahari","jhanshi","deepu","dhana","Jaya"];
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for(i in names){
	if(((names[i])[0]).toLowerCase()=='j'){
		byespeaker.speak(names[i]);
	}
	else{
		hellospeaker.speak(names[i]);
	}
}
