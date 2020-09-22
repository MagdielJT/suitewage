/**
* @NApiVersion 2.x
* @description ENUM para tabla xtsusuarios
* @author Aldo Chaman 
*/
define(["./sw_xtsusuarios_enum"],

   /**
    * 
    * @param xtsusuarios - Dato de tipo string que identifica el nombre del campo asignado a suitwage.
    * @returns  {JSON} {
    *       recordType: Tipo de registro,
    *       usuclave: Empleado,
    *       usuempresa: Subsidiaria/Empresa,
    *       usutiponomina: Tipo de nómina,
    *      }
    */   

    function(xtsusuarios){
        return {
            recordType: "customrecord_sw_xtsusuarios",
            usuclave: "custrecord_sw_usuclave",
            usuempresa: "custrecord_sw_usuempresa",
            usutiponomina: "custrecord_sw_usutiponomina",
        }
    }

    );