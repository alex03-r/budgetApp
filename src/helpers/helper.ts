


export function capitalizeName(name:string){


    return name[0].toUpperCase() + name.slice(1);


}


export function formatWithCurrency(amount:number){

    let options ={ style: 'currency', currency: 'DOP' };

    let  formaters = new Intl.NumberFormat( 'en-Es', options) 

    return formaters.format(amount)

}


export function formatAmount(amount:number){

    let  formaters = new Intl.NumberFormat( 'en-Es')
    
    return formaters.format(amount)
}