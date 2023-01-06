let data = [
]

const log = console.log.bind(console)

let bizScene = 701
let cmds = []
for (let orderId of data) {
    let cmd = `curl --location --request POST 'http://127.0.0.1:8080/facade/settlement/splitBySettlement' --header 'Content-Type: application/json' --data-raw '{"settlementId": "${orderId}","splitChannel": 1,"source": 1,"bizScene": "${bizScene}"}'`
    // log(cmd)
    cmds.push(cmd)
}

log(cmds.length)
log(cmds.join(';\n'))
