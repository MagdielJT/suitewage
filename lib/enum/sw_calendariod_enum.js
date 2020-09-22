/**
* @NApiVersion 2.x
* @description ENUM para tabla calendariod
* @author Aldo Chaman 
*/
define(["./sw_calendariod_enum"],

   /**
    * 
    * @param calendariod - Dato de tipo string que identifica el nombre del campo asignado a suitwage.
    * @returns  {JSON} {
    *       recordType: Tipo de registro,
    *       cald000: Subsidiaria/Empresa ,
    *       cald001: No. de calendaria,
    *       cald002: Número de Formula,
    *       cald003: Orden,
    *       cald004: Presentación en sobres y facturación,
    *       cald005: Campo a actualizar,
    *       cald006: Cuenta a cargo,
    *       cald007: Cuenta a Abono,
    *       calendarioe: SW Calendario Encabezado,
    *      }
    */
    function(calendiariod){
        return {
            recordType: "customrecord_sw_calendariod",
            cald000: "custrecord_sw_cald000",
            cald001: "custrecord_sw_cald001",
            cald002: "custrecord_sw_cald002",
            cald003: "custrecord_sw_cald003",
            cald004: "custrecord_sw_cald004",
            cald005: "custrecord_sw_cald005",
            cald006: "custrecord_sw_cald006",
            cald007: "custrecord_sw_cald007",
            calendarioe: "custrecord_sw_calendarioe",

            
        }
    }

    );