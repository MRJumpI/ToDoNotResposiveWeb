
//START-blob
const tween= KUTE.fromTo(
			"#b1",
			{path:'#b1'},
			{path:'#b2'},
			{ repeat:999,duration:3000, yoyo:true}
			)

			tween.start()


//END-blob

	document.querySelector(".first").addEventListener("click", ()=>{

			document.querySelector(".main").classList.add("active-main");
			setTimeout(()=>{
				document.querySelector(".first").style.display = "none"
			},5000);
	})


document.querySelector(".Add").addEventListener('click',()=>{

	if(document.querySelector("#taketask").value==""){ alert('Please Write Task!'); return;}
	const data= document.querySelector("#taketask").value;
	const div=document.createElement("div");
	const text=document.createElement("h1");
	const btndiv=document.createElement("div");
	const upperdiv=document.createElement("div");
	const imgCheck=document.createElement("img");
	const imgDelete=document.createElement("img");
	const btn1=document.createElement("button");
	const btn2=document.createElement("button");
	const span=document.createElement("span");
	//setAttribute(nameofArt,value)
	imgCheck.setAttribute('src', "./checked.png");

	//setAttribute(nameofArt,value)
	imgDelete.setAttribute('src', "./multiply.png");

	const decp=document.querySelector("#decp").value;

	span.innerHTML=decp;

	text.innerHTML=data;
	div.classList.add("card");
	btndiv.classList.add("btns");

	btn1.appendChild(imgCheck);
	btn2.appendChild(imgDelete);
	btn1.setAttribute("class", "cmpt");
	btn2.setAttribute("class", "remove");
	btndiv.appendChild(btn1);
	btndiv.appendChild(btn2);

	upperdiv.appendChild(text);
	upperdiv.appendChild(btndiv);
	div.appendChild(upperdiv);
	div.appendChild(span);
	document.querySelector(".checkList").appendChild(div);

})


// line 

document.addEventListener('click',(e)=>{
	console.log(e.target)
	if(e.target==document.querySelector("#taketask"))
		{
			document.querySelector(".line").style.transform = 'scale(1)';
			document.querySelector("#labeltask").classList.add("activelabel");
					}
	else {
			document.querySelector(".line").style.transform = 'scale(0)';		
		
			document.querySelector("#labeltask").classList.remove("activelabel");
			}		

	var c=document.querySelectorAll(".card");
	var cmplt=document.querySelectorAll(".cmpt");
	var del=document.querySelectorAll(".remove");
	
	c.forEach((val)=>{
		if(e.target==val)
		{
			
			val.classList.toggle("cardactive")
		}
		else {
				
			val.classList.remove("cardactive")
			}

	})
	
	cmplt.forEach((val)=>{
		
		if(e.target.parentNode==val)
		{
				 	alert("Congratulations!");
					console.log(e.target.parentNode.parentNode.parentNode.parentNode);	
					deleteCard(e.target.parentNode.parentNode.parentNode.parentNode);				
		
		}	
	})		

	del.forEach((val)=>{
		
		if(e.target.parentNode==val)
		{
		 	var r=confirm("Are you Sure to Delete this Task!");
			if(r){
				console.log(e.target.parentNode.parentNode.parentNode.parentNode);	
				deleteCard(e.target.parentNode.parentNode.parentNode.parentNode);	
			}
			else
			{
				//do nothing
			}
		}	
	})		
})

function deleteCard(node){
	node.parentNode.removeChild(node);
}

// function checked(){

// }

// function delete(){
// 	
// }
