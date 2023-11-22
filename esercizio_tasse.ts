abstract class Tasse {
  codredd: number;
  redditoLordo: number;
  tasseirpef: number;
  tasseinps: number;

  constructor(_codredd: number, _redditoLordo: number, _tasseirpef: number, _tasseinps: number) {
    this.codredd = _codredd;
    this.redditoLordo = _redditoLordo;
    this.tasseirpef = _tasseirpef;
    this.tasseinps = _tasseinps;
  }

  abstract getUtileTasse(): any;
  abstract getTasseIrpef(): any;
  abstract getTasseInps(): any;
}

class Lavoratore extends Tasse {
  constructor(_codredd: number, _redditoLordo: number, _tasseirpef: number, _tasseinps: number) {
    super(_codredd, _redditoLordo, _tasseirpef, _tasseinps);
  }

  getUtileTasse(): any {
    let utileTasse = this.redditoLordo - ((this.redditoLordo * this.codredd) / 100);
    return utileTasse;
  }
  getTasseIrpef(): any {
    let utileIrpef = (this.getUtileTasse() * this.tasseirpef) / 100;
    return utileIrpef;
  }
  getTasseInps(): any {
    let utileInps = (this.getUtileTasse() * this.tasseinps) / 100;
    return utileInps;
  }
  getRedditoNetto(): any {
    let netto = this.getUtileTasse() - this.getTasseIrpef() - this.getTasseInps();
    return netto;
  }
}

let professionista = new Lavoratore(22, 200000, 5, 25);

console.log("Il professionista dal reddito lordo di " +
    professionista.redditoLordo +
    " ha un reddito annuo di " +
    professionista.getRedditoNetto() +
    " tolta l'iva del " +
    professionista.codredd +
    "%. le tasse Irpef ammontano a " +
    professionista.getTasseIrpef() +
    "€, e le tasse Inps ammontano a " +
    professionista.getTasseInps()
);

let artigiano = new Lavoratore(22, 200000, 15, 19);

console.log("L'artigiano dal reddito lordo di " +
artigiano.redditoLordo +
" ha un reddito annuo di " +
artigiano.getRedditoNetto() +
" tolta l'iva del " +
artigiano.codredd +
"%. le tasse Irpef ammontano a " +
artigiano.getTasseIrpef() +
"€, e le tasse Inps ammontano a " +
artigiano.getTasseInps());

let commerciante = new Lavoratore(22, 100000, 15, 35);

console.log("Il commerciante dal reddito lordo di " +
commerciante.redditoLordo +
" ha un reddito annuo di " +
commerciante.getRedditoNetto() +
" tolta l'iva del " +
commerciante.codredd +
"%. le tasse Irpef ammontano a " +
commerciante.getTasseIrpef() +
"€, e le tasse Inps ammontano a " +
commerciante.getTasseInps());


