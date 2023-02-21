// const data = [{
//     name: 'john',
//     object: [{
//         name:'johny',
//     },{
//         name:'hehe'
//     }]
// }, {
//     name: 'bitch',
//     fckyou : [{
//         name: 'please'
//     }]
// }]


const getData = (data) => data.map((item) => {
    Object.values(item).map((value) => {
      
        if (typeof value == 'object' && value != undefined){
            getData(value)
        }else console.log(value)
  
    })
})