/**
* @NApiVersion 2.x
* @description ENUM para tabla deptos_historial
* @author Aldo Chaman 
*/
define(["./sw_deptos_historial_enum"],

   /**
    * 
    * @param deptos_historial - Dato de tipo string que identifica el nombre del campo asignado a suitwage.
    * @returns  {JSON} {
    *       recordType: Tipo de registro,
    *       folio_departamentos: Folio Historial,
    *       fecha_d: Fecha Historial,
    *       usuario_d: Usuario,
    *       depd000: Subsidiaria/Empresa,
    *       depd001: Numero de Departamento,
    *       depd002: Nombre de Departamento,
    *       depd003: Area,
    *       depd004: Nombre de Reparto,
    *       depd005: Cuenta Contable,
    *       depd006: Disponible texto 2,
    *       depd007: Sucursal,
    *       depd008: Disponble Numerico 1,
    *       camposmod_d: Campos modificados,
    *       modificaciones_d: Modificaciones Historial,
    *       perdcamposmod_d: PerdCampos Modificados,
    *       perdmodificaciones_d: PerdModificaciones,
    *       estatus_d: Estatus,
    *      }
    */

    function(deptos_historial){
        return {
            recordType: "customrecord_sw_deptos_historial",
            folio_departamentos: "custrecord_sw_h_folio_departamentos",
            fecha_d: "custrecord_sw_h_fecha_d",
            usuario_d: "custrecord_sw_h_usuario_d",
            depd000: "custrecord_sw_h_depd000",
            depd001: "custrecord_sw_h_depd001",
            depd002: "custrecord_sw_h_depd002",
            depd003: "custrecord_sw_h_depd003",
            depd004: "custrecord_sw_h_depd004",
            depd005: "custrecord_sw_h_depd005",
            depd006: "custrecord_sw_h_depd006",
            depd007: "custrecord_sw_h_depd007",
            depd008: "custrecord_sw_h_depd008",
            camposmod_d: "custrecord_sw_h_camposmod_d",
            modificaciones_d: "custrecord_sw_h_modificaciones_d",
            perdcamposmod_d: "custrecord_sw_h_perdcamposmod_d",
            perdmodificaciones_d: "custrecord_sw_h_perdmodificaciones_d",
            estatus_d: "custrecord_sw_h_estatus_d",

            
        }
    }

    );