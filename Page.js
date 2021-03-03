/**
 * @description 页面场景对象
 */
export default class Page{
    /**
     * @param {String} name 页面名称
     * @param {Page} parent 父页面
     * @param {Object} params 页面的加载参数
     * @param {String} hash 页面的定位位置
     */
    constructor(name, parent=null, params={}, hash='') {
        /**
         * 存储所有顶级对象列表
         * @type {{}}
         * @private
         */
        this._objects = {}
        this.name=name
        this.parent=parent
        this.params=params
        this.hash=hash
    }

    /**
     * 获取所有顶级对象列表
     * @return {COObject[]}
     */
    get roots(){

    }

    /**
     * 页面启动时调用
     * @param {Object} params
     * @param {String} hash
     */
    launching(params={}, hash=''){

    }

    /**
     * 页面发生错误时发生
     */
    error(err=null){

    }

    /**
     * 加载某个页面
     * @param {String} name 页面名字
     * @param {Object} params 参数
     * @return {Page}
     */
    static load(name, params={}){

    }

    /**
     * 弹出某个页面
     * @param {String} name 页面名字
     * @param {Object} params 参数
     * @param {[Number, Number]} position 位置
     * @param {[Number, Number]} size 大小
     * @param {boolean} modal 是否是模态框
     * @return {Page}
     */
    static popup(name, params={}, position=null, size=null, modal=true){

    }

    /**
     * 嵌入浮动某个页面
     */
    static embed(){

    }

    /**
     * 卸载页面
     */
    unload(){

    }

    /**
     * 关闭页面
     */
    close(){

    }

    /**
     * 展示页面
     */
    show(){

    }

    /**
     * 重定向页面
     */
    static redirect(){

    }

    /**
     * 跳转页面
     */
    static goto(){

    }

    /**
     * 返回上次页面
     */
    static back(levels=1){

    }

    /**
     * 返回之前的页面
     */
    static prev(){

    }

    /**
     * 下个页面
     */
    static next(){

    }

    /**
     * 清理所有至主页
     */
    static home(){

    }
}