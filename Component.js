import PageObject from './PageObject.js'
import Transform from './transform.js'

/**
 * @description 组件类
 */
export default class Component {
    /**
     * @param {String} name 组件的名字
     * @param {Transform} transform 组件的转换组件
     * @param {PageObject} object 所属的对象
     */
    constructor(name='', transform=null, object=null) {
        // 组件的内部私有数据
        this._data = {}
        // 是否启用
        this._activated = true
        // 组件的id
        this.id = ''
        // 组件名称，用于在对象中搜寻组件
        this.name = name
        // 转换组件
        this.transform = transform || this
        this.object = object
        // 需要依赖的其他外部组件
        this.requires = []
        // 在对象中的默认顺序
        this.index = 0
        // 组件从外部接受的属性数据
        this.props = {}
        // 组件的外部文本内容
        this.content = ''
        // 是否单例（是否可在同一对象中被添加多次）
        this.singletion = true
        // 组件的外部方法
        this.methods = {}
        // 组件能够向外部对象或者组件发送的事件消息
        this.events = {}
        // 组件能够从对象上或者其他组件接受的消息
        this.messages = {}
        // 组件所挂载的额外信息
        this.extra = null
        // 组件的样式
        this.style = {}
        // 组件的类
        this.classes = []
        // 组件的预设状态
        this.presets = {}
    }

    get isActivated(){
        return this._activated
    }

    set isActivated(val){

    }

    /**
     * @description 开始加载组件时发生
     * @param options
     */
    start(options={}){

    }

    /**
     * @description 组件加载完毕时发送
     */
    loaded(){

    }

    /**
     * @description 在被销毁之前调用，以阻止被销毁
     * @param reason
     */
    beforeDestroy(reason={}){

    }

    /**
     * @description 组件被销毁后发生
     */
    destroyed(){

    }

    /**
     * @description 更新组件时调用
     */
    update(){

    }

    /**
     * @description 组件在固定时间内被调用
     */
    fixedUpdate(){

    }

    /**
     * @description 组件发生错误时发生
     */
    error(err={}){

    }

    /**
     * @description 组件被激活时发生
     */
    activated(){

    }

    /**
     * @description 在组件被重置的时候调用
     */
    reset(){

    }

    /**
     * @description 当组件的属性发生改变的时候被调用
     */
    change(prop, val, old, op){

    }

    /**
     * @description 组件被序列化的时候调用
     */
    serialize(){

    }

    /**
     * @description 组件被解析的时候调用
     */
    parse(){

    }

    /**
     * @description 组件被复制的时候调用
     */
    copy(){

    }

    /**
     * @description 组件被粘贴的时候调用
     */
    paste(){

    }

    /**
     * @description 向所有对象的所有组件广播消息
     * @param {String} msg
     * @param {Object} params
     */
    broadcastMessage(msg, params={}){

    }

    /**
     * @description 向其他对象或组件直接发送消息
     * @param {PageObject | Component} obj
     * @param {String} msg
     * @param {Object} params
     */
    sendMessage(obj, msg, params={}){

    }

    /**
     * @description 向所属上级对象汇报消息
     * @param {String} msg
     * @param {Object} params
     * @param {Number} levels 汇报的最大级数
     */
    reportMessage(msg, params={}, levels=1){

    }

    /**
     * @description 向其他组件或者对象群发消息
     * @param {String} msg
     * @param {Object} params
     * @param {[PageObject | Component] | String} objs 群发列表或者群组名称
     */
    sendMessages(msg, params={}, objs=[]){

    }
}