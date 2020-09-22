/**
* @NApiVersion 2.x
* @description ENUM para tabla xtsparametros
* @author Aldo Chaman 
*/
define(["./sw_xtsparametros_enum"],

   /**
    * 
    * @param xtsparametros - Dato de tipo string que identifica el nombre del campo asignado a suitwage.
    * @returns  {JSON} {
    *       recordType: Tipo de registro,
    *       Pais: Pais,
    *       Empresa: Subsidiaria/Empresa,
    *       Parametro: Parametro,
    *       Valor: Valor,
    *       Modulo: Modulo,
    *       Descripción: descripcion,
    *      }
    */   

    function(xtsparametros){
        return {
            recordType: "customrecord_sw_xtsparametros",
            Pais: "custrecord_sw_pais",
            Empresa: "custrecord_sw_company",
            Parametro: "custrecord_sw_parametro",
            Valor: "custrecord_sw_valor",
            Modulo: "custrecord_sw_Modulo",
            Descripción: "custrecord_sw_descripcion",
        }
    }

    );