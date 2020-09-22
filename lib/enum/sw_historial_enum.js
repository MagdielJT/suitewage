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
    *       h_hisd000: Subsidiaria/empresa,
    *       h_hisd001: Empleado,
    *       h_hisd002: Salario Diario,
    *       h_hisd003: Salario Integrado,
    *       h_hisd004: Fecha del movimiento,
    *       h_hisd005: Descripción,
    *       h_hisd006: Parte variable,
    *       h_hisd007: Tope de Infonavit,
    *       h_hisd008: Tope EIM,
    *       h_hisd009: Abreviación del Usuario,
    *       h_hisd010: Fecha de Elaboración del movimiento,
    *       h_hisdfechanomin: Registro Patronal,
    *       h_hisdguia: Número de Guía,
    *       h_hisdfechanomina: Fecha Nomina,
    *       h_procedencia: Procedencia,
    *       h_histdtiponomina: Tipo de Nomina,
    *       h_hisdregpatron: Tipo de Nomina Descripción,
    *       h_hisdsuc: Sucursal,
    *       h_hisdsucdesc: Sucursal Descripción,
    *       h_hisdarea: Area,
    *       h_hisdareadesc: Area Descripción,
    *       h_hisddep: Deptartamento,
    *       h_hisddepdesc: Departamento Descripción,
    *       h_hisdpue: Puesto,
    *       h_hisdpuedesc: Puesto Descripción,
    *       h_folio_personal: folio,
    *      }
    */ 

    function(historial){
        return {
            recordType: "customrecord_sw_historial",
            h_hisd000: "custrecord_sw_h_hisd000",
            h_hisd001: "custrecord_sw_h_hisd001",
            h_hisd002: "custrecord_sw_h_hisd002",
            h_hisd003: "custrecord_sw_h_hisd003",
            h_hisd004: "custrecord_sw_h_hisd004",
            h_hisd005: "custrecord_sw_h_hisd005",
            h_hisd006: "custrecord_sw_h_hisd006",
            h_hisd007: "custrecord_sw_h_hisd007",
            h_hisd008: "custrecord_sw_h_hisd008",
            h_hisd009: "custrecord_sw_h_hisd009",
            h_hisd010: "custrecord_sw_h_hisd010",
            h_hisdfechanomin: "custrecord_sw_h_hisdfechanomin",
            h_hisdguia: "custrecord_sw_h_hisdguia",
            h_hisdfechanomina: "custrecord_sw_h_hisdfechanomina",
            h_procedencia: "custrecord_sw_h_procedencia",
            h_histdtiponomina: "custrecord_sw_h_histdtiponomina",
            h_hisdregpatron: "custrecord_sw_h_hisdregpatron",
            h_hisdsuc: "custrecord_sw_h_hisdsuc",
            h_hisdsucdesc: "custrecord_sw_h_hisdsucdesc",
            h_hisdarea: "custrecord_sw_h_hisdarea",
            h_hisdareadesc: "custrecord_sw_h_hisdareadesc",
            h_hisddep: "custrecord_sw_h_hisddep",
            h_hisddepdesc: "custrecord_sw_h_hisddepdesc",
            h_hisdpue: "custrecord_sw_h_hisdpue",
            h_hisdpuedesc: "custrecord_sw_h_hisdpuedesc",
            h_folio_personal: "custrecord_sw_h_folio_personal",

            
        }
    }

    );