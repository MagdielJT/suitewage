/**
* @NApiVersion 2.x
* @description ENUM para tabla historial
* @author Aldo Chaman 
*/
define(["./sw_historial_enum"],

   /**
    * 
    * @param historial - Dato de tipo string que identifica el nombre del campo asignado a suitwage.
    * @returns  {JSON} {
    *       recordType: Tipo de registro,
    *       hisd000: Subsidiaria/empresa,
    *       hisd001: Empleado,
    *       hisd002: Salario Diario,
    *       hisd003: Salario Integrado,
    *       hisd004: Fecha del movimiento,
    *       hisd005: Descripción,
    *       hisd006: Parte variable,
    *       hisd007: Tope de Infonavit,
    *       hisd008: Tope EIM,
    *       hisd009: Abreviación del Usuario,
    *       hisd010: Fecha de Elaboración del movimiento,
    *       hisdfechanomin: Registro Patronal,
    *       hisdguia: Número de Guía,
    *       hisdfechanomina: Fecha Nomina,
    *       procedencia: Procedencia,
    *       histdtiponomina: Tipo de Nomina,
    *       hisdregpatron: Tipo de Nomina Descripción,
    *       hisdsuc: Sucursal,
    *       hisdsucdesc: Sucursal Descripción,
    *       hisdarea: Area,
    *       hisdareadesc: Area Descripción,
    *       hisddep: Deptartamento,
    *       hisddepdesc: Departamento Descripción,
    *       hisdpue: Puesto,
    *       hisdpuedesc: Puesto Descripción,
    *       folio_personal: folio,
    *      }
    */ 

    function(historial){
        return {
            recordType: "customrecord_sw_historial",
            hisd000: "custrecord_sw_h_hisd000",
            hisd001: "custrecord_sw_h_hisd001",
            hisd002: "custrecord_sw_h_hisd002",
            hisd003: "custrecord_sw_h_hisd003",
            hisd004: "custrecord_sw_h_hisd004",
            hisd005: "custrecord_sw_h_hisd005",
            hisd006: "custrecord_sw_h_hisd006",
            hisd007: "custrecord_sw_h_hisd007",
            hisd008: "custrecord_sw_h_hisd008",
            hisd009: "custrecord_sw_h_hisd009",
            hisd010: "custrecord_sw_h_hisd010",
            hisdfechanomin: "custrecord_sw_h_hisdfechanomin",
            hisdguia: "custrecord_sw_h_hisdguia",
            hisdfechanomina: "custrecord_sw_h_hisdfechanomina",
            procedencia: "custrecord_sw_h_procedencia",
            histdtiponomina: "custrecord_sw_h_histdtiponomina",
            hisdregpatron: "custrecord_sw_h_hisdregpatron",
            hisdsuc: "custrecord_sw_h_hisdsuc",
            hisdsucdesc: "custrecord_sw_h_hisdsucdesc",
            hisdarea: "custrecord_sw_h_hisdarea",
            hisdareadesc: "custrecord_sw_h_hisdareadesc",
            hisddep: "custrecord_sw_h_hisddep",
            hisddepdesc: "custrecord_sw_h_hisddepdesc",
            hisdpue: "custrecord_sw_h_hisdpue",
            hisdpuedesc: "custrecord_sw_h_hisdpuedesc",
            folio_personal: "custrecord_sw_h_folio_personal",

            
        }
    }

    );