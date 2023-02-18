//calcFunction.js
//JavaScript Document
Fcalc = document.calc;

FlagNewNum = false;

CurrentNum=0;
PendingOP="";

function NumPressed(Num){
	
	if(FlagNewNum){
		if(Fcalc.ReadOut.value == "0"){
	        Fcalc.ReadOut.value = Num;
		}else{
			Fcalc.ReadOut.value += Num;
		}
	}else{
		Fcalc.ReadOut.value = Num;
		FlagNewNum = true;
	}
}

function Clear(){
	Fcalc.ReadOut.value = "0";   //"0."
	FlagNewNum = false;
	
}

function Back(){
	
	if(Fcalc.ReadOut.value.length > 1){
		Fcalc.ReadOut.value =
				Fcalc.ReadOut.value.substring(0,Fcalc.ReadOut.value.length-1);
	}else{
		Fcalc.ReadOut.value = "0";
	}
}

function Neg(){
	Fcalc.ReadOut.value*=-1;
}


function Decimal(){
	
 // if(FlagNewNum == false)
	 if(!FlagNewNum){
		 Fcalc.ReadOut.value = "0.";
		 FlagNewNum = true;

	 }else{
		 
		 if((Fcalc.ReadOut.value).indexOf(".")==-1){
								Fcalc.ReadOut.value += ".";

		 }
	 }
	
}


// function Operation(Sign){
//
// 	switch(Sign){
// 		case '-':
// 		case '+':
// 		case '/':
// 		case '*':
// 		    CurrentNum=parseFloat(Fcalc.ReadOut.value);
// 		    PendingOP=Sign;
// 		    FlagNewNum = false;
//     	   break;
//
// 		case '%':
// 			Fcalc.ReadOut.value/=100;
// 			break;
//
// 		case '=':
// 		   switch(PendingOP){
// 			   case '-':
// 						CurrentNum-=parseFloat(Fcalc.ReadOut.value);
// 				break;
// 			   case '+':
// 						CurrentNum+=parseFloat(Fcalc.ReadOut.value);
// 				break;
// 				case '*':
// 						CurrentNum*=parseFloat(Fcalc.ReadOut.value);
// 					break;
//
// 			  case '/':
// 			 		if(Fcalc.ReadOut.value!=0){
// 						CurrentNum/=parseFloat(Fcalc.ReadOut.value);
// 					}
// 					else{
// 						CurrentNum = "Cannot divide by zero";
// 					}
//
// 				break;
// 		   }
//
// 		Fcalc.ReadOut.value = CurrentNum;
// 		FlagNewNum = false;
//
//
// 		break;
// 	}
//
// }



document.onkeydown = e => {
	if(e.key == "0" || e.key == "Num0")
	{
		NumPressed(0);
	}
	else if (e.key == "1" || e.key == "Num1")
	{
		NumPressed(1);
	}
	else if (e.key == "2" || e.key == "Num2")
	{
		NumPressed(2);
	}
	else if (e.key == "3" || e.key == "Num3")
	{
		NumPressed(3);
	}
	else if (e.key == "4" || e.key == "Num4")
	{
		NumPressed(4);
	}
	else if (e.key == "5" || e.key == "Num5")
	{
		NumPressed(5);
	}
	else if (e.key == "6" || e.key == "Num6")
	{
		NumPressed(6);
	}

	else if (e.key == "7" || e.key == "Num7")
	{
		NumPressed(7);
	}
	else if (e.key == "8" || e.key == "Num8")
	{
		NumPressed(8);
	}
	else if (e.key == "9" || e.key == "Num9")
	{
		NumPressed(9);
	}
	else if (e.key == "+" || e.key == "Num+")
	{
		Operation('+');
	}
	else if (e.key == "*" || e.key == "Num*" || e.key =="X" || e.key =="x")
	{
		Operation('*');
	}
	else if (e.key == "-" || e.key == "Num-" )
	{
		Operation('-');
	}
	else if (e.key == "/" || e.key == "Num/" )
	{
		Operation('/');
	}
	else if (e.key == "Enter" || e.key == "Numenter" )
	{
		Operation('=');
	}

	else if (e.key == "Backspace" || e.key == "Numback" )
	{
		Back();
	}

}

function Operation(Sign){

	switch(Sign){
		case '-':
		case '+':
		case '/':
		case '*':
			CurrentNum=parseFloat(Fcalc.ReadOut.value);
			PendingOP=Sign;
			FlagNewNum = false;
			break;

		case '%':
			Fcalc.ReadOut.value/=100;
			break;

		case '=':
			switch(PendingOP){
				case '-':
					CurrentNum-=parseFloat(Fcalc.ReadOut.value);
					break;
				case '+':
					CurrentNum+=parseFloat(Fcalc.ReadOut.value);
					break;
				case '*':
					CurrentNum*=parseFloat(Fcalc.ReadOut.value);
					break;

				case '/':
					if(Fcalc.ReadOut.value!=0){
						CurrentNum/=parseFloat(Fcalc.ReadOut.value);
					}
					else{
						CurrentNum = "Cannot divide by zero";
					}

					break;
			}

			Fcalc.ReadOut.value = CurrentNum;
			FlagNewNum = false;
			break;



	}

}

