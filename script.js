const calculateTemp=()=>{
	const numberTemp=document.getElementById('temp').value;
	const tempSelected=document.getElementById('temp_diff');
	const valueTemp=temp_diff.options[tempSelected.selectedIndex].value;
    let result;
     const celtofah=(cel)=> {
    	let res=Math.round((cel*9/5)+32);
    	return res;
    }
    const fahtocel=(fah)=> {
    	let res=Math.round((fah-32)*5/9);
    	return res;
    }
    if(valueTemp=='cel')
    {
    	result=celtofah(numberTemp);
    	document.getElementById('resultContainer').innerHTML=`${result} \u00B0F`;

    }
    else if(valueTemp=='fah')
    {
    	result=fahtocel(numberTemp);
    	document.getElementById('resultContainer').innerHTML=`${result} \u00B0 C`;

    }
   }


