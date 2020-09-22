/**
* @NApiVersion 2.x
* @description ENUM para tabla nomina
* @author Aldo Chaman 
*/
define(["./sw_nomina_enum"],

   /**
    * 
    * @param nomina - Dato de tipo string que identifica el nombre del campo asignado a suitwage.
    * @returns  {JSON} {
    *       recordType: Tipo de registro,
    *       empleado: Empleado,
    *       empresa: Subsidiaria/Empresa,
    *       tiponomina: Tipo de Nómina,
    *      }
    */    

    function(nomina){
        return {
            recordType: "customrecord_sw_nomina",
            empleado: "custrecord_sw_empleado",
            empresa: "custrecord_sw_empresa",
            tiponomina: "custrecord_sw_tiponomina",

            
        }
    }

    );