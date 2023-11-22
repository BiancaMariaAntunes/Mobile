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
                valorcarro : string
                idade : string 
                nome : string
                carro : string
                ano : string
                valor : number
            }
        }
    }
}