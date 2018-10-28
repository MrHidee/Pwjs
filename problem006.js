function divisible(a) {
		var read = true;
		var temp;
		for(i = 1; i<arguments.length; i++)
		{
			temp = a/arguments[i];
			
			if(!(temp/parseInt(temp)===1))
			{
			return false;
			}
		}
			
		return read;	
	}