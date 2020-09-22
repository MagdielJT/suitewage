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
    *       h_folio_departamentos: Folio Historial,
    *       h_fecha_d: Fecha Historial,
    *       h_usuario_d: Usuario,
    *       h_depd000: Subsidiaria/Empresa,
    *       h_depd001: Numero de Departamento,
    *       h_depd002: Nombre de Departamento,
    *       h_depd003: Area,
    *       h_depd004: Nombre de Reparto,
    *       h_depd005: Cuenta Contable,
    *       h_depd006: Disponible texto 2,
    *       h_depd007: Sucursal,
    *       h_depd008: Disponble Numerico 1,
    *       h_camposmod_d: Campos modificados,
    *       h_modificaciones_d: Modificaciones Historial,
    *       h_perdcamposmod_d: PerdCampos Modificados,
    *       h_perdmodificaciones_d: PerdModificaciones,
    *       h_estatus_d: Estatus,
    *      }
    */

    function(deptos_historial){
        return {
            recordType: "customrecord_sw_deptos_historial",
            h_folio_departamentos: "custrecord_sw_h_folio_departamentos",
            h_fecha_d: "custrecord_sw_h_fecha_d",
            h_usuario_d: "custrecord_sw_h_usuario_d",
            h_depd000: "custrecord_sw_h_depd000",
            h_depd001: "custrecord_sw_h_depd001",
            h_depd002: "custrecord_sw_h_depd002",
            h_depd003: "custrecord_sw_h_depd003",
            h_depd004: "custrecord_sw_h_depd004",
            h_depd005: "custrecord_sw_h_depd005",
            h_depd006: "custrecord_sw_h_depd006",
            h_depd007: "custrecord_sw_h_depd007",
            h_depd008: "custrecord_sw_h_depd008",
            h_camposmod_d: "custrecord_sw_h_camposmod_d",
            h_modificaciones_d: "custrecord_sw_h_modificaciones_d",
            h_perdcamposmod_d: "custrecord_sw_h_perdcamposmod_d",
            h_perdmodificaciones_d: "custrecord_sw_h_perdmodificaciones_d",
            h_estatus_d: "custrecord_sw_h_estatus_d",

            
        }
    }

    );