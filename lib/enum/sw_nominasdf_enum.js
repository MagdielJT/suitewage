/**
* @NApiVersion 2.x
* @description ENUM para tabla nominasdf
* @author Aldo Chaman 
*/
define(["./sw_nominasdf_enum"],

   /**
    * 
    * @param nominasdf - Dato de tipo string que identifica el nombre del campo asignado a suitwage.
    * @returns  {JSON} {
    *       recordType: Tipo de registro,
    *       nomd000: Subsidiaria/empresa,
    *       nomd001: Número de periodo interno
    *       nomd002: Número de empleado,
    *       nomd003: Fórmula,
    *       nomd004: Importe,
    *       nomd005: Días,
    *       nomd006: Referencia,
    *       nomd007: Formula de Importe desglosada,
    *       nomd008: Formulas de Días desglosada,
    *      }
    */
    function(nominasdf){
        return {
            recordType: "customrecord_sw_nominasdf",
            nomd000: "custrecord_sw_ndf_nomd000",
            nomd001: "custrecord_sw_ndf_nomd001",
            nomd002: "custrecord_sw_ndf_nomd002",
            nomd003: "custrecord_sw_ndf_nomd003",
            nomd004: "custrecord_sw_ndf_nomd004",
            nomd005: "custrecord_sw_ndf_nomd005",
            nomd006: "custrecord_sw_ndf_nomd006",
            nomd007: "custrecord_sw_ndf_nomd007",
            nomd008: "custrecord_sw_ndf_nomd008",

            
        }
    }

    );