  parent.document.getElementById("main-content").style.height=document.body.scrollHeight + "px"; 
  parent.fixHeight();
  
  function load(url){
	  parent.load(url);
  }