## API Documentation
Por ahora la api estara corriendo en mi computadora 

### Script
- dev
	- npm run watch:dev
- start
	- npm run start

### Route

### GetRoutes

```json
Metodo Get

http://localhost:3000/route
{
}

Respuesta @True
[
{
	"id": 1,
	"user": 1,
	"name": "ruta Santiago",
	[
		"id": 1,
		"client": 2,
		"priority": 3,
		"name": "orden de la sirena",
		"longitud": 12323213,
		"latitud": 123213123
	]
},
{
	"id": 1,
	"user": 1,
	"name": "ruta Santiago",
	[
		"id": 1,
		"client": 2,
		"priority": 3,
		"name": "orden de la sirena",
		"longitud": 12323213,
		"latitud": 123213123
	]
}
]
```



### Get an specific route

```json
Metodo Get

http://localhost:3000/route/:userId
params:
{
	id: number
}

Respuesta @True
{
	"id": 1,
	"user": 1,
	"name": "ruta Santiago",
	"createAt": date,
	"updateAt": date,
	"stops":[
        {
            "id": 1,
            "client": 2,
            "priority": 3,
            "name": "orden de la sirena",
            "longitud": 12323213,
            "latitud": 123213123
        }
	]
}

Respuesta @False
	No hay ninguna ruta
```

### Create Route

```json
Metodo POST

http://localhost:3000/route
{
	"id": 1,
	"user": 1,
	"stops":[
		"id": 1,
		"client": 2,
		"priority": 3,
		"longitud": 12323213,
		"latitud": 123213123
	]
}
```



### Payment

#### GetAll

```json
Metodo GET

http://localhost:3000/payment

body
{
}

Respuesta @True
{
    {
  "Payment": [
    {
      "CustomerRef": {
        "value": "8",
        "name": "0969 Ocean View Road"
      },
      "DepositToAccountRef": {
        "value": "4"
      },
      "TotalAmt": 387,
      "UnappliedAmt": 0,
      "ProcessPayment": false,
      "domain": "QBO",
      "sparse": false,
      "Id": "128",
      "SyncToken": "0",
      "TxnDate": "2020-02-04",
      "Line": [
        {
          "Amount": 387,
          "LinkedTxn": [
            {
              "TxnId": "96",
              "TxnType": "Invoice"
            }
          ],
          "LineEx": {
            "any": [
              {
                "name": "{http://schema.intuit.com/finance/v3}NameValue",
                "declaredType": "com.intuit.schema.finance.v3.NameValue",
                "scope": "javax.xml.bind.JAXBElement$GlobalScope",
                "value": {
                  "Name": "txnId",
                  "Value": "96"
                },
                "nil": false,
                "globalScope": true,
                "typeSubstituted": false
              },
              {
                "name": "{http://schema.intuit.com/finance/v3}NameValue",
                "declaredType": "com.intuit.schema.finance.v3.NameValue",
                "scope": "javax.xml.bind.JAXBElement$GlobalScope",
                "value": {
                  "Name": "txnOpenBalance",
                  "Value": "387.00"
                },
                "nil": false,
                "globalScope": true,
                "typeSubstituted": false
              },
              {
                "name": "{http://schema.intuit.com/finance/v3}NameValue",
                "declaredType": "com.intuit.schema.finance.v3.NameValue",
                "scope": "javax.xml.bind.JAXBElement$GlobalScope",
                "value": {
                  "Name": "txnReferenceNumber",
                  "Value": "1031"
                },
                "nil": false,
                "globalScope": true,
                "typeSubstituted": false
              }
            ]
          }
        }
      ]
    }
}

    
```

### Client

#### GetAll

```json
Metodo Get

http://localhost:3000/client

Respuesta @True
[
  {
    "Taxable": true,
    "BillAddr": {
      "Id": "2",
      "Line1": "4581 Finch St.",
      "City": "Bayshore",
      "CountrySubDivisionCode": "CA",
      "PostalCode": "94326",
      "Lat": "INVALID",
      "Long": "INVALID"
    },
    "ShipAddr": {
      "Id": "2",
      "Line1": "4581 Finch St.",
      "City": "Bayshore",
      "CountrySubDivisionCode": "CA",
      "PostalCode": "94326",
      "Lat": "INVALID",
      "Long": "INVALID"
    },
    "Job": false,
    "BillWithParent": false,
    "Balance": 239,
    "BalanceWithJobs": 239,
    "CurrencyRef": {
      "value": "USD",
      "name": "United States Dollar"
    },
    "PreferredDeliveryMethod": "Print",
    "domain": "QBO",
    "sparse": false,
    "Id": "1",
    "SyncToken": "0",
    "MetaData": {
      "CreateTime": "2020-01-27T16:48:43-08:00",
      "LastUpdatedTime": "2020-02-03T13:39:32-08:00"
    },
    "GivenName": "Amy",
    "FamilyName": "Lauterbach",
    "FullyQualifiedName": "Amy's Bird Sanctuary",
    "CompanyName": "Amy's Bird Sanctuary",
    "DisplayName": "Amy's Bird Sanctuary",
    "PrintOnCheckName": "Amy's Bird Sanctuary",
    "Active": true,
    "PrimaryPhone": {
      "FreeFormNumber": "(650) 555-3311"
    },
    "PrimaryEmailAddr": {
      "Address": "Birds@Intuit.com"
    }
  },]
```

#### Create One 

```json
Metodo POST

http://localhost:3000/client
{
	"DisplayName":"miguel",
	"PrimaryEmailAddr":{
		"Address":"maletaveras@gmail.com"
	},
	"PrimaryPhone": {
        "FreeFormNumber": "(650) 555-3311"
    },
    "CompanyName":"Cualquiera"
}


Respuesta @False
{
    "message": {
        "Fault": {
            "Error": [
                {
                    "Message": "Duplicate Name Exists Error",
                    "Detail": "The name supplied already exists. :null",
                    "code": "6240"
                }
            ],
            "type": "ValidationFault"
        },
        "time": "2020-03-22T06:10:04.560-07:00"
    }
}

Respuesta @True
{
    "Taxable": true,
    "Job": false,
    "BillWithParent": false,
    "Balance": 0,
    "BalanceWithJobs": 0,
    "CurrencyRef": {
        "value": "USD",
        "name": "United States Dollar"
    },
    "PreferredDeliveryMethod": "Print",
    "domain": "QBO",
    "sparse": false,
    "Id": "62",
    "SyncToken": "0",
    "MetaData": {
        "CreateTime": "2020-03-22T06:13:44-07:00",
        "LastUpdatedTime": "2020-03-22T06:13:44-07:00"
    },
    "FullyQualifiedName": "Hi",
    "CompanyName": "Dental",
    "DisplayName": "Hi",
    "PrintOnCheckName": "Dental",
    "Active": true,
    "PrimaryPhone": {
        "FreeFormNumber": "(650) 555-3311"
    },
    "PrimaryEmailAddr": {
        "Address": "maletaveras@gmail.com"
    },
    "DefaultTaxCodeRef": {
        "value": "2"
    }
}


```

#### Filter by Name

```
Metodo GET

http://localhost:3000/client/:name
Params{
	name: "miguel"
}

Respuesta @True
{
    "Customer": [
        {
            "Taxable": true,
            "Job": false,
            "BillWithParent": false,
            "Balance": 0,
            "BalanceWithJobs": 0,
            "CurrencyRef": {
                "value": "USD",
                "name": "United States Dollar"
            },
            "PreferredDeliveryMethod": "Print",
            "domain": "QBO",
            "sparse": false,
            "Id": "58",
            "SyncToken": "0",
            "MetaData": {
                "CreateTime": "2020-03-17T10:14:43-07:00",
                "LastUpdatedTime": "2020-03-17T10:14:43-07:00"
            },
            "FullyQualifiedName": "miguel",
            "DisplayName": "miguel",
            "PrintOnCheckName": "miguel",
            "Active": true,
            "PrimaryPhone": {
                "FreeFormNumber": "(650) 555-3311"
            },
            "PrimaryEmailAddr": {
                "Address": "maletaveras@gmail.com"
            }
        }
    ],
    "startPosition": 1,
    "maxResults": 1
}
```

### Order

#### getAvailable

```json
Metodo GET

http://localhost:3000/

Respuesta @True
{
  "TotalAmt": 31.5, 
  "BillEmail": {
    "Address": "Cool_Cars@intuit.com"
  }, 
  "CustomerMemo": {
    "value": "Thank you for your business and have a great day!"
  }, 
  "ShipAddr": {
    "City": "Half Moon Bay", 
    "Line1": "65 Ocean Dr.", 
    "PostalCode": "94213", 
    "Lat": "37.4300318", 
    "Long": "-122.4336537", 
    "CountrySubDivisionCode": "CA", 
    "Id": "4"
  }, 
  "PrintStatus": "NeedToPrint", 
  "EmailStatus": "NotSet", 
  "BillAddr": {
    "City": "Half Moon Bay", 
    "Line1": "65 Ocean Dr.", 
    "PostalCode": "94213", 
    "Lat": "37.4300318", 
    "Long": "-122.4336537", 
    "CountrySubDivisionCode": "CA", 
    "Id": "4"
  }, 
  "Line": [
    {
      "Description": "Pest Control Services", 
      "DetailType": "SalesItemLineDetail", 
      "SalesItemLineDetail": {
        "TaxCodeRef": {
          "value": "NON"
        }, 
        "Qty": 1, 
        "UnitPrice": 35, 
        "ItemRef": {
          "name": "Pest Control", 
          "value": "10"
        }
      }, 
      "LineNum": 1, 
      "Amount": 35.0, 
      "Id": "1"
    }, 
    {
      "DetailType": "SubTotalLineDetail", 
      "Amount": 35.0, 
      "SubTotalLineDetail": {}
    }, 
    {
      "DetailType": "DiscountLineDetail", 
      "Amount": 3.5, 
      "DiscountLineDetail": {
        "DiscountAccountRef": {
          "name": "Discounts given", 
          "value": "86"
        }, 
        "PercentBased": true, 
        "DiscountPercent": 10
      }
    }
  ], 
  "CustomerRef": {
    "name": "Cool Cars", 
    "value": "3"
  }, 
  "TxnTaxDetail": {
    "TotalTax": 0
  }, 
  "ApplyTaxAfterDiscount": false
}
```

### Product

#### GetAll

```json
http://localhost:3000

Respuesta @True
{
  "Item": [
    {
      "Name": "Concrete",
      "Description": "Concrete for fountain installation",
      "Active": true,
      "FullyQualifiedName": "Concrete",
      "Taxable": true,
      "UnitPrice": 0,
      "Type": "Service",
      "IncomeAccountRef": {
        "value": "48",
        "name": "Landscaping Services:Job Materials:Fountains and Garden Lighting"
      },
      "PurchaseCost": 0,
      "TrackQtyOnHand": false,
      "domain": "QBO",
      "sparse": false,
      "Id": "3",
      "SyncToken": "1",
      "MetaData": {
        "CreateTime": "2020-02-01T10:36:03-08:00",
        "LastUpdatedTime": "2020-02-04T12:47:47-08:00"
      }
    },
    {
      "Name": "Design",
      "Description": "Custom Design",
      "Active": true,
      "FullyQualifiedName": "Design",
      "Taxable": false,
      "UnitPrice": 75,
      "Type": "Service",
      "IncomeAccountRef": {
        "value": "82",
        "name": "Design income"
      },
      "PurchaseCost": 0,
      "TrackQtyOnHand": false,
      "domain": "QBO",
      "sparse": false,
      "Id": "4",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2020-02-01T10:41:38-08:00",
        "LastUpdatedTime": "2020-02-01T10:41:38-08:00"
      }
    },
    {
      "Name": "Gardening",
      "Description": "Weekly Gardening Service",
      "Active": true,
      "FullyQualifiedName": "Gardening",
      "Taxable": false,
      "UnitPrice": 0,
      "Type": "Service",
      "IncomeAccountRef": {
        "value": "45",
        "name": "Landscaping Services"
      },
      "PurchaseCost": 0,
      "TrackQtyOnHand": false,
      "domain": "QBO",
      "sparse": false,
      "Id": "6",
      "SyncToken": "0",
      "MetaData": {
        "CreateTime": "2020-02-01T10:43:14-08:00",
        "LastUpdatedTime": "2020-02-01T10:43:14-08:00"
      }
    }]
}
```

### Employee

### GetEmployee

```json
Metodo Get
http://localhost:3000/employee
{
    
}

Respuesta @True
{
    "Employee": [
        {
            "BillableTime": false,
            "domain": "QBO",
            "sparse": false,
            "Id": "55",
            "SyncToken": "0",
            "MetaData": {
                "CreateTime": "2020-02-02T11:21:48-08:00",
                "LastUpdatedTime": "2020-02-02T11:21:48-08:00"
            },
            "GivenName": "Emily",
            "FamilyName": "Platt",
            "DisplayName": "Emily Platt",
            "PrintOnCheckName": "Emily Platt",
            "Active": true
        },
        {
            "BillableTime": false,
            "HiredDate": "2020-01-04",
            "domain": "QBO",
            "sparse": false,
            "Id": "54",
            "SyncToken": "1",
            "MetaData": {
                "CreateTime": "2020-02-02T11:21:28-08:00",
                "LastUpdatedTime": "2020-02-02T11:46:26-08:00"
            },
            "GivenName": "John",
            "FamilyName": "Johnson",
            "DisplayName": "John Johnson",
            "PrintOnCheckName": "John Johnson",
            "Active": true,
            "PrimaryPhone": {
                "FreeFormNumber": "(540) 555-9645"
            }
        },
        {
            "BillableTime": false,
            "domain": "QBO",
            "sparse": false,
            "Id": "63",
            "SyncToken": "0",
            "MetaData": {
                "CreateTime": "2020-03-22T15:39:16-07:00",
                "LastUpdatedTime": "2020-03-22T15:39:16-07:00"
            },
            "GivenName": "Miguel",
            "FamilyName": "Estevez",
            "DisplayName": "Miguel Estevez",
            "PrintOnCheckName": "Miguel Estevez",
            "Active": true
        }
    ],
    "startPosition": 1,
    "maxResults": 3
}
```

#### CreateEmploye

```json
Metodo POST
http://localhost:3000/employee
{
	"firstName":"min",
	"lastName":"Estevez",
	"email":"maletaveras@gmail.com",
	"password":"miguel98",
	"type":"Repartidor",
}

Respuesta @True

```

