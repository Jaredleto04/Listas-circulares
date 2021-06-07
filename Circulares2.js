class Base{
constructor(nombre,minutos){
    this.nombre=nombre;
    this.minutos=minutos;
    this.siguiente=null;
    this.info=function(){
    return '<div> Nombre de la base: '+ this.nombre +'<br> Minutos en que se tarda en llegar: '+ this.minutos +' minutos'+'<div>';
    }}}
class Rutatransporte{
constructor(){
    this.inicio=null
    }
    agregar(nuevo){
    if (this.inicio==null){ 
        this.inicio=nuevo;
        this.inicio.siguiente=this.inicio; 
    }
    else{
    let t=this.inicio; 
    if(t.siguiente==this.inicio) 
    {
        t.siguiente=nuevo;
        nuevo.siguiente=this.inicio; 
    }
    else{
    let t=this.inicio;
    while(t.siguiente!=this.inicio)
    {
        t=t.siguiente    
    }                     
    if(t.siguiente==this.inicio)
    {
        t.siguiente=nuevo;
        nuevo.siguiente=this.inicio; 
    }}}
        console.log(this.inicio); 
    }
    imprimir(){
    let res=" ";
    let t=this.inicio;
    while(t!=null){
        res+=t.info()+'<br>'; 
    if(t.siguiente==this.inicio){ 
        break
    } 
    else{ 
        t=t.siguiente;
    }}
        return res  
    }
    buscar(Busbase){
    let res2="";
    let t=this.inicio;
    while(t!=null)
    {
    if(t.nombre==Busbase){
        res2=t.info();
        return res2 
    }else{
    if(t.siguiente!=this.inicio) 
        t=t.siguiente;
    else{
    if(t.siguiente==this.inicio)
        break;
    }}}
    alert('No se encontro la base');
    return res2;   
    }
    eliminar(debase){
    if(this.inicio!=null){
    if(this.inicio.siguiente==this.inicio && this.inicio.nombre==debase){
        this.inicio=null;
        alert('Se borro exitosamente la Base');
    }else{
    if(this.inicio.nombre==debase && this.inicio.siguiente!=this.inicio){  
    let t=this.inicio;
    while(t.siguiente!=this.inicio){ 
        t=t.siguiente  
    }
    if(t.siguiente==this.inicio){ 
        t.siguiente=this.inicio.siguiente;
        this.inicio=this.inicio.siguiente;
        alert('Se borro exitosamente la Base');
    }
    }else{
    let t=this.inicio;
    while(t.siguiente.nombre!=debase){
        t=t.siguiente;
    }
    if(t.siguiente.nombre==debase && t.siguiente!=this.inicio)
    {
        t.siguiente=t.siguiente.siguiente;
        alert('Se borro exitosamente la Base');
    }}}}
        console.log(this.inicio); 
    }
    base(Base,hi,mi){
    let res41=" ";
    let moi1=mi;
    let t=this.inicio;
    while(t!=null)
    {
    if(t.nombre==Base){
    if(moi1<10){
        res41=hi+':'+'0'+mi+' '+t.nombre;
    }else
        res41=hi+':'+mi+' '+t.nombre;
        return res41;
    }else{
    if(t.siguiente!=this.inicio) 
        t=t.siguiente;
    else{
    if(t.siguiente==this.inicio) 
        break;
    }}}
    return res41;
    }
    createrecord(Base,hi,mi,hf,mf){
    let res3=" ";
    let hof=hf;
    let mof=mf;
    let hoi=hi;
    let moi=mi;
    let t=this.inicio;
    while(t!=null){
    if(t.nombre==Base){
    while(t!=null){
        moi+=t.siguiente.minutos;
        hoi;
    if(moi>60){
        moi=moi-60;
        hoi++
    let r;
    if(moi<10){
        r=hoi+':'+'0'+moi;
        res3+=r+' '+t.siguiente.nombre+'<br>';
    }else{
        r=hoi+':'+moi;
        res3+=r+' '+t.siguiente.nombre+'<br>';
    }
    }else{
    if(moi==60){
        moi=0;
        hoi++;
    let r2;
    if(moi<10){
        r2=hoi+':'+'0'+moi;
        res3+=r2+' '+t.siguiente.nombre+'<br>';
    }else{
        r2=hoi+':'+moi;
        res3+=r2+' '+t.siguiente.nombre+'<br>';
    }
    }else{
    if(moi<=59){
    let r3;
    if(moi<10){
        r3=hoi+':'+'0'+moi;
        res3+=r3+' '+t.siguiente.nombre+'<br>';
    }else{
        r3=hoi+':'+moi;
        res3+=r3+' '+t.siguiente.nombre+'<br>';
    }}}}
    if(moi>=mof && hoi>=hof){
        break
    }else{
        t=t.siguiente;
    }}
        return res3;
    }
    else{
    if(t.siguiente!=this.inicio)
        t=t.siguiente
    else{
    if(t.siguiente==this.inicio)
        break
    }}}
        alert('La base que puso no existe')
        return res3;
    }}
let Rutas= new Rutatransporte();

let guardar=document.getElementById('btnCrear');
guardar.addEventListener('click',()=>{
    let nom,min;
    nom=document.getElementById('nombrebase').value;
    min=Math.floor(document.getElementById('minutos').value);
    let base=new Base(nom,min);
    Rutas.agregar(base);
    alert('Se agrego exitosamente la base de transporte');
});

let listar=document.getElementById('btnListar');
listar.addEventListener('click',()=>{
    let res=document.getElementById('resultados');
    res.innerHTML='<h1>Listado</h1>'+Rutas.imprimir();
});

let buscar=document.getElementById('btnBuscar');
buscar.addEventListener('click',()=>{
    let res2=document.getElementById('resultados2');
    let Busbase=document.getElementById('buscarbase').value;
    res2.innerHTML=Rutas.buscar(Busbase);
});

let eliminar=document.getElementById('btnEliminar');
eliminar.addEventListener('click',()=>{
    let debase=document.getElementById('buscarbase').value;
    Rutas.eliminar(debase);
});

let crear=document.getElementById('btncrear2');
crear.addEventListener('click',()=>{
    let res3=document.getElementById('resultados3');
    let res4=document.getElementById('resultados2.5');
    let base=document.getElementById('Basei').value;
    let Hi=Math.floor(document.getElementById('Horai').value);
    let Mi=Math.floor(document.getElementById('Mini').value);
    let Hf=Math.floor(document.getElementById('Horaf').value);
    let Mf=Math.floor(document.getElementById('Minf').value);
    res4.innerHTML=Rutas.base(base,Hi,Mi)
    res3.innerHTML=Rutas.createrecord(base,Hi,Mi,Hf,Mf);

}); 