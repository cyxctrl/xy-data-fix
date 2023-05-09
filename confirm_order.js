let data = [
    
]

const log = console.log.bind(console)

const main = function () {
    let cmds = []
    for (let e of data) {
        let template = `curl http://127.0.0.1:8080/order/transaction/confirm -X POST -H "Content-type:application/json" -d '{"orderId":"${e}","buyerId":0}'`
        cmds.push(template)
    }

    log(cmds.length)
    log(cmds.join(';\n'))
}


main()