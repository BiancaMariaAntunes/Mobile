export declare global {

    namespace ReactNavigation{
        interface RootParamList{
            login : undefined
            register : {
                nome : string
                valor : number         
            }
            data : {
                nome : string
                valor : number 
                idade : string  
            }
            result : {
                valorseguroano: number
                valorseguro : number
                base : number
                result : number
                idade : string 
                nome : string
                carro : string
                ano : string
                valor : number
            }
        }
    }
}