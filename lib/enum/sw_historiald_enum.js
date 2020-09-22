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
    *       h_empd000: Subsidiaria/empresa,
    *       h_perd001: Empleado,
    *       h_fechainf: Fecha del movimiento,
    *       h_clave: Tipo de Movimiento,
    *       h_aplicatabladismin: Aplica tabla de Disminución,
    *       h_tipodescuento: Tipo Descuento,
    *       h_valordescuento: Valor Descuento,
    *       h_fechacaptura: Fecha de elaboración del movimiento,
    *       h_usuclave: Usuario que elaboró el movimiento,
    *       h_hisdregpatroninf: Registro Patronal,
    *       h_hisdguiainf: Guía,
    *       h_hisdfechanominainf: Fecha de Registro de Movimiento,
    *       h_salariodiario: Salario Diario,
    *       h_salariointegrado: Salario integrado,
    *       h_topeinfo: Tope Infonavit,
    *       h_topeeym: Tope EyM,
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