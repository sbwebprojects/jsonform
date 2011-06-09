var lancamento;

describe('Populate with jsonform when have id property', function() {

    beforeEach( function () {
        jQuery("body").html("");
        jQuery(global["template"]).appendTo("body");
        lancamento = {
            empresa: {id: 2, name: "Teste"},
            partidas: [
                {conta: {codigo:"1.02.0002", nome: "Compras"}, natureza: "1"},
                {conta: {codigo:"1.02.0001", nome: "Banco"},   natureza: "-1"}
            ],
            description: "Teste",
            value: "125,67",
            date: "12/03/1999"
        };
    });

    it('should populate nested objects using "populate method"', function () {
        jQuery('#jsonform').populate(lancamento);
        expect(jQuery("#partidas\\[0\\]\\.conta\\.codigo").val().toString()).toEqual("1.02.0002");
    });
    
    it('should populate nested objects using "jsonform method"', function () {
        jQuery('#jsonform').jsonform(lancamento, function(){
            expect(jQuery("#partidas\\[0\\]\\.conta\\.codigo").val().toString()).toEqual("1.02.0002");
        });
    });

});

describe('Populate with jsonform when have name property', function() {

    beforeEach( function () {
        jQuery("body").html("");
        jQuery(global["templateWithName"]).appendTo("body");
        lancamento = {
            empresa: {id: 2, name: "Teste"},
            partidas: [
                {conta: {codigo:"1.02.0001", nome: "Banco"}, natureza: "-1"},
                {conta: {codigo:"1.01.0001", nome: "Caixa"}, natureza: "1"}
            ],
            description: "Teste",
            value: "47,32",
            date: "12/03/1999"
        };
    });

    it('should populate nested objects', function () {
        var byName = true;
        jQuery("form[name='jsonform']").populate(lancamento, byName);
        var value = jQuery("[name='partidas\\[0\\]\\.conta\\.codigo']").val().toString();
        expect(value).toEqual("1.02.0001");
    });

});

