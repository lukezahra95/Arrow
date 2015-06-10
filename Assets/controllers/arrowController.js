var pos:float;
var materials : Material[];

function Start () {

}

function Update () {
	pos = transform.position.x;
	if(pos>-6)
	{
		 renderer.sharedMaterial = materials[1];
	}
	if(pos>=17.5)
	{
		Destroy(this.gameObject);
	}
}

function OnCollisionEnter(object:Collision)
{
	if(object.gameObject.tag=="floor")
	{
	//changed the seconds to 4 instead of 3
		yield WaitForSeconds(4);
		StartCoroutine("destroyArrow", 5);
		StopCoroutine("destroyArrow");
	}
}

function destroyArrow()
{
	Destroy(this.gameObject);
}