/**
 * App类
 */
export default class App{
    /**
     * @param {String} name 名字
     * @param {String} id id
     * @param {Object} config 启动配置
     * @param {String} env 启动环境：开发dev/测试test/发布release/长期稳定版LTS
     */
    constructor(name='', config={}, id='', env='dev') {
        this.name = name
        this.config = {}
        Object.assign(this.config, config)
        /**
         * @type {String}
         * @private
         */
        this._id = id
        /**
         * 存储所有声明的页面对象
         * @type {Page[]}
         * @private
         */
        this._pages = []
        /**
         * 全局数据对象
         * @type {{}}
         */
        this.globalData = {}
    }

    /**
     * 被启动时调用
     * @param {Object} params
     */
    launch(params={}){

    }

    /**
     * 进入后台时发生
     */
    hide(){

    }

    /**
     * 展示时发生
     */
    show(){

    }

    /**
     * 获取App的已经打开的页面
     * @return {Page[]}
     */
    get pages(){

    }

    /**
     * 获取当前App的单例对象
     * @return {App}
     */
    static getApp(){

    }
}