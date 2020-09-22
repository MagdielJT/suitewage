/**
* @NApiVersion 2.x
* @description ENUM para tabla nominase
* @author Aldo Chaman 
*/
define(["./sw_nominase_enum"],

   /**
    * 
    * @param nominase - Dato de tipo string que identifica el nombre del campo asignado a suitwage.
    * @returns  {JSON} {
    *       recordType: Tipo de registro,
    *       nome000: Subsidiaria/empresa,
    *       nome001: Número del Periodo del usuario,
    *       nome002: Colección con la que se procesó el período,
    *       nome004: Fecha de aplicación,
    *       nome005: Fecha de Pago,
    *       nome006: Fecha de inicio,
    *       nome007: Fecha Fin,
    *       nome008: Tipo de Nóminas del periodo,
    *       nome009: ¿Periodo cerrado?,
    *       nome010: Descripción,
    *       nome012: Indica que en ese periodo los recibos son visibles para su consulta en el portal de empleados,
    *       nome013: Periodo Padre,
    *       nome014: Tipo nomina SAT,
    *       nome015: Periodicidad SAT,
    *       nome016: Denominación de Nómina,
    *       nome017: Aplica Ajusta a Subsidio,
    *      }
    */    

    function(nominase){
        return {
            recordType: "customrecord_sw_nominase",
            nome000: "custrecord_sw_nome000",
            nome001: "custrecord_sw_nome001",
            nome002: "custrecord_sw_nome002",
            nome004: "custrecord_sw_nome004",
            nome005: "custrecord_sw_nome005",
            nome006: "custrecord_sw_nome006",
            nome007: "custrecord_sw_nome007",
            nome008: "custrecord_sw_nome008",
            nome009: "custrecord_sw_nome009",
            nome010: "custrecord_sw_nome010",
            nome012: "custrecord_sw_nome012",
            nome013: "custrecord_sw_nome013",
            nome014: "custrecord_sw_nome014",
            nome015: "custrecord_sw_nome015",
            nome016: "custrecord_sw_nome016",
            nome017: "custrecord_sw_nome017",

            
        }
    }

    );