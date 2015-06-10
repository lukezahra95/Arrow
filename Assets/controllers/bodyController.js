

function Start () {

}

var materials : Material[];


function Update () {
    if(Input.GetMouseButton(0))
	{
 	renderer.sharedMaterial = materials[1];
	
	}
	else if(Input.GetMouseButtonUp(0))
	{
	 renderer.sharedMaterial = materials[0];
	}
}

