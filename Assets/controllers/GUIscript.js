static var score:int;
static var arrows:int;
var  skin:GUISkin;
static var level:int;


function Start () {
arrows=10;

}

function Update () {


	if(Input.GetKey("escape"))
	{
		level=0;
	Application.LoadLevel(0);
	}
	
	if(arrows<0)
	{
	level=0;
	Application.LoadLevel(4);
	}
	
	

}

function OnGUI()
{

	GUI.skin = skin;
	GUI.color = Color.white;
	GUI.Label(Rect(5,0,200,50),"Press Esc to return to Menu");
	GUI.Label(Rect(70,40,200,50),"Level: " + (level+1));
	GUI.Label(Rect(170,40,200,50),"Arrows Left: " + (arrows));
	GUI.Label(Rect(300,40,200,50),"Score: " + score);
	GUI.Label(Rect(400,40,200,50),"Force: " + pointController.force);
	GUI.Label(Rect(500,40,200,50),"Bow Angle: " + armController.angle);
	
}