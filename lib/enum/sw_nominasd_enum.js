/**
* @NApiVersion 2.x
* @description ENUM para tabla nominasd
* @author Aldo Chaman 
*/
define(["./sw_nominasd_enum"],

   /**
    * 
    * @param nominasd - Dato de tipo string que identifica el nombre del campo asignado a suitwage.
    * @returns  {JSON} {
    *       recordType: Tipo de registro,
    *       nomd000: Subsidiaria/Empresa,
    *       nomd001: Numero de periodo interno,
    *       nomd002: Numero de empleado,
    *       nomd003: Concepto,
    *       nomd004: Importe,
    *       nomd005: Dias,
    *       nomd006: Referencia,
    *       nomd007: Fórmula de importe desglosada,
    *       nomd008: Formulas de dias desglosada,
    *      }
    */    
    function(nominasd){
        return {
            recordType: "customrecord_sw_nominasd",
            nomd000: "custrecord_sw_nomd000",
            nomd001: "custrecord_sw_nomd001",
            nomd002: "custrecord_sw_nomd002",
            nomd003: "custrecord_sw_nomd003",
            nomd004: "custrecord_sw_nomd004",
            nomd005: "custrecord_sw_nomd005",
            nomd006: "custrecord_sw_nomd006",
            nomd007: "custrecord_sw_nomd007",
            nomd008: "custrecord_sw_nomd008",   
        }
    }

    );