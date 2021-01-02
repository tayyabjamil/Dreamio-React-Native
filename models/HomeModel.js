class ApiResultModel{
    name = String
    description = String
    image = String
        constructor(name,description,image) {
        this.name = name ?? '';
        this.description = description ?? '';
        this.image = image ?? ''
    }
    
    }
    export default ApiResultModel