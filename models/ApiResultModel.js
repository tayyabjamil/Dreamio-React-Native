class ApiResultModel{
code = Number
message = String
    constructor(code,message) {
    this.code = code ?? '';
    this.message = message ?? '';
}

}
export default ApiResultModel