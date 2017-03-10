﻿require('../base');

/**
 * Class: TransferLine
 * 换乘路线信息类。
 */
TransferLine = SuperMap.Class({
    /**
     * APIProperty: lineID
     * {Number} 乘车路线名称。
     */
    lineID: null,

    /**
     * APIProperty: lineName
     * {String} 乘车路线名称。
     */
    lineName: null,

    /**
     * APIProperty: lineAliasName
     * {String} 乘车路线别名。
     */
    lineAliasName: null,

    /**
     * APIProperty: startStopIndex
     * {Number} 上车站点在本公交路线中的索引。
     */
    startStopIndex: null,

    /**
     * APIProperty: startStopName
     * {String} 上车站点名称。
     */
    startStopName: null,

    /**
     * APIProperty: startStopAliasName
     * {String} 上车站点别名。
     */
    startStopAliasName: null,

    /**
     * APIProperty: endStopIndex
     * {Number} 下车站点在本公交路线中的索引。
     */
    endStopIndex: null,

    /**
     * APIProperty: endStopName
     * {String} 下车站点名称。
     */
    endStopName: null,

    /**
     * APIProperty: endStopAliasName
     * {String} 下车站点别名。
     */
    endStopAliasName: null,

    /**
     * Constructor: TransferLine
     * 换乘路线信息类构造函数。
     *
     * Parameters:
     * options - {Object} 参数。
     *
     * Allowed options properties:
     * lineID - {String} 乘车路线名称。
     * lineName - {String} 乘车路线名称。
     * lineAliasName - {String} 乘车路线别名。
     * startStopIndex - {Number} 上车站点在本公交路线中的索引。
     * startStopName - {String} 上车站点名称。
     * startStopAliasName - {String} 上车站点别名。
     * endStopIndex - {Number} 下车站点在本公交路线中的索引。
     * endStopName - {String} 下车站点名称。
     * endStopAliasName - {String} 下车站点别名。
     */
    initialize: function (options) {
        options = options || {};
        SuperMap.Util.extend(this, options);
    },

    /**
     * APIMethod: destroy
     * 释放资源，将引用资源的属性置空。
     */
    destroy: function () {
        SuperMap.Util.reset(this);
    },

    CLASS_NAME: "TransferLine"
});

/**
 * Function: TransferLine.fromJson
 * 将返回结果转化为 TransferLine 对象。
 *
 * Parameters:
 * jsonObject - {Object} 新的返回结果。
 *
 * Returns:
 * {<TransferLine>} 转化后的 TransferLine 对象。
 */
TransferLine.fromJson = function (jsonObject) {
    if (!jsonObject) {
        return;
    }
    return new TransferLine({
        lineID: jsonObject['lineID'],
        lineName: jsonObject['lineName'],
        lineAliasName: jsonObject['lineAliasName'],
        startStopIndex: jsonObject['startStopIndex'],
        startStopName: jsonObject['startStopName'],
        startStopAliasName: jsonObject['startStopAliasName'],
        endStopIndex: jsonObject['endStopIndex'],
        endStopName: jsonObject['endStopName'],
        endStopAliasName: jsonObject['endStopAliasName']
    });
};

module.exports = function (options) {
    return new TransferLine(options);
};