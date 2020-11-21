const get = (object: any, depth: string, defaultPrint: any = '') => {
    const _parseArrayData = (state: any, str: string): any => {
        let result = { result: false, data: "" }
        const leftCount = (str.match(/\[/g) || []).length
        const rightCount = (str.match(/]/g) || []).length
        const leftIndex = str.indexOf("[")
        const rightIndex = str.indexOf("]")
        let number = Number(str.substring(leftIndex + 1, rightIndex))
        if (leftCount > 0 && rightCount > 0 && leftCount === rightCount) {
            if (state && state[str.substring(0, leftIndex)] && (state[str.substring(0, leftIndex)].length > 0) && state[str.substring(0, leftIndex)][number]) {
                if (leftCount === 1 && rightCount === 1) {
                    result = { result: true, data: state[str.substring(0, leftIndex)][number] }
                } else {
                    const tempState = state[str.substring(0, leftIndex)][number]
                    const tempStr = str.substring(rightIndex + 1, str.length)
                    const temp = { state: tempState }
                    return _parseArrayData(temp, `state${tempStr}`)
                }
            }
        }
        return result
    }
    const _checkDepth = (state: any, str: string = ''): any => {
        if (str.indexOf('.') >= 0) {
            let array = str.split('.')
            if (state && array[0]) {
                str = str.substring((str.indexOf('.') + 1), str.length)
                const parseArray = _parseArrayData(state, array[0])
                if (parseArray.result) return parseArray.data ? _checkDepth(parseArray.data, str) : ""
                else return _checkDepth(state[array[0]], str)
            } else {
                return ""
            }
        } else {
            const parseArray = _parseArrayData(state, str)
            if (parseArray.result) return parseArray.data ? parseArray.data : ""
            return state && state[str] ? state[str] : ""
        }
    }
    if (typeof object !== "object") return defaultPrint
    if (depth) {
        let check = _checkDepth(object, depth)
        return check ? check : defaultPrint
    } else {
        return object ? object : defaultPrint
    }
}

export default get