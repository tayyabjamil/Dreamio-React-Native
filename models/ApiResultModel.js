class ApiResultModel{
code = Number
message = String
jwt_token = String
    constructor(code,message,jwt_token) {
    this.code = code ?? '';
    this.message = message ?? '';
    this.jwt_token = jwt_token ?? ''
}

}
export default ApiResultModel