//let variable1:number=100;
//console.log('hola mensaje hola');
//console.error('Ha ocurrido un error');
//console.warn('Puede que algo ande mal');
//Crear variable : var nombreVariable:Tipo(any,number,boolean,string, enum, etc.);
//nombreVariable=20;
//revisar en consola ----> console.log(nombreVariable);


//regiones y 
var comunas:any = {
    Valparaíso: ["Valparaíso", "Casablanca", "Concón", "Juan Fernández",
                "Puchuncaví", "Quintero", "Viña del Mar", "Isla de Pascua",
                "Los Andes", "Calle Larga", "Rinconada", "San Esteban",
                "La Ligua", "Cabildo", "Papudo", "Petorca", "Zapallar",
                "Quillota", "Calera", "Hijuelas", "La Cruz", "Nogales",
                "San Antonio", "Algarrobo", "Cartagena", "El Quisco",
                "El Tabo", "Santo Domingo", "San Felipe", "Catemu", 
                "Llaillay", "Panquehue", "Putaendo", "Santa María",
                "Quilpué", "Limache", "Olmué", "Villa Alemana"],
    Coquimbo:   ["La Serena", "Coquimbo", "Andacollo", "La Higuera",
                "Paiguano", "Vicuña", "Illapel", "Canela", "Los Vilos",
                "Salamanca", "Ovalle", "Combarbalá", "Monte Patria",
                "Punitaqui", "Río Hurtado"]
}

let idCiudad:any;
let region:any = document.getElementById("region");
let comuna:any = document.getElementById("comuna");


function mostrarComunaRegion(value:any) {
    if(value.length==0) comuna.innerHTML = "<option></option>";
    else {
        var opcionesDeComunas = "";
        for(idCiudad in comunas[value]) {
            opcionesDeComunas+="<option>"+comunas[value][idCiudad]+"</option>";
        }
        comuna.innerHTML = opcionesDeComunas;
    }
}
function resetearOpcion() {
    region.selectedIndex = 0;
    comuna.selectedIndex = 0;
}

