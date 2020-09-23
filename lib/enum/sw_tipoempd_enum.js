/**
* @NApiVersion 2.x
* @description ENUM para tabla tipoempd
* @author Aldo Chaman 
*/
define(["./sw_tipoempd_enum"],

   /**
    * 
    * @param tipoempd - Dato de tipo string que identifica el nombre del campo asignado a suitwage.
    * @returns  {JSON} {
    *       recordType: Tipo de registro,
    *       tipd000: Subsidiaria/empresa,
    *       tipd001: Tipo de nómina agrupador,
    *       tipd002: Tipo de nómina agrupado,
    *       tipodenomina: Tipo de nómina encabezado,
    *      }
    */    

    function(tipoempd){
        return {
            recordType: "customrecord_sw_tipoempd",
            tipd000: "custrecord_sw_tipd000",
            tipd001: "custrecord_sw_tipd001",
            tipd002: "custrecord_sw_tipd002",
            tipodenomina: "custrecord_sw_tipodenomina",



        }
    }

    );