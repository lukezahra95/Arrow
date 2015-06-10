var materials : Material[];

function Start () {


}

function Update () {

}

function OnTriggerEnter(otherObject:Collider)
{
	if(otherObject.gameObject.tag=="arrow")
	{
	//Destroy(gameObject);
	GUIscript.level++;
	GUIscript.score+=100;
	 renderer.sharedMaterial = materials[1];

		if(Application.loadedLevel==1)
		{
			
			Application.LoadLevel(2);
		}
		
		if(Application.loadedLevel==2)
		{
		
			Application.LoadLevel(3);
		}
		
		
	
		
		if(Application.loadedLevel==3)
		{
		    level=0;
		        
			Application.LoadLevel(4);
		}
	
	}
}