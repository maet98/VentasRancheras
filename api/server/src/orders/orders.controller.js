const QBO = require("../../ERP/index")
import {
    stop
} from "../models/stop";

export async function createOrder(req, res) {
    const qbo = await QBO.getQbo();
    const {
        Items,
        clientId
    } = req.body;
    qbo.findItems({}, (err, ans) => {
        if (err) {
            return res.status(400).json(err);
        }
        var UnitPrice = new Map();
        var arr = ans.QueryResponse.Item;
        for (let i = 0; i < arr.length; i++) {
            UnitPrice.set(arr[i].Id, arr[i].UnitPrice);
        }
        var line = [];
        for (let i = 0; i < Items.length; i++) {
            const item = {
                DetailType: "SalesItemLineDetail",
                SalesItemLineDetail: {
                    ItemRef: {
                        value: Items[i].itemId
                    },
                    Qty: Items[i].Amount
                },
                Amount: UnitPrice.get(Items[i].itemId.toString()) * Items[i].Amount
            }
            line.push(item);
        }
        qbo.getCustomer(clientId, (err, ans) => {
            if (err) {
                return res.status(400).json(err);
            }
            const Order = {
                CustomerRef: {
                    value: clientId
                },
                Line: line,
                ShipAddr: req.body.ShipAddr,
                PrivateNote: req.body.employeeId,
                BillEmail: {
                    Address: ans.PrimaryEmailAddr.Address
                }
            }

            qbo.createInvoice(Order, (err, Invoice) => {
                if (err) {
                    res.json({
                        error: err
                    });
                }
                res.json(Invoice);
            })

        })
    })
}

export async function confirmOrder(req, res) {
    const id = req.params.id;
    const qbo = await QBO.getQbo();
    qbo.sendInvoicePdf(id, (err, ans) => {
        if (err) {
            console.log(err);
            return res.json(err);
        }
        console.log(ans);
        res.json(ans);
    })
}

export async function getOrdersByClientId(req, res) {
    const id = req.params.CustomerId;
    const qbo = await QBO.getQbo();
    qbo.findInvoices({
            CustomerRef: id
        },
        (err, customers) => {
            if (err) {
                return res.status(400).json(err);
            }
            res.json(customers);
        });
}

export async function getOrderByEmployeeId(req, res) {
    const id = req.params.id;
    const qbo = await QBO.getQbo();
    qbo.findInvoices({}, (err, order) => {
        if (err) {
            return res.status(400).json(err);
        }
        const arr = order.QueryResponse.Invoice;
        const ans = [];
        for (let i = 0; i < arr.length; ++i) {
            if (arr[i].PrivateNote == id) {
                ans.push(arr[i]);
            }
        }
        res.json(ans);
    })
}

export async function getAvailableOrders(req, res) {
    const qbo = await QBO.getQbo();
    qbo.findInvoices({
        fetchAll: true
    }, (err, Invoice) => {
        if (err) {
            console.log(err);
            return res.json({
                error: err
            });
        }
        var orders = Invoice.QueryResponse.Invoice;
        console.log(orders.length)
        var ans = [];
        stop.findAll({
                where: {
                    entregado: false
                }
            })
            .then(stops => {
                for (let i = 0; i < orders.length; i++) {
                    var can = false;
                    for (let j = 0; j < stops.length; j++) {
                        if (orders[i].Id == stops[j].orderId) {
                            can = true;
                            break;
                        }
                        if ("PrivateNote" in orders[i]) {
                            orders[i].employeeId = orders[i].PrivateNote;
                        }
                    }
                    if (!can) {
                        ans.push(orders[i]);
                    }
                }
                res.json({
                    "orders": ans
                })
            })
    });
}

export async function getAll(req, res) {
    const qbo = await QBO.getQbo();
    qbo.findInvoices({
        fetchAll: true
    }, (err, invoice) => {
        if (err) {
            res.json({
                error: err
            });
        }
        var arr = invoice.QueryResponse.Invoice;
        for (let i = 0; i < arr.length; i++) {
            if ("PrivateNote" in arr[i]) {
                arr[i].employeeId = arr[i].PrivateNote;
            }
        }
        res.json(arr);
    });
}