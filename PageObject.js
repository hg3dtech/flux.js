import Transform from './transform.js'
import Page from './Page'

export default class PageObject {
    /**
     * @param {String} name 名称
     * @param {Transform} transform
     * @param {PageObject} parent 父对象
     * @param {Page} page 所在页面场景
     */
    constructor(name, transform, parent=null, page=null) {
        // 是否激活
        this.activate = true
        this.transform = transform
        this.name = name
        this.parent = parent
        /**
         * @description 对象的标签列表
         * @type {String[]}
         */
        this.tags = []
        /**
         * @description 所处的层
         * @type {Layer}
         */
        this.layer = null
        this.page = page
    }

    /**
     * @description 获取根对象
     * @return {PageObject}
     */
    get root(){

    }

    /**
     * 获取所有直接子对象
     * @return {PageObject[]}
     */
    get children(){

    }

    /**
     * 获取所有直接组件列表
     * @return {Component[]}
     */
    get components(){

    }

    /**
     * @description 获取兄弟对象
     * @return {Component[]}
     */
    get siblings(){

    }

    /**
     * @description 获取同类型对象下的其他所有实例
     * @return {Component[]}
     */
    get others(){

    }

    /**
     * @description 获取除自身之外的其他所有实例
     * @return {Component[]}
     */
    get anothers(){

    }

    /**
     * @description 获取运行时id
     * @return {String}
     */
    get id(){

    }

    /**
     * @description 是否开启一直存活甚至页面被替换
     * @param {boolean} alive
     */
    keepAliveForever(alive=true){

    }

    /**
     * @description 手动销毁该对象
     * @param {boolean} immediate 是否立即销毁该对象
     */
    destroy(immediate=false){

    }

    /**
     * @description 手动重置该对象
     */
    reset(){

    }

    /**
     * @description 向子对象或者组件下达命令消息
     * @param {PageObject | Component} obj
     * @param {String} cmd
     * @param {Object} params
     */
    sendCommand(obj, cmd, params={}){

    }

    /**
     * @description 向子对象或者组件群发命令
     * @param {[PageObject | Component] | String} objs
     * @param {String} cmd
     * @param {Object} params
     */
    sendCommands(objs, cmd, params={}){

    }

    /**
     * @description 向所有子对象下达命令消息
     * @param {String} msg 消息
     * @param {Object} params
     */
    broadcastCommand(msg, params={}){

    }

    /**
     * @description 获取对象自身的组件对象
     * @param {String | Number | Component | Transform} target
     * @return {Component | Component[]}
     */
    getComponent(target){

    }

    /**
     * @description 获取所有子对象身上的相关的组件
     * @param {[String | Component | Number | Transform]} targets
     * @return {Component[]}
     */
    GetComponentsInChildren(targets=[]){

    }

    /**
     * @description 获取父对象身上的组件
     * @param {String | Number | Component | Transform} target
     * @return {Component | Component[]}
     */
    getComponentInParent(target){

    }

    /**
     * @description 获取父对象身上的组件
     * @param {[String | Number | Component | Transform]} targets
     * @return {Component[]}
     */
    getComponentsInParent(targets){

    }

    /**
     * @description 添加组件
     * @param {Component | String | Transform} target 目标
     * @param {Number} index 添加的顺序位置
     * @param {String} name 添加之后的名称
     * @return {Component}
     */
    addComponent(target, index=-1, name=''){

    }

    /**
     * @description 移出组件
     * @param {Component | String | Number | Transform} target 目标
     * @return {boolean}
     */
    removeComponent(target){

    }

    /**
     * @description 查找子对象
     * @return {Component}
     */
    findChild({name='', tag='', tags=[]}){

    }

    /**
     * @description 查找对象
     * @param {String} name
     * @param {String} tag
     * @param {String[]} tags
     * @param {Layer | String | Number} layer 所在的层
     * @return {PageObject}
     */
    static findObject(name, tag, tags, layer=null){

    }

    /**
     * @description 查找多个对象
     * @param {String} tag
     * @param {String[]} tags
     * @param {[Layer | String | Number]} layers
     * @param {String} name 名字
     * @return {PageObject[]}
     */
    static findObjects(tag='', tags=[],layers=[], name=''){

    }

    /**
     * @description 实例化拷贝对象
     * @param {String} name 对象名字
     * @param {PageObject} parent 父对象
     * @param {Transform} transform 变换组件
     * @param {Object} params 实例化的初始消息，会被对象start接收到
     * @return {PageObject}
     */
    instantiate(name='', parent=null, transform=null, params={}){

    }

    /**
     * @description 实例化多个对象
     * @param {String | String[]} name 对象基础名字或者对象名字
     * @param {PageObject} parent 父对象
     * @param {Transform | Transform[]} transform 变换组件
     * @param {Object[] | Object} params 实例化的初始消息，会被对象start接收到
     * @param {String[]} tags 标签
     * @param {Layer | String} layer 所在的层
     * @return {PageObject[]}
     */
    instantiates(name='', parent=null, transform=null,
                 params=[], tags=[], layer=null){

    }

    /**
     * @description 当接受到子对象或者组件的汇报消息之后调用
     * @param {PageObject | Component | Transform} original 原始发送者
     * @param {String} msg 消息
     * @param {Object} params 参数
     * @param {Date} time 发送的时间
     * @param {PageObject} sender 消息抄送者（中间上级转发者）
     * @return {Object} 返回响应
     */
    reported(original, msg, params={}, time=new Date(),
             sender=null){

    }

    /**
     * @description 接受到上级下达的命令之后调用
     */
    receivedCommand(original, msg, params={}, sender=null, time=new Date()){

    }

    /**
     * @description 接受到其他对象或组件发送的消息时调用
     */
    receivedMessage(sender, msg, params={}, time=new Date()){

    }

    /**
     * @description 复制对象的方法
     * @param {Object} params 参数
     * @return {PageObject} 新对象
     */
    copy(params={}){

    }

    /**
     * 在场景页面中克隆多个对象
     * @param {Number} numbers 数量
     * @param {String} basename 基础名字
     * @param {Object} params 参数
     * @return {PageObject[]}
     */
    duplicate(numbers=1, basename='', params={}){

    }

    /**
     * 获取场景中该对象实例的个数
     * @type {Number}
     */
    get count(){

    }
}