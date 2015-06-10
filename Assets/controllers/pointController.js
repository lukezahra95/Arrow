var arrow:Rigidbody;
static var force:float;

function Start () {

}

function Update()
{
	//when the mouse button is pressed
	if(Input.GetMouseButton(0))
	{
	force += Time.deltaTime;
	
	force = Mathf.Round(force * 100.0) / 100.0;
	}
	
	else if(Input.GetMouseButtonUp(0))
	{
	force+=0.5;
	var tempSphere:Rigidbody;
	tempSphere = Instantiate(arrow, transform.position,transform.rotation);
	tempSphere.AddRelativeForce(Vector3.right * force * 1600);
	GUIscript.arrows--;
	}
	else{
		force=0;
	}
	
	
}

