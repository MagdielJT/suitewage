/**
* @NApiVersion 2.x
* @description ENUM para tabla areas
* @author Aldo Chaman 
*/
define(["./sw_areas_enum"],

   /**
    * 
    * @param areas - Dato de tipo string que identifica el nombre del campo asignado a suitwage.
    * @returns  {JSON} {
    *       recordtype: tipo de registro,
    *       ared000: Subsidiaria/Empresa,
    *       ared003: Numero de Sucursal,
    *       aredregpatron: Registro Patronal,
    *       aredguia: Número de Guía,
    *       aredregimenfiscal: Area de Regimen Fiscal,
    *      }
    */
    function(areas){
        return {
            recordType: "customrecord_sw_areas",
            ared000: "custrecord_sw_ared000",
            ared003: "custrecord_sw_ared003",
            aredregpatron: "custrecord_sw_aredregpatron",
            aredguia: "custrecord_sw_aredguia",
            aredregimenfiscal: "custrecord_sw_aredregimenfiscal",  
        }
    }

    );