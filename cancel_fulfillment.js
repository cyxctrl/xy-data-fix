let data = [
]

const log = console.log.bind(console)

const main = function () {
    for (let e of data) {
        let template = `curl http://127.0.0.1:8080/ofc/transaction/cancelFulfillmentOrder -X POST -H "Content-type:application/json" -d '{"requestList":[{"fulfillmentOrderId\":"${e}"}]}'`
        log(template)
    }
}


main()