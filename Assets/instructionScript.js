﻿var  skin:GUISkin;
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
	
	if(GUI.Button(Rect(900, 650, 120, 30), "Start")){

		GUIscript.score=0;
		Application.LoadLevel(2);
	}
	
	
}