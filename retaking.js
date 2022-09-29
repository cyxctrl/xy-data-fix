let data = [
]

const log = console.log.bind(console)

let cmds = []
for (let orderId of data) {
    let cmd = `curl http://127.0.0.1:8080/ofc/fix/retakingOrder -X POST -H "Content-type:application/json" -d '{"fulfillmentOrderId":"${orderId}"}'`
    // log(cmd)
    cmds.push(cmd)
}

log(cmds.length)
log(cmds.join(';\n'))
