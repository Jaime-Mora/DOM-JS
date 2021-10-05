arreglo=[];
txt="";
indice=0;
elemento="";
registroactual=0; 
totalderegistros=0;
desplegarRegistro();
habilitar();

document.getElementById("Nombre").disabled = true;
document.getElementById("Efectosquecausaenloshumanos").disabled = true;
document.getElementById("Tratamiento").disabled = true;
document.getElementById("Fotografia").disabled = true;

function habilitar()
{
  document.getElementById("Nombre").disabled = false;
  document.getElementById("Efectosquecausaenloshumanos").disabled = false;
  document.getElementById("Tratamiento").disabled = false;
  document.getElementById("Fotografia").disabled = false;
}

function desplegarRegistro ()
{   
  if (totalderegistros==0) 
  elemento=document.getElementById("Titulo").innerHTML = "No hay registros capturados actualmente!! ";
  else
  {
    elemento=document.getElementById("Titulo").innerHTML = registroactual + " de " + totalderegistros;
    elemento=document.getElementById("Nombre").value=arreglo[registroactual-1].Nombre;
    elemento=document.getElementById("Efectosquecausaenloshumanos").value=arreglo[registroactual-1].Efectosquecausaenloshumanos;
    elemento=document.getElementById("Tratamiento").value=arreglo[registroactual-1].Tratamiento;
    elemento=document.getElementById("Fotografia").value=arreglo[registroactual-1].Fotografia;
}  }


function Buscar()
{
let x = document.getElementById("campo").selectedIndex;
let bus=document.getElementById("textoabuscar").value
document.getElementById("resultado").value="";

if (x==0){
for(let i=1; i<=totalderegistros; i++){
  if(bus==arreglo[i-1]["Nombre"]){
        txt=txt+i+": "+bus+" <=== Se encontro en el registro numero "+i+"<br>"
        document.getElementById("resultado").innerHTML=txt;
      }
    }
    if(txt==""){
      document.getElementById("resultado").innerHTML="No se encontraron coincidencias"
      }
      document.getElementById("textoabuscar").value="";
    txt=""
    }
    
  

else if (x==1){
for(let i=1; i<=totalderegistros; i++){
  if(bus==arreglo[i-1]["Efectosquecausaenloshumanos"]){
    txt=txt+i+": "+bus+" <=== Se encontro en el registro numero "+i+"<br>"
        document.getElementById("resultado").innerHTML=txt;
      }
    }
    if(txt==""){
      document.getElementById("resultado").innerHTML="No se encontraron coincidencias"
      }
      document.getElementById("textoabuscar").value="";
    txt=""
    }
else if (x==2){
for(let i=1; i<=totalderegistros; i++){
  if(bus==arreglo[i-1]["Tratamiento"]){
    txt=txt+i+": "+bus+" <=== Se encontro en el registro numero "+i+"<br>"
        document.getElementById("resultado").innerHTML=txt;
      }
    }
    if(txt==""){
      document.getElementById("resultado").innerHTML="No se encontraron coincidencias"
      }
      document.getElementById("textoabuscar").value="";
    txt=""
    }
else {
for(let i=1; i<=totalderegistros; i++){
  if(bus==arreglo[i-1]["Fotografia"]){
    txt=txt+i+": "+bus+" <=== Se encontro en el registro numero "+i+"<br>"
        document.getElementById("resultado").innerHTML=txt;
      }
    }
    if(txt==""){
      document.getElementById("resultado").innerHTML="No se encontraron coincidencias"
      }
      document.getElementById("textoabuscar").value="";
    txt=""
    }
}






function Anterior ()             //Accion del boton " Anterior "       
{
  if(totalderegistros==0){
    alert("No hay ningun registro")
  }else{
  if (registroactual==1)
  alert(" Ya estas en el primer registro!"); 
  else{
    registroactual--;
    desplegarRegistro();
  }
}
}



function Primero()                 //Accion del boton " primero "
{
  if(totalderegistros==0){
    alert("No hay ningun registro")
  }else{
  if (registroactual==1){
    alert("Ya estas en el primer registro")}
    else{
  registroactual=1;
  desplegarRegistro();
    }
}
}



function Siguiente()               //Accion del boton " Siguiente "
{
  if(totalderegistros==0){
    alert("No hay ningun registro")
  }else{
  if (registroactual==totalderegistros) 
  alert (" Ya estas en el ultimo registro! ");
  else{
    registroactual++;
    desplegarRegistro();
  }
}
}


function Ultimo()                 //Accion del boton " Ultimo "
{
  if(totalderegistros==0){
    alert("No hay ningun registro")
  }else{
    if (registroactual==totalderegistros){
      alert("Ya estas en el ultimo registro")}
    else{
    registroactual=totalderegistros;
    desplegarRegistro();
    
  }
}
}



function Agregar() {
    if (document.getElementById("Nuevo").innerHTML=="Nuevo")
    {
      habilitar();
     document.getElementById("Nombre").value="";
     document.getElementById("Efectosquecausaenloshumanos").value="";
     document.getElementById("Tratamiento").value="";
     document.getElementById("Fotografia").value="";
     document.getElementById("Nuevo").innerHTML="Guardar";
    } else 
    { 
      let Nombret=document.getElementById("Nombre").value;
      let Efectosquecausaenloshumanost=document.getElementById("Efectosquecausaenloshumanos").value;
      let Tratamientot=document.getElementById("Tratamiento").value;
      let Fotografiat=document.getElementById("Fotografia").value;
      if(!!Nombret && !!Efectosquecausaenloshumanost && !!Tratamientot && !!Fotografiat)
      {
      arreglo.push({Nombre:Nombret,Efectosquecausaenloshumanos:Efectosquecausaenloshumanost,Tratamiento:Tratamientot,Fotografia:Fotografiat});
      totalderegistros=arreglo.length;
      registroactual=totalderegistros;
      desplegarRegistro();
      document.getElementById("Nombre").disabled = true;
      document.getElementById("Efectosquecausaenloshumanos").disabled = true;
      document.getElementById("Tratamiento").disabled = true;
      document.getElementById("Fotografia").disabled = true;
      document.getElementById("Nuevo").innerHTML="Nuevo";
      }else 
      alert ("Faltan datos por capturar");
    }

}
