/**
* @NApiVersion 2.x
* @description ENUM para tabla sucursal
* @author Aldo Chaman 
*/
define(["./sw_sucursal_enum"],

   /**
    * 
    * @param sucursal - Dato de tipo string que identifica el nombre del campo asignado a suitwage.
    * @returns  {JSON} {
    *       recordType: Tipo de registro,
    *       sucd000: Subsidiaria/empresa,
    *       sucd003: Registro Federal de Contribuyentes,
    *       sucd004: Calle,
    *       sucd005: Colonia,
    *       sucd006: Código Postal,
    *       sucd007: Entidad Federativa,
    *       sucd008: Porcentaje Impuesto Estatal,
    *       sucd009: Area Geografica,
    *       sucd011: Mínimo a cobrar,
    *       sucd012: Registro Patronal,
    *       sucd013: Número de guía del IMSS,
    *       sucd014: Disponible texto 1,
    *       sucd015: Puesto del representante legal,
    *       sucd016: Porcentaje de Riesgo de Trabajo,
    *       sucd017: Nombre del representante legal,
    *       sucd018: RFC del Representante Legal,
    *       sucd019: CURP del Representante Legal,
    *       sucdarchivosello: SucDArchivoSello,
    *       sucdarchivokey: SucDArchivoKey,
    *       sucdarchivopfx: SucDArchivoPFX,
    *       sucdriesgopuesto: SucDRiesgoPuesto,
    *       sucdregimenfiscal: SucDRegimenFiscal,
    *       sucdpasswordkey: SucDPasswordKey,
    *       sucd010: Imagen,
    *      }
    */    

    function(sucursal){
        return {
            recordType: "customrecord_sw_sucursal",
            sucd000: "custrecord_sw_sucd000",
            sucd003: "custrecord_sw_sucd003",
            sucd004: "custrecord_sw_sucd004",
            sucd005: "custrecord_sw_sucd005",
            sucd006: "custrecord_sw_sucd006",
            sucd007: "custrecord_sw_sucd007",
            sucd008: "custrecord_sw_sucd008",
            sucd009: "custrecord_sw_sucd009",
            sucd011: "custrecord_sw_sucd011",
            sucd012: "custrecord_sw_sucd012",
            sucd013: "custrecord_sw_sucd013",
            sucd014: "custrecord_sw_sucd014",
            sucd015: "custrecord_sw_sucd015",
            sucd016: "custrecord_sw_sucd016",
            sucd017: "custrecord_sw_sucd017",
            sucd018: "custrecord_sw_sucd018",
            sucd019: "custrecord_sw_sucd019",
            sucdarchivosello: "custrecord_sw_sucdarchivosello",
            sucdarchivokey: "custrecord_sw_sucdarchivokey",
            sucdarchivopfx: "custrecord_sw_sucdarchivopfx",
            sucdriesgopuesto: "custrecord_sw_sucdriesgopuesto",
            sucdregimenfiscal: "custrecord_sw_sucdregimenfiscal",
            sucdpasswordkey: "custrecord_sw_sucdpasswordkey",
            sucd010: "custrecord_sw_sucd010",

            
        }
    }

    );