/**
* @NApiVersion 2.x
* @description ENUM para tabla prestamos
* @author Aldo Chaman 
*/
define(["./sw_prestamos_enum"],

   /**
    * 
    * @param prestamos - Dato de tipo string que identifica el nombre del campo asignado a suitwage.
    * @returns  {JSON} {
    *       recordType: Tipo de registro,
    *       pred000: Subsidiaria/empresa,
    *       pred001: Tipo de Nómina,
    *       pred002: Empleado,
    *       pred003: Fórmula,
    *       pred004: Referencia,
    *       pred005: Fecha de entrega del préstamo,
    *       pred006: Saldo Inicial,
    *       pred007: Numero de periodos a aplicar,
    *       pred008: Saldo Actual,
    *       pred009: Número de periodos aplicados,
    *       pred010: Porcentaje del Descuento,
    *       pred011: Monto a aplicar por periodo,
    *       pred012: Último monto aplicado en el período mas reciene,
    *       pred013: Fecha primer descuento de Nómina,
    *       pred014: Fómula de intereses,
    *       pred015: Número de Cheque Aplicado (Módulo de Caja y Fondo de Ahorro únicamente),
    *       pred016: Fórmula préstamos contables,
    *      }
    */    

    function(prestamos){
        return {
            recordType: "customrecord_sw_prestamos",
            pred000: "custrecord_sw_pred000",
            pred001: "custrecord_sw_pred001",
            pred002: "custrecord_sw_pred002",
            pred003: "custrecord_sw_pred003",
            pred004: "custrecord_sw_pred004",
            pred005: "custrecord_sw_pred005",
            pred006: "custrecord_sw_pred006",
            pred007: "custrecord_sw_pred007",
            pred008: "custrecord_sw_pred008",
            pred009: "custrecord_sw_pred009",
            pred010: "custrecord_sw_pred010",
            pred011: "custrecord_sw_pred011",
            pred012: "custrecord_sw_pred012",
            pred013: "custrecord_sw_pred013",
            pred014: "custrecord_sw_pred014",
            pred015: "custrecord_sw_pred015",
            pred016: "custrecord_sw_pred016",
   
        }
    }

    );