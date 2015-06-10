var materials : Material[];
static var angle:int;
var speed:float = 4;
var t;
function Start () {
t = new GameObject();
}

function Update()
{


t.transform.position = transform.position;


mousePos = Input.mousePosition;

		//3. translate the mouse position into world units
		var mouseWorldPos = Camera.main.ScreenToWorldPoint (mousePos);

		//4. look at the position of the mouse, rotating in the Z axis
		t.transform.LookAt (mouseWorldPos,Vector3.forward);

		//6. declare shoot angle variable
		var shootangle;
		
		shootangle = t.transform.eulerAngles.z;


		//Debug.Log(t.transform.rotation.z);
		//7. lock the angle between 0 and 90 degrees
		//shootangle = Mathf.Clamp ( -transform.eulerAngles.z, -45.0,45.0);
		//5. lock the rotation in X and Y so only the Z rotation works
		
		if ((t.transform.rotation.z > 0.1) && (t.transform.rotation.z < 0.4))
		{
		//Debug.Log("test");
		transform.eulerAngles = new Vector3 (0.0, 0.0, -shootangle);
		}
	if(Input.GetMouseButtonDown(0))
	{
 	renderer.sharedMaterial = materials[1];
	
	}
	else if(Input.GetMouseButtonUp(0))
	{
	 renderer.sharedMaterial = materials[0];
	}
	
	
}



