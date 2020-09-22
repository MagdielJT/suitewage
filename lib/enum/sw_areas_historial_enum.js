/**
* @NApiVersion 2.x
* @description ENUM para tabla areas_historial
* @author Aldo Chaman 
*/
define(["./sw_areas_historial_enum"],

   /**
    * 
    * @param areas_historial - Dato de tipo string que identifica el nombre del campo asignado a suitwage.
    * @returns  {JSON} {
    *       recordType: Tipo de registro,
    *       h_folio_areas: Folio Historial,
    *       h_fecha: Fecha,
    *       h_usuario: Usuario,
    *       h_ared000: Subsidiaria/Empresa,
    *       h_ared001: Número de área,
    *       h_ared002: Descripción del área,
    *       h_ared003: Numero de Sucursal,
    *       h_aredregpatron: Registro Patronal,
    *       h_aredguia: Numero de guia,
    *       h_aredregimenfiscal: Area de Regimen Fiscal,
    *       h_modificaciones_areas: Modificaciones Historial,
    *       h_perdcamposmodificados: Campos Modificados,
    *       h_perdmodificaciones: Modificaciones,
    *       h_estatus_areas: Estado del area,
    *      }
    */
    function(areas_historial){
        return {
            recordType: "customrecord_sw_areas_historial",
            h_folio_areas: "custrecord_sw_folio_areas",
            h_fecha: "custrecord_sw_fecha",
            h_usuario: "custrecord_sw_usuario",
            h_ared000: "custrecord_sw_ared000",
            h_ared001: "custrecord_sw_ared001",
            h_ared002: "custrecord_sw_ared002",
            h_ared003: "custrecord_sw_ared003",
            h_aredregpatron: "custrecord_sw_aredregpatron",
            h_aredguia: "custrecord_sw_aredguia",
            h_aredregimenfiscal: "custrecord_sw_aredregimenfiscal",
            h_modificaciones_areas: "custrecord_sw_modificaciones_areas",
            h_perdcamposmodificados: "custrecord_sw_perdcamposmodificados",
            h_perdmodificaciones: "custrecord_sw_perdmodificaciones",
            h_estatus_areas: "custrecord_sw_estatus_areas",

            
        }
    }

    );