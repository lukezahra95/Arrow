var  skin:GUISkin;
function Start () {

}

function Update () {

}

function OnGUI(){

	GUI.skin = skin;
	var xpos:float;
	var ypos:float;
	
	//text in the middle of the screen, 0,0 in world coordinates
	xpos = Camera.main.WorldToScreenPoint(Vector3(0,0,0)).x;
	ypos = Camera.main.WorldToScreenPoint(Vector3(0,0,0)).y;
	
	//changed the text to play game
	if(GUI.Button(Rect(475, 300, 120, 30), "Play Game")){

		GUIscript.score=0;
		//the level is suppose to be 1
		Application.LoadLevel(0);
	}
	//this is the exit button when it is pressed it will quit the game
	if(GUI.Button(Rect(475, 350, 120, 30), "Exit")){

		Application.Quit();
	}
	
		
	
}