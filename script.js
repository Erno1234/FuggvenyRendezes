import{SZAMLISTA, SZOVEGLISTA, OBJEKTUMLISTA} from "./adat.js";
import { rendezesSzam,rendezesSzoveg, veletlenSorrend, rendezesObjektum } from "./rendezes.js";
import { szurNevSzerint, szurKorSzerint } from "./szures.js";
$(function(){
    console.log(SZOVEGLISTA);
    rendezesSzoveg(SZOVEGLISTA);
    console.log(SZOVEGLISTA);
    console.log("------------------------");
    console.log(SZAMLISTA);
    rendezesSzam(SZAMLISTA);
    console.log(SZAMLISTA);
    console.log("------------------------");
    console.log(SZAMLISTA);
    veletlenSorrend(SZAMLISTA);
    console.log(SZAMLISTA);
    console.log("------------------------");
    console.log(OBJEKTUMLISTA);
    rendezesObjektum(OBJEKTUMLISTA,"kor");
    console.log(OBJEKTUMLISTA);
    console.log("------------------------");
    console.log(OBJEKTUMLISTA);
    rendezesObjektum(OBJEKTUMLISTA,"nev");
    console.log(OBJEKTUMLISTA);
    console.log("------------------------");
    console.log(OBJEKTUMLISTA);
    rendezesObjektum(OBJEKTUMLISTA,"fajta");
    console.log(OBJEKTUMLISTA);
    console.log("------------------------");
    console.log("Előtte")
    console.log(OBJEKTUMLISTA);
    let szuresfeltetel ="d";
    let szurtLISTA = szurNevSzerint(OBJEKTUMLISTA, szuresfeltetel)
    console.log(OBJEKTUMLISTA);
    console.log(szurtLISTA);
    console.log("------------------------");
    szuresfeltetel = "<12";
    szurtLISTA = szurKorSzerint(OBJEKTUMLISTA, szuresfeltetel)
    console.log(OBJEKTUMLISTA);
    console.log(szurtLISTA);
    const nevELEM = $("#nev");
    
    nevELEM.on("keyup",function(){
        szuresfeltetel = nevELEM.val();
        szurtLISTA = szurNevSzerint(OBJEKTUMLISTA, szuresfeltetel)
        console.log(OBJEKTUMLISTA);})
});
