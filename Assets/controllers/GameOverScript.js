var  skin:GUISkin;	

function Start () {

}

function Update () {
}

function OnGUI(){

	GUI.skin = skin;
//	var xpos:float;
//	var ypos:float;
//	
//	//text in the middle of the screen, 0,0 in world coordinates
//	xpos = Camera.main.WorldToScreenPoint(Vector3(0,0,0)).x;
//	ypos = Camera.main.WorldToScreenPoint(Vector3(0,0,0)).y;
//
//		    	
//		

				
	GUI.Label(Rect(500,120,120,30),"Game Over");
	if(GUI.Button(Rect(470, 260, 120, 30), "Menu")){
	
		GUIscript.score=0;
		Application.LoadLevel(0);
	}
	
	}