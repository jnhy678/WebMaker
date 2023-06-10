"use strict";
var objectKind;
(function (objectKind) {
    objectKind[objectKind["text"] = 1] = "text";
    objectKind[objectKind["longtext"] = 2] = "longtext";
    objectKind[objectKind["check"] = 3] = "check";
    objectKind[objectKind["radio"] = 4] = "radio";
    objectKind[objectKind["select"] = 5] = "select";
    objectKind[objectKind["switch"] = 6] = "switch";
    objectKind[objectKind["dropdown"] = 7] = "dropdown";
    objectKind[objectKind["date"] = 8] = "date";
    objectKind[objectKind["time"] = 9] = "time";
})(objectKind || (objectKind = {}));
var dataType;
(function (dataType) {
    dataType[dataType["question"] = 1] = "question";
    dataType[dataType["info"] = 2] = "info";
    dataType[dataType["denger"] = 3] = "denger";
    dataType[dataType["test"] = 4] = "test";
})(dataType || (dataType = {}));
const $FORM_HISTORYTAKING = $('[name="form-history-taking"]');
console.log($FORM_HISTORYTAKING);
console.log('ㅎㅎ');
