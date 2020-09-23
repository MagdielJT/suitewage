/**
* @NApiVersion 2.x
* @description ENUM para tabla historiald
* @author Aldo Chaman 
*/
define(["./sw_historiald_enum"],

   /**
    * 
    * @param historiald - Dato de tipo string que identifica el nombre del campo asignado a suitwage.
    * @returns  {JSON} {
    *       recordType: Tipo de registro,
    *       hisd000: Subsidiaria/empresa,
    *       hisd001: Empleado,
    *       hisd002: Salario Diario,
    *       hisd003: Salario Integrado,
    *       hisd004: Fecha de Movimiento,
    *       hisd005: Descripción,
    *       hisd006: Parte Variable,
    *       hisd007: Tope de Infonavit,
    *       hisd008: Tope EIM,
    *       hisd009: Abreviación del Usuario,
    *       hisd010: Fecha de elaboración del movimiento,
    *       hisregpatron: Numero Registro patronal,
    *       hisdguia: Guía,
    *       hisdfechanomin: Fecha de Nómina,
    *       hisdprocedencia: Procedencia,
    *       hisdtiponomina: Tipo de nomina,
    *       tiponominadesc: Tipo de Nómina Descripción,
    *       hisdsucursal: Sucursal,
    *       hisdsucdesc: Descripción de Sucursal,
    *       hisdarea: Área,
    *       hisdareadesc: Área Descripción,
    *       hisddep: Departamento,
    *       hisddepdesc: Departamento Descripción,
    *       hisdpue: Puesto,
    *       hisdpuedesc: Puesto descripción,
    *       hisdfolio: Folio,
    *      }
    */    
    function(historiald){
        return {
            recordType: "customrecord_sw_historiald",
            hisd000: "custrecord_sw_hisd000",
            hisd001: "custrecord_sw_hisd001",
            hisd002: "custrecord_sw_hisd002",
            hisd003: "custrecord_sw_hisd003",
            hisd004: "custrecord_sw_hisd004",
            hisd005: "custrecord_sw_hisd005",
            hisd006: "custrecord_sw_hisd006",
            hisd007: "custrecord_sw_hisd007",
            hisd008: "custrecord_sw_hisd008",
            hisd009: "custrecord_sw_hisd009",
            hisd010: "custrecord_sw_hisd010",
            hisregpatron: "custrecord_sw_hisregpatron",
            hisdguia: "custrecord_sw_hisdguia",
            hisdfechanomin: "custrecord_sw_hisdfechanomin",
            hisdprocedencia: "custrecord_sw_hisdprocedencia",
            hisdtiponomina: "custrecord_sw_hisdtiponomina",
            tiponominadesc: "custrecord_sw_tiponominadesc",
            hisdsucursal: "custrecord_sw_hisdsucursal",
            hisdsucdesc: "custrecord_sw_hisdsucdesc",
            hisdarea: "custrecord_sw_hisdarea",
            hisdareadesc: "custrecord_sw_hisdareadesc",
            hisddep: "custrecord_sw_hisddep",
            hisddepdesc: "custrecord_sw_hisddepdesc",
            hisdpue: "custrecord_sw_hisdpue",
            hisdpuedesc: "custrecord_sw_hisdpuedesc",
            hisdfolio: "custrecord_sw_hisdfolio",
        }
    }

    );