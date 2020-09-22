/**
* @NApiVersion 2.x
* @description ENUM para tabla tiposempe
* @author Aldo Chaman 
*/
define(["./sw_tiposempe_enum"],

   /**
    * 
    * @param tipoempe - Dato de tipo string que identifica el nombre del campo asignado a suitwage.
    * @returns  {JSON} {
    *       recordType: Tipo de registro,
    *       tipe000: Subsidiaria/empresa,
    *       tipd003: Filtro o Condición,
    *       tipd004: Periodicidad,
    *       tipd005: Agrupador Maestro,
    *       tipemanejasseguridadsocial: Indicador de seguridad social,
    *       tipedejasalariocero: indicador de Salario 0,
    *       tipesoloparapersonal: Solo para personal,
    *       tiperegimensat: Regimen SAT,
    *      }
    */    

    function(tipodempe){
        return {
            recordType: "customrecord_sw_tipoempe",
            tipe000: "custrecord_sw_tipe000",
            tipe003: "custrecord_sw_tipe003",
            tipe004: "custrecord_sw_tipe004",
            tipe005: "custrecord_sw_tipe005",
            tipemanejaseguridadsocial: "custrecord_sw_tipemanejaseguridadsocial",
            tipedejasalariocero: "custrecord_sw_tipedejasalariocero",
            tipesoloparapersonal: "custrecord_sw_tipesoloparapersonal",
            tiperegimensat: "custrecord_sw_tiperegimensat",


        }
    }

    );