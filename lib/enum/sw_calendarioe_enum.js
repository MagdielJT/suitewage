/**
* @NApiVersion 2.x
* @description ENUM para tabla calendarioe
* @author Aldo Chaman 
*/
define(["./sw_calendarioe_enum"],

   /**
    * 
    * @param calendarioe - Dato de tipo string que identifica el nombre del campo asignado a suitwage.
    * @returns  {JSON} {
    *       recordType: Tipo de registro,
    *       cale000: Subsidiaria/Empresa,
    *       cale003: Proceso especial (Aplica a bajas),
    *       cale004: Clasificación,
    *      }
    */

    function(calendarioe){
        return {
            recordType: "customrecord_sw_calendarioe",
            cale000: "custrecord_sw_cale000",
            cale003: "custrecord_sw_cale003",
            cale004: "custrecord_sw_cale004",

            
        }
    }

    );