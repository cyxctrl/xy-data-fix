let data = [

]

const log = console.log.bind(console)

let cmds = []
for (let orderId of data) {
    let cmd = `curl http://127.0.0.1:8080/ofc/transaction/updateFulfillmentOrder -X POST -H "Content-type:application/json" -d '{"requestList":[{"fulfillmentOrderId":"${orderId}","clearFulfillmentError":true}]}'`
    // log(cmd)
    cmds.push(cmd)
}

log(cmds.length)
log(cmds.join(';\n'))
