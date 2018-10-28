function strangeSum(a, b) {
    
	   if (!((typeof a === 'number' ) && (a/parseInt(a)===1)&&(typeof b === 'number' ) && (b/parseInt(b)===1)))
	  { 
	  return null;
	  }
	  if (a===b)
	  {
		  return 3*(a+b);
	  }
	  else 
	  {  
		  return a+b;
  }
}