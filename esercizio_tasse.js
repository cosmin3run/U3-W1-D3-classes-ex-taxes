var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Tasse = /** @class */ (function () {
    function Tasse(_codredd, _redditoLordo, _tasseirpef, _tasseinps) {
        this.codredd = _codredd;
        this.redditoLordo = _redditoLordo;
        this.tasseirpef = _tasseirpef;
        this.tasseinps = _tasseinps;
    }
    return Tasse;
}());
var Lavoratore = /** @class */ (function (_super) {
    __extends(Lavoratore, _super);
    function Lavoratore(_codredd, _redditoLordo, _tasseirpef, _tasseinps) {
        return _super.call(this, _codredd, _redditoLordo, _tasseirpef, _tasseinps) || this;
    }
    Lavoratore.prototype.getUtileTasse = function () {
        var utileTasse = this.redditoLordo - ((this.redditoLordo * this.codredd) / 100);
        return utileTasse;
    };
    Lavoratore.prototype.getTasseIrpef = function () {
        var utileIrpef = (this.getUtileTasse() * this.tasseirpef) / 100;
        return utileIrpef;
    };
    Lavoratore.prototype.getTasseInps = function () {
        var utileInps = (this.getUtileTasse() * this.tasseinps) / 100;
        return utileInps;
    };
    Lavoratore.prototype.getRedditoNetto = function () {
        var netto = this.getUtileTasse() - this.getTasseIrpef() - this.getTasseInps();
        return netto;
    };
    return Lavoratore;
}(Tasse));
var professionista = new Lavoratore(22, 200000, 5, 25);
console.log("Il professionista dal reddito lordo di " +
    professionista.redditoLordo +
    " ha un reddito annuo di " +
    professionista.getRedditoNetto() +
    " tolta l'iva del " +
    professionista.codredd +
    "%. le tasse Irpef ammontano a " +
    professionista.getTasseIrpef() +
    "€, e le tasse Inps ammontano a " +
    professionista.getTasseInps());
var artigiano = new Lavoratore(22, 200000, 15, 19);
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
var commerciante = new Lavoratore(22, 100000, 15, 35);
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
