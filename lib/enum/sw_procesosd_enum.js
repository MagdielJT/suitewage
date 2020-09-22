/**
* @NApiVersion 2.x
* @description ENUM para tabla procesosd
* @author Aldo Chaman 
*/
define(["./sw_procesosd_enum"],

   /**
    * 
    * @param procesosd - Dato de tipo string que identifica el nombre del campo asignado a suitwage.
    * @returns  {JSON} {
    *       recordType: Tipo de registro,
    *       prod000: Subsidiaria/empresa,
    *       prod001: Número consecutivo de la base de acumulación,
    *       prod002: Fórmula,
    *       prod003: Consecutivo
    *       prod004: 0 Fijo,
    *       prod005: Tipo de operación,
    *       procesose: SW Proceso Encabezado,
    *      }
    */    

    function(procesosd){
        return {
            recordType: "customrecord_sw_procesosd",
            prod000: "custrecord_sw_prod000",
            prod001: "custrecord_sw_prod001",
            prod002: "custrecord_sw_prod002",
            prod003: "custrecord_sw_prod003",
            prod004: "custrecord_sw_prod004",
            prod005: "custrecord_sw_prod005",
            procesose: "custrecord_sw_procesose",

            
        }
    }

    );