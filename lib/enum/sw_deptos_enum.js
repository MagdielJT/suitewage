/**
* @NApiVersion 2.x
* @description ENUM para tabla deptos
* @author Aldo Chaman 
*/
define(["./sw_deptos_enum"],

   /**
    * 
    * @param deptos - Dato de tipo string que identifica el nombre del campo asignado a suitwage.
    * @returns  {JSON} {
    *       recordType: Tipo de registro,
    *       depd000: Subsidiria/Empresa,
    *       depd003: Area,
    *       depd004: Norma de Reparto,
    *       depd005: Cuenta Contable,
    *       depd006: Disponible texto 2,
    *       depd007: Sucursal,
    *       depd008: Disponible numerico 1,
    *      }
    */

    function(deptos){
        return {
            recordType: "customrecord_sw_deptos",
            depd000: "custrecord_sw_depd000",
            depd003: "custrecord_sw_depd003",
            depd004: "custrecord_sw_depd004",
            depd005: "custrecord_sw_depd005",
            depd006: "custrecord_sw_depd006",
            depd007: "custrecord_sw_depd007",
            depd008: "custrecord_sw_depd008",

            
        }
    }

    );