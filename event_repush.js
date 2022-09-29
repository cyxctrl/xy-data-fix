let data = [
]

const log = console.log.bind(console)

let cmds = []
for (let orderId of data) {
    let cmd = `curl http://127.0.0.1:8080/ofc/ofcEventRepush/repush -X POST -H "Content-type:application/json" -d \'{"relatingOrderId":"${orderId}","eventCode":"SHIPPING_ORDER_WAREHOUSE_OUTBOUND","type":"SHIPPING_ORDER","status":"300"}'`
    // log(cmd)
    cmds.push(cmd)
}

log(cmds.length)
log(cmds.join(';\n'))
