export default class COObject{
    constructor() {

    }

    /**
     * 返回字符串
     * @param {String} format
     * @return {String}
     */
    toString(format=''){

    }

    /**
     * 返回数值
     * @return {Number}
     */
    valueOf(){

    }

    /**
     * 是否相等
     * @param {COObject | {}} another
     * @return {boolean}
     */
    equals(another){

    }

    /**
     * 转换成布尔
     * @return {boolean}
     */
    toBool(){

    }

    /**
     * 拷贝自身
     * @return {COObject | {}}
     */
    copy(){

    }

    /**
     * 返回json
     */
    toJson(){

    }

    /**
     * 返回xml
     */
    toXML(){

    }

    /**
     * 执行eval方法
     * @param {String} str 字符串
     * @param {{}} params 参数
     * @return {any | null | undefined}
     */
    eval(str, params={}){

    }

    /**
     * 重置该对象
     * @return {boolean}
     */
    reset(){

    }

    /**
     * 暂存该对象
     * @param {String} state 状态
     * @return {COObject | String}
     */
    store(state=''){

    }

    /**
     * 恢复该对象
     * @param {String} state 状态
     * @return {COObject}
     */
    recover(state=''){

    }
}