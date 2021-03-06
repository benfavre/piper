module.exports = function (Vue) {
  var resource = Vue.resource('page{/id}');
  var http = Vue.http;

  return {
    ...resource,

    /**
     * 保存 design
     * @returns {*}
     */
    saveData(data) {
      return http
        .put('pages', JSON.stringify(data))
    }
  }
}
