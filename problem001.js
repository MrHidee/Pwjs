
function triangleArea(a, b, c)
{
	
	if (a+b < c || a+c < b || b+c < a){
		return -1;
    }	
	
	var ret = Math.round(Math.sqrt(((a+b+c)/2)*(((a+b+c)/2)-a)*(((a+b+c)/2)-b)*(((a+b+c)/2)-c)) * 100) / 100;

	if ( ret > 0 )
	{
		return ret;
	} else
	{
		return -1;
	}
}