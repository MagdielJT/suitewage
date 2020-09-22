/**
* @NApiVersion 2.x
* @description ENUM para tabla procesose
* @author Aldo Chaman 
*/
define(["./sw_procesose_enum"],

   /**
    * 
    * @param procesose - Dato de tipo string que identifica el nombre del campo asignado a suitwage.
    * @returns  {JSON} {
    *       recordType: Tipo de registro,
    *       proe000: Subsidiaria/Empresa,
    *       proe001: No. consecutivo de base de acumulación,
    *       proe002: Descripción,
    *       proe003: 1 Fijo,
    *       proe004: Nombre de tabla,
    *      }
    */
    function(){
        return {
            recordType: "customrecord_sw_procesose",
            proe000: "custrecord_sw_proe000",
            proe001: "custrecord_sw_proe001",
            proe002: "custrecord_sw_proe002",
            proe003: "custrecord_sw_proe003",
            proe004: "custrecord_sw_proe004",
            
        }
    }

    );