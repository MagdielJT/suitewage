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
    *       folio_areas: Folio Historial,
    *       fecha: Fecha,
    *       usuario: Usuario,
    *       ared000: Subsidiaria/Empresa,
    *       ared001: Número de área,
    *       ared002: Descripción del área,
    *       ared003: Numero de Sucursal,
    *       aredregpatron: Registro Patronal,
    *       aredguia: Numero de guia,
    *       aredregimenfiscal: Area de Regimen Fiscal,
    *       modificaciones_areas: Modificaciones Historial,
    *       perdcamposmodificados: Campos Modificados,
    *       perdmodificaciones: Modificaciones,
    *       estatus_areas: Estado del area,
    *      }
    */
    function(areas_historial){
        return {
            recordType: "customrecord_sw_areas_historial",
            folio_areas: "custrecord_sw_h_folio_areas",
            fecha: "custrecord_sw_h_fecha",
            usuario: "custrecord_sw_h_usuario",
            ared000: "custrecord_sw_h_ared000",
            ared001: "custrecord_sw_h_ared001",
            ared002: "custrecord_sw_h_ared002",
            ared003: "custrecord_sw_h_ared003",
            aredregpatron: "custrecord_sw_h_aredregpatron",
            aredguia: "custrecord_sw_h_aredguia",
            aredregimenfiscal: "custrecord_sw_h_aredregimenfiscal",
            modificaciones_areas: "custrecord_sw_h_modificaciones_areas",
            perdcamposmodificados: "custrecord_sw_h_perdcamposmodificados",
            perdmodificaciones: "custrecord_sw_h_perdmodificaciones",
            estatus_areas: "custrecord_sw_h_estatus_areas",

            
        }
    }

    );