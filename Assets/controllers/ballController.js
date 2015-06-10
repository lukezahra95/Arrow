var materials : Material[];
var colourChange = true;

function Start () {
gameObject.rigidbody.AddRelativeForce(Vector3.up * 1 * 40);
StartCoroutine("ballChange");
}

function Update () {

//gameObject.transform.localScale.x = 5;

}

function OnCollisionEnter(otherObject:Collision)
{

	if(otherObject.gameObject.tag=="arrow")
	{
	
		GUIscript.score+=50;
		
		// renderer.sharedMaterial = materials[1];
		 //gameObject.collider.material.bounciness=0;
		 
		Destroy(gameObject);
	
	}
}

function ballChange()
{
	while(colourChange == true){
		renderer.sharedMaterial = materials[0];
		yield WaitForSeconds(4);
		renderer.sharedMaterial = materials[1];
		yield WaitForSeconds(4);
		renderer.sharedMaterial = materials[2];
		yield WaitForSeconds(4);
	}
}
