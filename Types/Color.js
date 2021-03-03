export class Colors{
    /**
     * 白色
     * @returns {Color}
     * @constructor
     */
    static get white(){
        return new Color({r:255, g:255,b:255})
    }

    /**
     * 黑色
     * @returns {Color}
     * @constructor
     */
    static get black(){
        return new Color({r:255, g:255,b:255})
    }

    /**
     * 透明色
     * @returns {Color}
     * @constructor
     */
    static get transparent(){
        return new Color({a:0})
    }

    /**
     * 灰色
     * @returns {Color}
     * @constructor
     */
    static get gray(){
        return new Color({r:128, g: 128, b: 128})
    }
}

/**
 * 颜色类
 */
export default class Color{
    /**
     * @param {Number} r 通道1
     * @param {Number} g 通道2
     * @param {Number} b 通道3
     * @param {Number} a：通道4
     */
    constructor({r=0, g=0,b=0, a=255}) {
        this.r = r
        this.g = g
        this.b = b
        this.a = a
    }

    /**
     * 从颜色名称创建颜色
     * @param {String} name
     * @return {Color}
     */
    static fromName(name){

    }

    /**
     * 从颜色十六进制创建颜色
     * @param {String} hex
     * @return {Color}
     */
    static fromHex(hex){

    }

    /**
     * 从数值创建颜色
     * @param {Number} val
     * @return {Color}
     */
    static fromNumber(val=0){

    }

    /**
     * 从调色板获取颜色
     * @param {Object} palete
     * @param {Number} index
     */
    static fromPalete(palete, index=0){

    }

    /**
     * 获取随机颜色
     * @param {Number} a 是否指定透明度
     */
    static random(a=null){

    }

    /**
     * 让颜色更亮一些
     * @param {Number} level
     */
    lighter(level=1){

    }

    /**
     * 让颜色更暗一些
     * @param {Number} level
     */
    darker(level=1){

    }

    /**
     * 调整颜色色相
     * @param {Number} val 色相值
     * @return {Color}
     */
    hue(val){

    }

    /**
     * 调整颜色更苍白化
     */
    paler(level=1){

    }

    /**
     * 颜色更加鲜艳
     * @return {Color}
     */
    moreColorful(level=1){

    }

    /**
     * 合并多个颜色
     * @param {[Color | Number | String]} colors
     */
    static merge(...colors){

    }

    /**
     * 获取反色
     * @return {Color}
     */
    get inverted(){

    }

    /**
     * 获取中间过渡色
     * @param {Color} colA
     * @param {Color} colB
     * @param {Number} val
     * @return {Color}
     */
    static lerp(colA, colB, val=0.5){

    }

    /**
     * 返回颜色描述
     * @param {String} format 格式
     */
    toString(format=''){

    }

    /**
     * 返回颜色值
     * @return {Number}
     */
    valueOf(){

    }

    /**
     * 文本解析成颜色
     * @param {String} text 解析的文本
     * @return {Color}
     */
    static parse(text){

    }
}