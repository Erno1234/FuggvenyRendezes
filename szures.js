export function szurNevSzerint(OBJEKTUMLISTA, szuresfeltetel){
const eredmenyLista = OBJEKTUMLISTA.filter(function(kutya) {
    console.log(kutya);
    return kutya.nev.toUpperCase().includes(szuresfeltetel.toUpperCase());
  });
  return eredmenyLista;

}
export function szurKorSzerint(OBJEKTUMLISTA, szuresfeltetel){
  const eredmenyLista = OBJEKTUMLISTA.filter(function(kutya){
    return eval(kutya.kor + szuresfeltetel);

  });
  return eredmenyLista;
}