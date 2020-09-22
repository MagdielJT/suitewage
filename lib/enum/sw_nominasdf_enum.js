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
    *       ndf_nomd000: Subsidiaria/empresa,
    *       ndf_nomd001: Número de periodo interno
    *       ndf_nomd002: Número de empleado,
    *       ndf_nomd003: Fórmula,
    *       ndf_nomd004: Importe,
    *       ndf_nomd005: Días,
    *       ndf_nomd006: Referencia,
    *       ndf_nomd007: Formula de Importe desglosada,
    *       ndf_nomd008: Formulas de Días desglosada,
    *      }
    */
    function(nominasdf){
        return {
            recordType: "customrecord_sw_nominasdf",
            ndf_nomd000: "custrecord_sw_ndf_nomd000",
            ndf_nomd001: "custrecord_sw_ndf_nomd001",
            ndf_nomd002: "custrecord_sw_ndf_nomd002",
            ndf_nomd003: "custrecord_sw_ndf_nomd003",
            ndf_nomd004: "custrecord_sw_ndf_nomd004",
            ndf_nomd005: "custrecord_sw_ndf_nomd005",
            ndf_nomd006: "custrecord_sw_ndf_nomd006",
            ndf_nomd007: "custrecord_sw_ndf_nomd007",
            ndf_nomd008: "custrecord_sw_ndf_nomd008",

            
        }
    }

    );